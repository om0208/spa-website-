-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create admin_users table for role-based access
CREATE TABLE admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'content_manager',
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT valid_role CHECK (role IN ('super_admin', 'content_manager', 'support_staff'))
);

-- Create spa_services table
CREATE TABLE spa_services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    duration INTEGER NOT NULL, -- in minutes
    category VARCHAR(50) NOT NULL,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    is_draft BOOLEAN DEFAULT false,
    buffer_time INTEGER DEFAULT 15, -- buffer time in minutes
    max_advance_booking INTEGER DEFAULT 30, -- days in advance
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES admin_users(id),
    updated_by UUID REFERENCES admin_users(id)
);

-- Create homepage_section_order table for drag-and-drop ordering
CREATE TABLE homepage_section_order (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    section_key VARCHAR(100) NOT NULL UNIQUE,
    display_order INTEGER NOT NULL,
    is_visible BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create spa_homepage_content table for JSON blocks with draft/publish
CREATE TABLE spa_homepage_content (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    section VARCHAR(100) NOT NULL UNIQUE,
    content JSONB NOT NULL,
    is_published BOOLEAN DEFAULT false,
    is_draft BOOLEAN DEFAULT true,
    version INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES admin_users(id),
    updated_by UUID REFERENCES admin_users(id)
);

-- Create blog_posts table with enhanced features
CREATE TABLE blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    featured_image TEXT,
    author VARCHAR(100) NOT NULL,
    published BOOLEAN DEFAULT false,
    is_draft BOOLEAN DEFAULT true,
    seo_title VARCHAR(255),
    seo_description TEXT,
    seo_keywords TEXT,
    word_count INTEGER DEFAULT 0,
    reading_time INTEGER DEFAULT 0, -- in minutes
    auto_save_content TEXT, -- for auto-save functionality
    last_auto_save TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE,
    created_by UUID REFERENCES admin_users(id),
    updated_by UUID REFERENCES admin_users(id)
);

-- Create bookings table with enhanced features
CREATE TABLE bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    service_id UUID REFERENCES spa_services(id) ON DELETE SET NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    end_time TIME NOT NULL, -- calculated based on service duration + buffer
    status VARCHAR(20) DEFAULT 'pending',
    notes TEXT,
    cancellation_reason TEXT,
    reschedule_count INTEGER DEFAULT 0,
    confirmation_sent BOOLEAN DEFAULT false,
    reminder_sent BOOLEAN DEFAULT false,
    is_guest_booking BOOLEAN DEFAULT true,
    user_id UUID, -- for logged-in users
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed', 'no_show'))
);

-- Create admin_audit_logs table for tracking changes
CREATE TABLE admin_audit_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    admin_user_id UUID REFERENCES admin_users(id),
    action VARCHAR(100) NOT NULL,
    table_name VARCHAR(100) NOT NULL,
    record_id UUID NOT NULL,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin_activity_logs table for session tracking
CREATE TABLE admin_activity_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    admin_user_id UUID REFERENCES admin_users(id),
    activity_type VARCHAR(50) NOT NULL,
    description TEXT,
    metadata JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT valid_activity CHECK (activity_type IN ('login', 'logout', 'create', 'update', 'delete', 'view'))
);

-- Create time_slots table for booking availability
CREATE TABLE time_slots (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT true,
    is_blocked BOOLEAN DEFAULT false,
    block_reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(date, start_time)
);

-- Create indexes for better performance
CREATE INDEX idx_spa_services_category ON spa_services(category);
CREATE INDEX idx_spa_services_active ON spa_services(is_active);
CREATE INDEX idx_spa_services_draft ON spa_services(is_draft);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_draft ON blog_posts(is_draft);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_service ON bookings(service_id);
CREATE INDEX idx_admin_audit_logs_user ON admin_audit_logs(admin_user_id);
CREATE INDEX idx_admin_audit_logs_table ON admin_audit_logs(table_name);
CREATE INDEX idx_admin_activity_logs_user ON admin_activity_logs(admin_user_id);
CREATE INDEX idx_time_slots_date ON time_slots(date);
CREATE INDEX idx_homepage_section_order ON homepage_section_order(display_order);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create function to calculate booking end time
CREATE OR REPLACE FUNCTION calculate_booking_end_time()
RETURNS TRIGGER AS $$
DECLARE
    service_duration INTEGER;
    service_buffer INTEGER;
BEGIN
    -- Get service duration and buffer time
    SELECT duration, buffer_time INTO service_duration, service_buffer
    FROM spa_services 
    WHERE id = NEW.service_id;
    
    -- Calculate end time (start time + duration + buffer)
    NEW.end_time = NEW.booking_time + INTERVAL '1 minute' * (service_duration + COALESCE(service_buffer, 15));
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create function to update word count and reading time
CREATE OR REPLACE FUNCTION update_blog_stats()
RETURNS TRIGGER AS $$
BEGIN
    -- Calculate word count (approximate)
    NEW.word_count = array_length(string_to_array(regexp_replace(NEW.content, '<[^>]*>', '', 'g'), ' '), 1);
    
    -- Calculate reading time (assuming 200 words per minute)
    NEW.reading_time = GREATEST(1, ROUND(NEW.word_count / 200.0));
    
    -- Set published_at when publishing
    IF NEW.published = true AND OLD.published = false THEN
        NEW.published_at = NOW();
    END IF;
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update timestamps
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_spa_services_updated_at BEFORE UPDATE ON spa_services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_spa_homepage_content_updated_at BEFORE UPDATE ON spa_homepage_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_time_slots_updated_at BEFORE UPDATE ON time_slots FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_homepage_section_order_updated_at BEFORE UPDATE ON homepage_section_order FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create triggers for business logic
CREATE TRIGGER calculate_booking_end_time_trigger BEFORE INSERT OR UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION calculate_booking_end_time();
CREATE TRIGGER update_blog_stats_trigger BEFORE INSERT OR UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_blog_stats();

-- Enable Row Level Security (RLS)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE spa_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE spa_homepage_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_section_order ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to active services" ON spa_services FOR SELECT USING (is_active = true AND is_draft = false);
CREATE POLICY "Allow public read access to published homepage content" ON spa_homepage_content FOR SELECT USING (is_published = true);
CREATE POLICY "Allow public read access to published blog posts" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Allow public read access to homepage section order" ON homepage_section_order FOR SELECT USING (is_visible = true);

-- Create policies for admin access (you'll need to set up authentication)
-- For now, allowing all operations for development
CREATE POLICY "Allow all operations on admin_users" ON admin_users FOR ALL USING (true);
CREATE POLICY "Allow all operations on spa_services" ON spa_services FOR ALL USING (true);
CREATE POLICY "Allow all operations on spa_homepage_content" ON spa_homepage_content FOR ALL USING (true);
CREATE POLICY "Allow all operations on blog_posts" ON blog_posts FOR ALL USING (true);
CREATE POLICY "Allow all operations on bookings" ON bookings FOR ALL USING (true);
CREATE POLICY "Allow all operations on admin_audit_logs" ON admin_audit_logs FOR ALL USING (true);
CREATE POLICY "Allow all operations on admin_activity_logs" ON admin_activity_logs FOR ALL USING (true);
CREATE POLICY "Allow all operations on time_slots" ON time_slots FOR ALL USING (true);
CREATE POLICY "Allow all operations on homepage_section_order" ON homepage_section_order FOR ALL USING (true);