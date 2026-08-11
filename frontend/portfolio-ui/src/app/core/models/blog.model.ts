export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string | null;
  readingTime: number | null;
  publishedAt: string | null;
  displayOrder: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
