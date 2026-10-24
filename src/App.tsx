
import { useMemo, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JobCard from "./components/JobCard";
import JobFilters, { type FilterState } from "./components/JobFilters";
import SearchBar from "./components/SearchBar";
import { jobs } from "./data/jobs";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { formatSalary, timeAgo } from "./utils/format";

const emptyFilters: FilterState = {
  location: "",
  type: "",
  experience: "",
  salary: "",
};

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function useSavedJobs() {
  const [savedIds, setSavedIds] = useLocalStorage<string[]>(
    "jobportal-saved-jobs",
    []
  );

  const toggle = (id: string) =>
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  return { savedIds, toggle };
}

function Home({
  savedIds,
  toggle,
}: {
  savedIds: string[];
  toggle: (id: string) => void;
}) {
  const categories = [
    {
      name: "Development",
      detail: "Software & engineering",
      count: jobs.filter((j) => j.category === "Development").length,
      icon: "⌘",
    },
    {
      name: "Data & Analytics",
      detail: "Data-driven careers",
      count: jobs.filter((j) => j.category === "Data & Analytics").length,
      icon: "▥",
    },
    {
      name: "Design",
      detail: "Create meaningful products",
      count: jobs.filter((j) => j.category === "Design").length,
      icon: "✳",
    },
    {
      name: "Business",
      detail: "Operations & strategy",
      count: jobs.filter((j) => j.category === "Business").length,
      icon: "↗",
    },
  ];

  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
              <Sparkles size={14} /> Your next chapter starts here
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Find a job that{" "}
              <span className="text-blue-600">fits your future.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover opportunities, explore teams, and take the next step in
              your career — all in one place.
            </p>

            <div className="mt-8">
              <SearchBar />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Popular:{" "}
              <Link
                className="font-semibold text-blue-700 hover:underline"
                to="/jobs?q=Data%20Analyst"
              >
                Data Analyst
              </Link>{" "}
              ·{" "}
              <Link
                className="font-semibold text-blue-700 hover:underline"
                to="/jobs?q=Frontend"
              >
                Frontend Developer
              </Link>{" "}
              ·{" "}
              <Link
                className="font-semibold text-blue-700 hover:underline"
                to="/jobs?q=Intern"
              >
                Internships
              </Link>
            </p>
          </div>

          <div className="relative hidden min-h-[330px] items-center justify-center md:flex">
            <div className="absolute h-72 w-72 rounded-full bg-blue-100/80 blur-2xl" />

            <div className="relative w-full max-w-sm rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-blue-100">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <BriefcaseBusiness />
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  Hiring now
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold text-slate-500">
                A role made for you
              </p>
              <h3 className="mt-1 text-2xl font-extrabold">
                Frontend Developer
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                PixelCraft · Noida / Hybrid
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold">
                  React
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold">
                  TypeScript
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold">
                  UI
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="font-extrabold">₹4–8 LPA</span>
                <Link
                  to="/jobs/j01"
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
                >
                  View job
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg">
              <p className="text-xs text-slate-500">
                Opportunities to explore
              </p>
              <p className="mt-1 text-2xl font-black text-blue-700">
                {jobs.length}+
              </p>
              <p className="text-xs text-slate-500">Sample job listings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Explore by category
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Find your kind of work
            </h2>
          </div>
          <Link
            to="/jobs"
            className="text-sm font-bold text-blue-700 hover:underline"
          >
            Browse all jobs →
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={`/jobs?category=${encodeURIComponent(c.name)}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl font-bold text-blue-700">
                {c.icon}
              </span>
              <h3 className="mt-4 font-bold group-hover:text-blue-700">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{c.detail}</p>
              <p className="mt-4 text-xs font-bold text-blue-700">
                {c.count} sample roles <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Hand-picked roles
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Featured opportunities
              </h2>
            </div>
            <Link
              to="/jobs"
              className="text-sm font-bold text-blue-700 hover:underline"
            >
              See all jobs →
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((j) => j.featured)
              .slice(0, 3)
              .map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  saved={savedIds.includes(job.id)}
                  onToggleSave={toggle}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="rounded-3xl bg-blue-600 px-6 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Your next opportunity is waiting.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
              Explore demo roles, save the ones you like, and practice
              submitting an application.
            </p>
          </div>
          <Link
            to="/jobs"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 md:mt-0"
          >
            Start exploring <ArrowRight size={17} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

function JobsPage({
  savedIds,
  toggle,
}: {
  savedIds: string[];
  toggle: (id: string) => void;
}) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const locations = useMemo(
    () => [...new Set(jobs.map((j) => j.location))].sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    return jobs
      .filter((job) => {
        const haystack = [
          job.title,
          job.company,
          job.location,
          job.category,
          ...job.skills,
        ]
          .join(" ")
          .toLowerCase();

        return (
          (!q || haystack.includes(q)) &&
          (!category || job.category === category) &&
          (!filters.location || job.location === filters.location) &&
          (!filters.type || job.type === filters.type) &&
          (!filters.experience || job.experience === filters.experience) &&
          (!filters.salary || job.salaryMax >= Number(filters.salary))
        );
      })
      .sort((a, b) =>
        sort === "salary-high"
          ? b.salaryMax - a.salaryMax
          : sort === "salary-low"
            ? a.salaryMin - b.salaryMin
            : a.postedDaysAgo - b.postedDaysAgo
      );
  }, [query, category, filters, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const shown = filtered.slice((page - 1) * pageSize, page * pageSize);

  const setQuery = (next: string) => {
    setParams(next ? { q: next } : {});
    setPage(1);
  };

  const updateFilters = (next: FilterState) => {
    setFilters(next);
    setPage(1);
  };

  return (
    <section className="container-page py-10 md:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Explore opportunities
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
          Find your next job
        </h1>
        <p className="mt-3 leading-6 text-slate-600">
          Search sample roles and narrow the list to what matters to you.
        </p>
      </div>

      <div className="mt-7">
        <SearchBar key={query} initialQuery={query} onSearch={setQuery} compact />
      </div>

      {category && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          {category}
          <button
            aria-label="Clear category"
            onClick={() => {
              setParams({});
              setPage(1);
            }}
          >
            <XCircle size={16} />
          </button>
        </div>
      )}

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[250px_1fr]">
        <JobFilters
          filters={filters}
          onChange={updateFilters}
          locations={locations}
        />

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">{filtered.length}</strong>{" "}
              jobs found
            </p>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              Sort by
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700"
              >
                <option value="latest">Latest</option>
                <option value="salary-high">Salary: high to low</option>
                <option value="salary-low">Salary: low to high</option>
              </select>
            </label>
          </div>

          {shown.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {shown.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  saved={savedIds.includes(job.id)}
                  onToggleSave={toggle}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search size={30} className="mx-auto text-slate-400" />
              <h2 className="mt-4 text-lg font-bold">No jobs found</h2>
              <p className="mt-2 text-sm text-slate-500">
                Try another keyword or clear some filters.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  updateFilters(emptyFilters);
                }}
                className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
              >
                Reset search
              </button>
            </div>
          )}

          {filtered.length > pageSize && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                disabled={page === 1}
                onClick={() => {
                  setPage((p) => p - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft size={16} /> Previous
              </button>

              <span className="text-sm text-slate-500">
                Page {page} of {pageCount}
              </span>

              <button
                disabled={page === pageCount}
                onClick={() => {
                  setPage((p) => p + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function JobDetails({
  savedIds,
  toggle,
}: {
  savedIds: string[];
  toggle: (id: string) => void;
}) {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === id);

  if (!job) return <NotFound />;

  const saved = savedIds.includes(job.id);

  return (
    <section className="container-page py-10 md:py-14">
      <Link
        to="/jobs"
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
      >
        <ArrowLeft size={16} /> Back to jobs
      </Link>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-700">
                {job.initials}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {job.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {job.type}
                  </span>
                </div>

                <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                  {job.title}
                </h1>
                <p className="mt-2 font-semibold text-slate-500">
                  {job.company}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-y border-slate-100 py-5 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <BriefcaseBusiness size={16} /> {job.experience}
              </span>
              <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
              <span>{timeAgo(job.postedDaysAgo)}</span>
            </div>

            <h2 className="mt-7 text-lg font-extrabold">About this role</h2>
            <p className="mt-3 leading-7 text-slate-600">{job.description}</p>

            <h2 className="mt-7 text-lg font-extrabold">Responsibilities</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-600">
              {job.responsibilities.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <h2 className="mt-7 text-lg font-extrabold">Requirements</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-600">
              {job.requirements.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <h2 className="mt-7 text-lg font-extrabold">Benefits</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-600">
              {job.benefits.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <h2 className="mt-7 text-lg font-extrabold">Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <p className="text-sm text-slate-500">Estimated salary</p>
          <p className="mt-1 text-2xl font-black">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Indicative demo range, not an employer-verified offer.
          </p>

          <Link
            to={`/jobs/${job.id}/apply`}
            className="mt-5 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
          >
            Apply for this job
          </Link>

          <button
            onClick={() => toggle(job.id)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            {saved ? "Remove from saved" : "Save job"}
          </button>

          <div className="mt-5 flex gap-2 rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
            <ShieldCheck size={17} className="shrink-0" />
            Demo listing. Applications are saved only in this browser.
          </div>
        </aside>
      </div>
    </section>
  );
}

function SavedPage({
  savedIds,
  toggle,
}: {
  savedIds: string[];
  toggle: (id: string) => void;
}) {
  const savedJobs = jobs.filter((job) => savedIds.includes(job.id));

  return (
    <section className="container-page py-10 md:py-14">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
        Your shortlist
      </p>
      <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
        Saved jobs
      </h1>
      <p className="mt-3 text-slate-600">
        Keep the roles you want to revisit in one place.
      </p>

      {savedJobs.length ? (
        <>
          <p className="mt-7 text-sm text-slate-500">
            {savedJobs.length} saved{" "}
            {savedJobs.length === 1 ? "job" : "jobs"}
          </p>
          <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                saved={true}
                onToggleSave={toggle}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <BriefcaseBusiness size={34} className="mx-auto text-slate-400" />
          <h2 className="mt-4 text-xl font-bold">No saved jobs yet</h2>
          <p className="mt-2 text-sm text-slate-500">
            When a role catches your eye, tap the bookmark icon to save it here.
          </p>
          <Link
            to="/jobs"
            className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            Browse jobs
          </Link>
        </div>
      )}
    </section>
  );
}

function ApplyPage() {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === id);

  const [applications, setApplications] = useLocalStorage<
    Array<{
      jobId: string;
      email: string;
      name: string;
      appliedAt: string;
    }>
  >("jobportal-applications", []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  if (!job) return <NotFound />;

  const change = (field: keyof typeof form, value: string) => {
    setForm((old) => ({ ...old, [field]: value }));
    setErrors((old) => ({ ...old, [field]: "" }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();

    // Guard against an unavailable job.
    if (!job) return;

    const next: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }

    if (!/^[+\d\s()-]{10,18}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid phone number (at least 10 digits).";
    }

    if (!/^https?:\/\/\S+/i.test(form.resume.trim())) {
      next.resume =
        "Enter a valid resume URL starting with http:// or https://.";
    }

    if (form.coverLetter.trim().length < 20) {
      next.coverLetter = "Please write at least 20 characters.";
    }

    if (
      applications.some(
        (a) =>
          a.jobId === job.id &&
          a.email.toLowerCase() === form.email.trim().toLowerCase()
      )
    ) {
      next.email = "A demo application for this job and email already exists.";
    }

    setErrors(next);

    if (Object.keys(next).length) return;

    setApplications((old) => [
      ...old,
      {
        jobId: job.id,
        email: form.email.trim().toLowerCase(),
        name: form.name.trim(),
        appliedAt: new Date().toISOString(),
      },
    ]);

    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (success) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-soft">
          <CheckCircle2 size={52} className="mx-auto text-emerald-600" />
          <h1 className="mt-4 text-2xl font-black">
            Demo application submitted!
          </h1>
          <p className="mt-3 leading-6 text-slate-600">
            Your application record for <strong>{job.title}</strong> was saved
            in this browser. It has not been sent to a real employer.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/jobs"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              Browse more jobs
            </Link>
            <Link
              to="/saved"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold hover:bg-slate-50"
            >
              Saved jobs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = (field: string) =>
    `mt-1.5 w-full rounded-xl border ${
      errors[field] ? "border-red-400" : "border-slate-200"
    } bg-white px-3.5 py-3 text-sm outline-none focus:border-blue-400`;

  return (
    <section className="container-page py-10 md:py-14">
      <Link
        to={`/jobs/${job.id}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
      >
        <ArrowLeft size={16} /> Back to job details
      </Link>

      <div className="mx-auto mt-6 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Application form
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">
          Apply for {job.title}
        </h1>
        <p className="mt-3 text-slate-600">
          {job.company} · {job.location}
        </p>

        <div className="mt-6 flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          <ShieldCheck className="mt-0.5 shrink-0" size={19} />
          <p>
            This is a demo form. Use test details; your information stays in
            this browser and is not sent to a company.
          </p>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-bold">
              Full name *
            </label>
            <input
              id="name"
              autoComplete="name"
              className={inputClass("name")}
              value={form.name}
              onChange={(e) => change("name", e.target.value)}
              placeholder="e.g. Raghav Pratap"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-bold">
                Email address *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputClass("email")}
                value={form.email}
                onChange={(e) => change("email", e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-bold">
                Phone number *
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className={inputClass("phone")}
                value={form.phone}
                onChange={(e) => change("phone", e.target.value)}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="resume" className="text-sm font-bold">
              Resume URL *
            </label>
            <input
              id="resume"
              type="url"
              className={inputClass("resume")}
              value={form.resume}
              onChange={(e) => change("resume", e.target.value)}
              placeholder="https://drive.google.com/..."
            />
            {errors.resume && (
              <p className="mt-1 text-xs text-red-600">{errors.resume}</p>
            )}
            <p className="mt-1 text-xs text-slate-500">
              Use a demo URL or a shareable link. File upload is not included
              in this frontend demo.
            </p>
          </div>

          <div>
            <label htmlFor="coverLetter" className="text-sm font-bold">
              Cover letter *
            </label>
            <textarea
              id="coverLetter"
              rows={5}
              className={inputClass("coverLetter")}
              value={form.coverLetter}
              onChange={(e) => change("coverLetter", e.target.value)}
              placeholder="Tell the team why you're interested in this role..."
            />
            {errors.coverLetter && (
              <p className="mt-1 text-xs text-red-600">
                {errors.coverLetter}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Submit demo application
          </button>
        </form>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
        <Search size={30} />
      </div>
      <h1 className="mt-5 text-3xl font-black">Page not found</h1>
      <p className="mt-3 text-slate-600">
        We couldn't find that page or job listing.
      </p>
      <Link
        to="/jobs"
        className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
      >
        Browse jobs
      </Link>
    </section>
  );
}

export default function App() {
  const { savedIds, toggle } = useSavedJobs();

  return (
    <AppShell>
      <Routes>
        <Route
          path="/"
          element={<Home savedIds={savedIds} toggle={toggle} />}
        />
        <Route
          path="/jobs"
          element={<JobsPage savedIds={savedIds} toggle={toggle} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobDetails savedIds={savedIds} toggle={toggle} />}
        />
        <Route path="/jobs/:id/apply" element={<ApplyPage />} />
        <Route
          path="/saved"
          element={<SavedPage savedIds={savedIds} toggle={toggle} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}
