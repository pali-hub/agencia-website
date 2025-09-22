/**
 * Automatic Featured Projects System
 * 
 * This system automatically reads featured projects from the public/images/covers/ directory
 * by pairing JSON files with their corresponding image files.
 * 
 * How to add/remove/edit projects:
 * 1. Upload an image file (png, jpg, jpeg, webp) to public/images/covers/ with a descriptive name
 * 2. Create a JSON file with the same base name containing project data
 * 3. Projects are ordered alphabetically by filename (use img1, img2, etc. for specific order)
 * 
 * Example:
 * - img1.png + img1.json = first project
 * - img2.jpg + img2.json = second project
 * 
 * JSON format:
 * {
 *   "client": "Company Name",
 *   "slug": "project-slug",
 *   "tags": ["Web Design", "Branding"],
 *   "backdrop": "from-[#color1] to-[#color2]",
 *   "backdropRing": "ring-white/10"  // optional
 * }
 */

import { FeaturedProject, ProjectTag } from './projectsData';
import fs from 'fs';
import path from 'path';

const COVERS_DIR = path.join(process.cwd(), 'public', 'images', 'covers');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.PNG', '.JPG', '.JPEG', '.WEBP'];

export function getFeaturedProjectsAuto(): FeaturedProject[] {
  // Check if covers directory exists
  if (!fs.existsSync(COVERS_DIR)) {
    console.warn('Covers directory not found:', COVERS_DIR);
    return [];
  }

  const projects: FeaturedProject[] = [];
  const files = fs.readdirSync(COVERS_DIR);
  
  // Get all JSON files
  const jsonFiles = files.filter(file => file.endsWith('.json'));
  
  // Sort JSON files to maintain order (img1, img2, etc.)
  jsonFiles.sort((a, b) => {
    const aMatch = a.match(/(\d+)/);
    const bMatch = b.match(/(\d+)/);
    
    if (aMatch && bMatch) {
      return parseInt(aMatch[1]) - parseInt(bMatch[1]);
    }
    
    return a.localeCompare(b);
  });

  for (const jsonFile of jsonFiles) {
    try {
      const jsonPath = path.join(COVERS_DIR, jsonFile);
      const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
      const projectData = JSON.parse(jsonContent);

      // Find corresponding image file
      const baseName = path.parse(jsonFile).name;
      const imageFile = files.find(file => {
        const fileBaseName = path.parse(file).name;
        const extension = path.extname(file);
        return fileBaseName === baseName && IMAGE_EXTENSIONS.includes(extension);
      });

      if (!imageFile) {
        console.warn(`No matching image found for ${jsonFile}`);
        continue;
      }

      // Validate required fields
      if (!projectData.client || !projectData.slug || !projectData.tags || !projectData.backdrop) {
        console.warn(`Missing required fields in ${jsonFile}`);
        continue;
      }

      // Validate tags
      if (!Array.isArray(projectData.tags)) {
        console.warn(`Tags must be an array in ${jsonFile}`);
        continue;
      }

      const project: FeaturedProject = {
        client: projectData.client,
        slug: projectData.slug,
        cover: `/images/covers/${imageFile}`,
        tags: projectData.tags as ProjectTag[],
        backdrop: projectData.backdrop,
        backdropRing: projectData.backdropRing || undefined
      };

      projects.push(project);
    } catch (error) {
      console.error(`Error processing ${jsonFile}:`, error);
    }
  }

  return projects;
}