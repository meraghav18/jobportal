# JobPortal

A responsive demo job-search application built with React, TypeScript, Vite, Tailwind CSS, React Router, and LocalStorage.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm
- VS Code (recommended)

## Run locally
1. Extract the ZIP file.
2. Open the `JobPortal` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Features
- Home page with search and job categories
- Search by job title, company, and skills
- Location, job type, experience, and salary filters
- Salary/date sorting and pagination
- Job details pages
- Saved jobs stored in LocalStorage
- Application form with validation and demo submissions saved locally
- Responsive layout, empty states, and not-found route
- 24 sample job listings

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Sign in at https://vercel.com and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy. `vercel.json` rewrites app routes to the SPA entry point.

## Important demo limitations
This is a frontend portfolio demo. Job listings are sample data. Saved jobs and application records remain in the current browser's LocalStorage; they are not sent to an employer or shared across devices. There is no authentication or backend database.

## Reset demo data
Clear the browser's LocalStorage for the site using browser developer tools, then refresh.
