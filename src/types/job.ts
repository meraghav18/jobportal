export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";
export type ExperienceLevel = "Fresher" | "Entry-level" | "Mid-level" | "Senior";

export interface Job {
  id: string;
  title: string;
  company: string;
  initials: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  type: JobType;
  experience: ExperienceLevel;
  category: string;
  skills: string[];
  postedDaysAgo: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  featured?: boolean;
}