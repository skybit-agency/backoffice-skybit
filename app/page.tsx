
export default function Home() {
  return (
    <main className="min-h-svh bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:py-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Skybit Backoffice
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Admin operations for Skybit, centralized and real-time.
          </h1>
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            Manage clients, services, team profiles, and contact submissions from a secure
            dashboard. This backoffice powers the public platform with curated data, verified
            assets, and controlled publishing workflows.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Clients & Partnerships</h2>
            <p className="mt-2 text-sm text-slate-600">
              Track client portfolios, contact details, and active project counts with clean
              records that sync to the public platform.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Services Catalog</h2>
            <p className="mt-2 text-sm text-slate-600">
              Maintain service offerings, imagery, and descriptions to keep marketing and
              delivery teams aligned.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Team Profiles</h2>
            <p className="mt-2 text-sm text-slate-600">
              Publish verified team bios, roles, and contact points to build credibility on the
              main site.
            </p>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Operational Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Real-time database sync across all admin modules.</li>
              <li>Secure access with session-based authentication.</li>
              <li>Integrated image uploads and asset management.</li>
              <li>Structured forms for consistent content entry.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Data Available to Platform</h2>
            <p className="mt-2 text-sm text-slate-600">
              Public API endpoints expose services, clients, and team data for the main platform
              with edge-safe JSON responses and CORS support.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Visit <span className="font-semibold text-slate-700">/api/public</span> routes to
              integrate with the marketing site or other frontends.
            </p>
          </div>
        </section>

        <footer className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          <p>
            This backoffice is designed for internal use by the Skybit team. For platform
            access, contact the system administrator to provision credentials and permissions.
          </p>
        </footer>
      </div>
    </main>
  );
}
