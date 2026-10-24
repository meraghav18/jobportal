import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return <footer className="mt-20 border-t border-slate-200 bg-white">
    <div className="container-page flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
      <Link to="/" className="flex items-center gap-2 font-extrabold text-slate-800"><BriefcaseBusiness size={19} className="text-blue-600" /> JobPortal</Link>
      <p className="text-sm text-slate-500">Demo project · Sample job listings · Built for learning and portfolios.</p>
      <Link to="/jobs" className="text-sm font-semibold text-blue-700 hover:text-blue-900">Explore opportunities →</Link>
    </div>
  </footer>;
}