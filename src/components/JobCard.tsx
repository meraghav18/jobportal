import { Bookmark, MapPin, Clock3, BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Job } from "../types/job";
import { formatSalary, timeAgo } from "../utils/format";

interface Props { job: Job; saved: boolean; onToggleSave: (id: string) => void; }
export default function JobCard({ job, saved, onToggleSave }: Props) {
  return <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
    <div className="flex items-start justify-between gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">{job.initials}</div>
      <button onClick={() => onToggleSave(job.id)} aria-label={saved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`} aria-pressed={saved} className={`rounded-lg p-2 transition ${saved ? "bg-blue-50 text-blue-700" : "text-slate-400 hover:bg-slate-100 hover:text-blue-700"}`}>
        <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
      </button>
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {job.featured && <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">Featured</span>}
      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{job.type}</span>
    </div>
    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900"><Link to={`/jobs/${job.id}`} className="hover:text-blue-700">{job.title}</Link></h3>
    <p className="mt-1 text-sm font-medium text-slate-500">{job.company}</p>
    <div className="mt-4 grid gap-2 text-sm text-slate-500">
      <span className="flex items-center gap-2"><MapPin size={15} />{job.location}</span>
      <span className="flex items-center gap-2"><BriefcaseBusiness size={15} />{job.experience}</span>
      <span className="flex items-center gap-2"><Clock3 size={15} />{timeAgo(job.postedDaysAgo)}</span>
    </div>
    <div className="mt-4 flex flex-wrap gap-1.5">{job.skills.slice(0, 3).map(skill => <span key={skill} className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600">{skill}</span>)}</div>
    <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-5">
      <p className="font-extrabold text-slate-900">{formatSalary(job.salaryMin, job.salaryMax)}</p>
      <Link to={`/jobs/${job.id}`} aria-label={`View ${job.title} details`} className="inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-900">Details <ArrowUpRight size={16} /></Link>
    </div>
  </article>;
}