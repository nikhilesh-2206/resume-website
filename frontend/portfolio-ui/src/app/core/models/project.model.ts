export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  technologies: string;
  githubUrl: string | null;
  imageUrl: string | null;
  displayOrder: number;
  featured: boolean;
}
