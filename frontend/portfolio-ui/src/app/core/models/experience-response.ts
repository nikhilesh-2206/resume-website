export interface ExperienceProject {
  title: string;
  description: string;
}

export interface ExperienceResponse {
  id: number;
  companyName: string;
  designation: string;
  location: string;
  companyLogo: string | null;
  fromDate: string;
  toDate: string | null;
  summary: string | null;
  projectsWorkDone: ExperienceProject[];
  majorTechnologies: string[];
  displayOrder: number;
}
