import type { Job } from "../types/job";

const makeJob = (
  id: string, title: string, company: string, location: string, salaryMin: number, salaryMax: number,
  type: Job["type"], experience: Job["experience"], category: string, skills: string[], postedDaysAgo: number,
  description: string, featured = false
): Job => ({
  id, title, company, initials: company.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase(),
  location, salaryMin, salaryMax, type, experience, category, skills, postedDaysAgo, description, featured,
  responsibilities: [
    "Work closely with the team to deliver reliable, high-quality results.",
    "Communicate progress, share ideas, and document your work.",
    "Review feedback and continuously improve processes and outcomes."
  ],
  requirements: [
    `Working knowledge of ${skills.slice(0, 2).join(" and ")}.`,
    "Good problem-solving and communication skills.",
    "A willingness to learn, collaborate, and take ownership."
  ],
  benefits: ["Learning and development opportunities", "Supportive team environment", "Flexible work culture"]
});

export const jobs: Job[] = [
  makeJob("j01", "Frontend Developer", "PixelCraft", "Noida, Uttar Pradesh", 4, 8, "Full-time", "Entry-level", "Development", ["React", "TypeScript", "CSS"], 1, "Build accessible, responsive web experiences with a collaborative product team.", true),
  makeJob("j02", "Data Analyst Intern", "InsightLoop", "Remote", 2, 3.6, "Internship", "Fresher", "Data & Analytics", ["SQL", "Excel", "Power BI"], 0, "Turn business data into clear reports and actionable insights.", true),
  makeJob("j03", "Backend Developer", "CloudNova", "Bengaluru, Karnataka", 7, 12, "Full-time", "Mid-level", "Development", ["Node.js", "PostgreSQL", "REST APIs"], 2, "Design and maintain dependable APIs and backend services."),
  makeJob("j04", "UI/UX Designer", "Northstar Studio", "Delhi, India", 4, 7, "Full-time", "Entry-level", "Design", ["Figma", "Wireframing", "Prototyping"], 3, "Shape useful digital experiences through research, prototyping, and iteration."),
  makeJob("j05", "Business Analyst Intern", "BrightPath", "Noida, Uttar Pradesh", 2.4, 4, "Internship", "Fresher", "Business", ["Excel", "SQL", "Documentation"], 1, "Support requirement gathering and help teams make data-informed decisions."),
  makeJob("j06", "Python Developer", "DataSpring", "Pune, Maharashtra", 5, 9, "Full-time", "Entry-level", "Development", ["Python", "FastAPI", "SQL"], 4, "Develop clean Python services and automate repetitive workflows."),
  makeJob("j07", "Digital Marketing Associate", "MarketMint", "Remote", 3, 5, "Full-time", "Entry-level", "Marketing", ["SEO", "Analytics", "Content"], 2, "Help plan campaigns and measure their performance across channels."),
  makeJob("j08", "Machine Learning Intern", "NeuralWorks", "Hyderabad, Telangana", 2.5, 4, "Internship", "Fresher", "Data & Analytics", ["Python", "Pandas", "Scikit-learn"], 5, "Prepare datasets, run experiments, and document model evaluation."),
  makeJob("j09", "Product Designer", "Orbit Labs", "Mumbai, Maharashtra", 8, 14, "Full-time", "Mid-level", "Design", ["Figma", "Design Systems", "Research"], 2, "Own product design flows from discovery through developer handoff."),
  makeJob("j10", "QA Engineer", "QualityNest", "Chennai, Tamil Nadu", 4, 7, "Full-time", "Entry-level", "Development", ["Testing", "Postman", "JavaScript"], 6, "Create test plans and help ship stable, user-friendly software."),
  makeJob("j11", "Power BI Developer", "MetricHive", "Gurugram, Haryana", 5, 9, "Full-time", "Mid-level", "Data & Analytics", ["Power BI", "DAX", "SQL"], 1, "Build clear dashboards and reusable reporting models.", true),
  makeJob("j12", "Content Writer", "WordBloom", "Remote", 2.5, 4.5, "Part-time", "Fresher", "Marketing", ["Writing", "Research", "SEO"], 7, "Create helpful content for readers across web and social channels."),
  makeJob("j13", "Full Stack Developer", "StackBridge", "Noida, Uttar Pradesh", 6, 11, "Full-time", "Mid-level", "Development", ["React", "Node.js", "MongoDB"], 2, "Build features across the frontend and backend of a growing web product."),
  makeJob("j14", "Operations Analyst", "SwiftCart", "Delhi, India", 3.5, 6, "Full-time", "Entry-level", "Business", ["Excel", "SQL", "Reporting"], 4, "Analyze operational metrics and identify opportunities to improve workflows."),
  makeJob("j15", "Cloud Support Associate", "SkyLayer", "Hyderabad, Telangana", 4, 7, "Full-time", "Entry-level", "Development", ["AWS", "Linux", "Networking"], 3, "Help troubleshoot cloud infrastructure issues and support customers."),
  makeJob("j16", "Graphic Design Intern", "ColorTheory", "Jaipur, Rajasthan", 1.8, 3, "Internship", "Fresher", "Design", ["Figma", "Illustrator", "Typography"], 8, "Create visual assets for digital campaigns and product communication."),
  makeJob("j17", "Data Engineer", "Lakehouse Co.", "Bengaluru, Karnataka", 12, 20, "Full-time", "Senior", "Data & Analytics", ["Python", "Spark", "SQL"], 5, "Build scalable data pipelines and maintain trusted analytics datasets."),
  makeJob("j18", "HR Coordinator", "PeopleFirst", "Lucknow, Uttar Pradesh", 3, 5, "Full-time", "Entry-level", "Business", ["Communication", "Excel", "Recruitment"], 6, "Coordinate interviews and support a smooth candidate experience."),
  makeJob("j19", "React Developer Intern", "WebNest", "Remote", 1.5, 2.8, "Internship", "Fresher", "Development", ["React", "JavaScript", "Git"], 1, "Learn by building interface components with guidance from developers."),
  makeJob("j20", "SEO Specialist", "RankRise", "Gurugram, Haryana", 4, 7, "Full-time", "Mid-level", "Marketing", ["SEO", "Google Analytics", "Research"], 9, "Improve organic visibility through technical and content optimization."),
  makeJob("j21", "Financial Data Analyst", "LedgerLine", "Mumbai, Maharashtra", 5, 8, "Full-time", "Entry-level", "Data & Analytics", ["Excel", "SQL", "Power BI"], 3, "Analyze financial data and present trends in concise business reports."),
  makeJob("j22", "Mobile App Developer", "PocketLabs", "Pune, Maharashtra", 6, 10, "Contract", "Mid-level", "Development", ["React Native", "TypeScript", "REST APIs"], 10, "Deliver polished mobile app features for Android and iOS."),
  makeJob("j23", "Customer Success Associate", "HelpHarbor", "Remote", 3, 4.8, "Full-time", "Fresher", "Business", ["Communication", "CRM", "Problem-solving"], 2, "Help customers get value from the product and share feedback internally."),
  makeJob("j24", "Senior Product Manager", "Summit Digital", "Bengaluru, Karnataka", 22, 32, "Full-time", "Senior", "Business", ["Strategy", "Analytics", "Roadmapping"], 4, "Lead product direction and align cross-functional teams on outcomes.")
];