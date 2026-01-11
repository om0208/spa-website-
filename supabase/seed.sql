-- Insert sample spa services
INSERT INTO spa_services (name, description, price, duration, category, image_url, is_active) VALUES
-- Massage Therapy
('Swedish Relaxation Massage', 'Classic full-body massage using long, flowing strokes to promote deep relaxation and improve circulation. Perfect for stress relief and muscle tension.', 120.00, 60, 'massage', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Deep Tissue Massage', 'Intensive massage targeting deeper muscle layers to release chronic tension and knots. Ideal for athletes and those with persistent muscle pain.', 160.00, 90, 'massage', 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Hot Stone Massage', 'Therapeutic massage using heated stones to warm and relax muscles for deeper healing. The heat helps increase blood flow and reduce muscle tension.', 140.00, 75, 'massage', 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Couples Massage', 'Romantic side-by-side massage experience perfect for couples. Choose from Swedish, deep tissue, or hot stone techniques in our couples suite.', 280.00, 60, 'massage', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),

-- Facial Treatments
('Signature Hydrating Facial', 'Deeply moisturizing facial treatment that restores skin''s natural glow and elasticity. Includes cleansing, exfoliation, mask, and moisturizing.', 100.00, 60, 'facial', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Anti-Aging Collagen Facial', 'Advanced treatment using collagen-boosting ingredients to reduce fine lines and improve skin texture. Includes LED light therapy and peptide mask.', 150.00, 75, 'facial', 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Purifying Detox Facial', 'Deep cleansing treatment that removes impurities and balances oily or acne-prone skin. Includes extraction and purifying clay mask.', 110.00, 60, 'facial', 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Gentleman''s Facial', 'Customized facial treatment designed specifically for men''s skin. Addresses razor burn, ingrown hairs, and environmental damage.', 95.00, 50, 'facial', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),

-- Body Therapy
('Aromatherapy Body Wrap', 'Luxurious full-body treatment using essential oils and therapeutic wraps to detoxify and nourish skin. Choose from lavender, eucalyptus, or citrus blends.', 180.00, 90, 'therapy', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Exfoliating Body Scrub', 'Invigorating treatment that removes dead skin cells and leaves skin silky smooth. Includes full-body exfoliation and moisturizing treatment.', 90.00, 45, 'therapy', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Cellulite Reduction Treatment', 'Specialized treatment combining massage, dry brushing, and targeted serums to improve skin texture and reduce the appearance of cellulite.', 130.00, 60, 'therapy', 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),

-- Sauna & Steam
('Traditional Finnish Sauna', 'Authentic sauna experience with dry heat to promote sweating and detoxification. Includes access to relaxation area and refreshments.', 40.00, 30, 'sauna', 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Infrared Sauna Session', 'Gentle infrared heat therapy that penetrates deeper for enhanced wellness benefits. Promotes detoxification and muscle recovery.', 60.00, 45, 'sauna', 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true),
('Steam Room & Eucalyptus', 'Relaxing steam therapy infused with eucalyptus essential oils. Helps clear respiratory passages and deeply cleanses pores.', 35.00, 25, 'sauna', 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', true);

-- Insert homepage content blocks
INSERT INTO spa_homepage_content (section, content) VALUES
('hero', '{
  "title": "Welcome to Serenity Spa",
  "subtitle": "Experience Ultimate Relaxation",
  "description": "Escape the everyday and immerse yourself in a world of tranquility. Our luxury spa offers premium treatments designed to restore your body, mind, and spirit.",
  "cta_text": "Book Your Experience",
  "cta_link": "/booking",
  "background_image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}'),
('features', '{
  "title": "Why Choose Serenity Spa",
  "subtitle": "Experience the Difference",
  "features": [
    {
      "title": "Luxury Treatments",
      "description": "Premium spa services using the finest natural ingredients and advanced techniques.",
      "icon": "sparkles"
    },
    {
      "title": "Wellness Focus",
      "description": "Holistic approach to health and wellness, nurturing both body and mind.",
      "icon": "heart"
    },
    {
      "title": "Natural Products",
      "description": "Organic, eco-friendly products that are gentle on your skin and the environment.",
      "icon": "leaf"
    },
    {
      "title": "Expert Therapists",
      "description": "Highly trained professionals dedicated to providing exceptional care.",
      "icon": "star"
    }
  ]
}'),
('testimonials', '{
  "title": "What Our Clients Say",
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "text": "The most relaxing experience I''ve ever had. The staff is incredibly professional and the facilities are pristine.",
      "rating": 5,
      "service": "Swedish Massage"
    },
    {
      "name": "Michael Chen",
      "text": "Amazing deep tissue massage that really helped with my chronic back pain. Highly recommend!",
      "rating": 5,
      "service": "Deep Tissue Massage"
    },
    {
      "name": "Emily Rodriguez",
      "text": "The facial treatment left my skin glowing for weeks. The products they use are top quality.",
      "rating": 5,
      "service": "Hydrating Facial"
    }
  ]
}');

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, author, published) VALUES
('The Benefits of Regular Massage Therapy', 'benefits-of-regular-massage-therapy', 
'<h2>Why Regular Massage Should Be Part of Your Wellness Routine</h2>
<p>In today''s fast-paced world, stress and tension have become constant companions for many of us. Regular massage therapy offers a powerful antidote to the pressures of modern life, providing both immediate relief and long-term health benefits.</p>

<h3>Physical Benefits</h3>
<p>Regular massage therapy can help:</p>
<ul>
<li>Reduce muscle tension and pain</li>
<li>Improve circulation and lymphatic drainage</li>
<li>Enhance flexibility and range of motion</li>
<li>Boost immune system function</li>
<li>Lower blood pressure</li>
</ul>

<h3>Mental and Emotional Benefits</h3>
<p>Beyond the physical advantages, massage therapy also provides significant mental health benefits:</p>
<ul>
<li>Reduces stress and anxiety levels</li>
<li>Promotes better sleep quality</li>
<li>Increases mental clarity and focus</li>
<li>Enhances overall mood and well-being</li>
</ul>

<h3>Making Massage a Regular Practice</h3>
<p>To maximize the benefits of massage therapy, consider scheduling regular sessions based on your lifestyle and needs. Whether it''s weekly, bi-weekly, or monthly, consistency is key to experiencing the cumulative effects of this ancient healing practice.</p>',
'Discover how regular massage therapy can transform your physical and mental well-being, from reducing stress to improving circulation and sleep quality.',
'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Dr. Sarah Williams', true),

('Essential Oils and Aromatherapy: A Guide to Natural Wellness', 'essential-oils-aromatherapy-guide',
'<h2>Harnessing the Power of Nature for Wellness</h2>
<p>Aromatherapy has been used for thousands of years to promote healing, relaxation, and overall well-being. At Serenity Spa, we incorporate the finest essential oils into our treatments to enhance your spa experience.</p>

<h3>Popular Essential Oils and Their Benefits</h3>
<h4>Lavender</h4>
<p>Known for its calming properties, lavender essential oil is perfect for reducing stress and promoting restful sleep. It''s also excellent for soothing irritated skin.</p>

<h4>Eucalyptus</h4>
<p>This invigorating oil helps clear respiratory passages and provides a refreshing, energizing experience. It''s particularly beneficial in our steam treatments.</p>

<h4>Peppermint</h4>
<p>Cooling and refreshing, peppermint oil can help relieve headaches and muscle tension while providing a natural energy boost.</p>

<h3>How We Use Aromatherapy</h3>
<p>Our skilled therapists carefully select essential oil blends based on your individual needs and preferences. Whether you''re seeking relaxation, invigoration, or healing, we have the perfect aromatic experience for you.</p>',
'Learn about the therapeutic benefits of essential oils and how aromatherapy can enhance your wellness journey at our spa.',
'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Maria Santos', true),

('Skincare Tips for Glowing, Healthy Skin', 'skincare-tips-healthy-glowing-skin',
'<h2>Your Guide to Radiant Skin</h2>
<p>Achieving healthy, glowing skin is a journey that combines proper skincare techniques, quality products, and professional treatments. Here are our expert tips for maintaining beautiful skin year-round.</p>

<h3>Daily Skincare Essentials</h3>
<ol>
<li><strong>Gentle Cleansing:</strong> Use a mild cleanser twice daily to remove impurities without stripping natural oils.</li>
<li><strong>Moisturize:</strong> Apply a quality moisturizer suited to your skin type to maintain hydration.</li>
<li><strong>Sun Protection:</strong> Never skip SPF, even on cloudy days or when staying indoors.</li>
<li><strong>Hydration:</strong> Drink plenty of water to keep your skin hydrated from within.</li>
</ol>

<h3>Professional Treatments</h3>
<p>While a good home routine is essential, professional facial treatments can address specific concerns and provide deeper cleansing and nourishment that you can''t achieve at home.</p>

<h3>Seasonal Skin Care</h3>
<p>Adjust your skincare routine based on the season. Winter may require richer moisturizers, while summer calls for lighter formulations and extra sun protection.</p>',
'Discover professional skincare tips and learn how to maintain healthy, radiant skin with proper care and treatments.',
'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Jennifer Kim', true);

-- Insert sample bookings (for demonstration)
INSERT INTO bookings (service_id, customer_name, customer_email, customer_phone, booking_date, booking_time, status, notes) VALUES
((SELECT id FROM spa_services WHERE name = 'Swedish Relaxation Massage' LIMIT 1), 'Alice Johnson', 'alice.johnson@email.com', '(555) 123-4567', CURRENT_DATE + INTERVAL '3 days', '10:00:00', 'confirmed', 'First time client, prefers medium pressure'),
((SELECT id FROM spa_services WHERE name = 'Signature Hydrating Facial' LIMIT 1), 'Bob Smith', 'bob.smith@email.com', '(555) 234-5678', CURRENT_DATE + INTERVAL '5 days', '14:30:00', 'pending', 'Has sensitive skin'),
((SELECT id FROM spa_services WHERE name = 'Deep Tissue Massage' LIMIT 1), 'Carol Davis', 'carol.davis@email.com', '(555) 345-6789', CURRENT_DATE + INTERVAL '1 day', '11:00:00', 'confirmed', 'Chronic lower back pain'),
((SELECT id FROM spa_services WHERE name = 'Hot Stone Massage' LIMIT 1), 'David Wilson', 'david.wilson@email.com', '(555) 456-7890', CURRENT_DATE + INTERVAL '7 days', '16:00:00', 'pending', 'Anniversary gift from spouse');