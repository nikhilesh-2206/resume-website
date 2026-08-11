export interface Education {
  id: number;
  degree: string;
  fieldOfStudy?: string;
  institution: string;
  location?: string;
  startYear?: number;
  endYear?: number;
  description?: string;
  displayOrder: number;
}
