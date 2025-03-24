# Customization Guide

This document guides you through the necessary customizations for your personal website.

## 1. Profile Photo
Replace the placeholder profile photo with your own:
1. Add your profile photo to `/public/profile.jpg`
2. Requirements:
   - Recommended size: 500x500 pixels
   - Format: JPG or PNG
   - File name must be `profile.jpg`
   - Square aspect ratio recommended

## 2. Social Media Links
Update your social media links in `/src/components/Footer.tsx`:

```tsx
// Update these URLs with your profiles
<a href="https://github.com/YOUR_GITHUB_USERNAME" />
<a href="https://twitter.com/YOUR_TWITTER_USERNAME" />
<a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" />
```

Current settings:
- GitHub: ibusnowden
- Twitter: ibusnowden
- LinkedIn: ibra-niang

## 3. Personal Information
Update your personal information in `/src/components/AboutMe.tsx`:

1. Name and Title
2. About Me description
3. List of interests/skills

## 4. Content Sections
Customize these sections in their respective components:

1. Projects (`/src/app/projects/page.tsx`)
2. Publications (`/src/app/publications/page.tsx`)
3. Contact (`/src/app/contact/page.tsx`)

## 5. Metadata
Update the website metadata in `/src/app/layout.tsx`:
- Title
- Description
- Any additional meta tags

## 6. Colors and Styling
The website uses a dark theme by default. To modify the color scheme:
1. Update the Tailwind classes in the components
2. Modify the theme in `tailwind.config.ts`

## Remember to:
1. Test all links after updating
2. Ensure images are optimized for web
3. Update the copyright year in the footer if needed
4. Keep your profile information current

## Need Help?
If you need assistance with any of these customizations, please refer to:
1. The Next.js documentation: https://nextjs.org/docs
2. Tailwind CSS documentation: https://tailwindcss.com/docs
3. Or open an issue in the repository 