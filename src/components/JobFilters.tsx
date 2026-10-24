import { SlidersHorizontal, X } from "lucide-react";

export interface FilterState {
  location: string;
  type: string;
  experience: string;
  salary: string;
}
interface Props { filters: FilterState; onChange: (filters: FilterState) => void; locations: string[]; }
const selectClass = "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-400";
export default function JobFilters({ filters, onChange, locations }: Props) {
  const update = (key: keyof FilterState, value: string) => onChange({ ...filters, [key]: value });
  const clear = () => onChange({ location: "", type: "", experience: "", salary: "" });
  const active = Object.values(filters).some(Boolean);
  return <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between"><h2 className="flex items-center gap-2 font-bold text-slate-900"><SlidersHorizontal size={17} /> Filters</h2>
      {active && <button onClick={clear} className="flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900"><X size={14} /> Clear</button>}
    </div>
    <label className="mt-5 block text-sm font-semibold text-slate-700">Location
      <select className={selectClass} value={filters.location} onChange={e => update("location", e.target.value)}>
        <option value="">All locations</option>{locations.map(location => <option key={location}>{location}</option>)}
      </select>
    </label>
    <label className="mt-4 block text-sm font-semibold text-slate-700">Job type
      <select className={selectClass} value={filters.type} onChange={e => update("type", e.target.value)}>
        <option value="">All job types</option>{["Full-time", "Part-time", "Contract", "Internship"].map(type => <option key={type}>{type}</option>)}
      </select>
    </label>
    <label className="mt-4 block text-sm font-semibold text-slate-700">Experience
      <select className={selectClass} value={filters.experience} onChange={e => update("experience", e.target.value)}>
        <option value="">Any experience</option>{["Fresher", "Entry-level", "Mid-level", "Senior"].map(level => <option key={level}>{level}</option>)}
      </select>
    </label>
    <label className="mt-4 block text-sm font-semibold text-slate-700">Minimum salary (LPA)
      <select className={selectClass} value={filters.salary} onChange={e => update("salary", e.target.value)}>
        <option value="">Any salary</option><option value="3">₹3 LPA+</option><option value="5">₹5 LPA+</option><option value="8">₹8 LPA+</option><option value="12">₹12 LPA+</option>
      </select>
    </label>
    <p className="mt-5 rounded-xl bg-blue-50 p-3 text-xs leading-relaxed text-blue-800">Tip: combine filters to narrow your search. Results update automatically.</p>
  </aside>;
}