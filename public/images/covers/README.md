# Featured Projects - Automatic System

This directory contains the image and JSON files for the Featured Projects section on the website.

## How to Add/Edit/Remove Projects

### Adding a New Project

1. **Upload an image file** (supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`)
   - Example: `img3.png`, `project-name.jpg`, etc.

2. **Create a JSON file** with the same base name
   - Example: `img3.json`, `project-name.json`, etc.

### JSON File Format

```json
{
  "client": "Company Name",
  "slug": "project-slug-for-url",
  "tags": ["Web Design", "Branding", "UI/UX", "Webflow Dev"],
  "backdrop": "from-[#color1] to-[#color2]",
  "backdropRing": "ring-color/opacity"
}
```

### Available Tags
- `"Web Design"`
- `"Webflow Dev"`
- `"Branding"`
- `"UI/UX"`

### Example Files
- `img1.JPG` + `img1.json` = First project
- `img2.JPG` + `img2.json` = Second project

### Project Order
Projects are displayed in alphabetical order by filename. Use numbered prefixes (`img1`, `img2`, etc.) for specific ordering.

### Notes
- Both image and JSON files must exist for a project to appear
- Missing files are logged to console but don't break the system
- Changes are automatically reflected after page refresh
- No code changes required - just upload files via GitHub!