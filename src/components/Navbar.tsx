import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition hover:text-blue-700 ${isActive ? "text-blue-700" : "text-slate-600"}`;
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><BriefcaseBusiness size={20} /></span>
          Job<span className="text-blue-600">Portal</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/jobs" className={navClass}>Find Jobs</NavLink>
          <NavLink to="/saved" className={navClass}>Saved Jobs</NavLink>
        </nav>
        <Link to="/jobs" className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex">Explore Jobs</Link>
        <button className="rounded-lg p-2 text-slate-700 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="grid gap-1 border-t border-slate-100 bg-white px-5 py-3 md:hidden" aria-label="Mobile navigation">
        <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-medium hover:bg-slate-50" to="/">Home</Link>
        <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-medium hover:bg-slate-50" to="/jobs">Find Jobs</Link>
        <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-medium hover:bg-slate-50" to="/saved">Saved Jobs</Link>
      </nav>}
    </header>
  );
}