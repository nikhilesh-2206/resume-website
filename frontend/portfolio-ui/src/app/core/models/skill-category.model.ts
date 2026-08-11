export interface Skill {
  id: number;
  name: string;
  displayOrder: number;
}

export interface SkillCategory {
  id: number;
  name: string;
  displayOrder: number;
  skills: Skill[];
}
