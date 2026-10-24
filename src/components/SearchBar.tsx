import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props { initialQuery?: string; onSearch?: (query: string) => void; compact?: boolean; }
export default function SearchBar({ initialQuery = "", onSearch, compact = false }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
    else navigate(`/jobs?q=${encodeURIComponent(query.trim())}`);
  }
  return <form onSubmit={submit} className={`flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft sm:flex-row ${compact ? "max-w-none" : "max-w-3xl"}`}>
    <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
      <Search size={20} className="shrink-0 text-blue-600" />
      <span className="sr-only">Search jobs</span>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Job title, company, or skill..." className="min-w-0 flex-1 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400" />
    </label>
    <button type="submit" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Search jobs</button>
  </form>;
}