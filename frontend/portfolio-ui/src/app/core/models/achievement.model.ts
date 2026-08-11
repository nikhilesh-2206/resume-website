export interface Achievement {
  id: number;
  title: string;
  description: string;
  organization?: string;
  achievementDate?: string;
  displayOrder: number;
  featured: boolean;
}
