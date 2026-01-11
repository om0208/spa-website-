# Spa Images Directory

This directory contains all spa-related images for the website.

## Directory Structure

```
public/images/spa/
├── hero/           # Hero section images
├── services/       # Service-specific images
│   ├── massage/    # Massage therapy images
│   ├── facial/     # Facial treatment images
│   ├── body/       # Body therapy images
│   └── sauna/      # Sauna & steam images
└── gallery/        # General spa gallery images
```

## Image Guidelines

### Recommended Specifications:
- **Format**: JPG or WebP for photos, PNG for graphics
- **Resolution**: Minimum 1200x800px for hero images, 600x400px for service images
- **File Size**: Keep under 500KB for optimal loading
- **Aspect Ratio**: 3:2 or 4:3 for service images, 16:9 for hero images

### Image Types Needed:

**Hero Images (hero/):**
- Luxury spa treatment room
- Relaxation lounge
- Spa exterior/entrance

**Service Images (services/):**
- **Massage (massage/)**: Swedish massage, deep tissue, hot stone therapy
- **Facial (facial/)**: Skincare treatments, facial masks, skin analysis
- **Body (body/)**: Body wraps, scrubs, aromatherapy treatments
- **Sauna (sauna/)**: Traditional sauna, infrared sauna, steam room

**Gallery Images (gallery/):**
- Spa facilities
- Treatment rooms
- Relaxation areas
- Spa products
- Wellness amenities

## Usage

### Option 1: Local Images
Place images in appropriate folders and reference them as:
```typescript
src="/images/spa/services/massage/swedish-massage.jpg"
```

### Option 2: Cloudinary Upload
Use the admin panel to upload images directly to Cloudinary for better performance and management.

### Option 3: External URLs
Continue using high-quality stock images from Unsplash or other sources.

## Current Implementation

The website currently uses curated Unsplash images that are spa-appropriate. You can:

1. **Replace with your own photos**: Add your spa's actual photos to these folders
2. **Use Cloudinary**: Upload through the admin panel (requires Cloudinary setup)
3. **Keep current images**: The selected Unsplash images are professional and spa-appropriate