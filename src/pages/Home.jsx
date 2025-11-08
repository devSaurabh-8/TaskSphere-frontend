import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-[#eef4ff]">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Welcome to <span className="text-blue-600">TaskSphere</span>, Saurabh Pandey 👋
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Manage your daily tasks and career goals in one organized dashboard.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/register"
              className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/dashboard"
              className="px-5 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Features</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Create Tasks", d: "Add new tasks instantly with simple forms." },
            { t: "Update Tasks", d: "Edit details and keep tasks up to date." },
            { t: "Delete Tasks", d: "Remove tasks you no longer need." },
            { t: "View & Filter", d: "Search and filter tasks with ease." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl bg-white shadow p-6">
              <div className="text-blue-600 font-bold">{c.t}</div>
              <p className="mt-2 text-slate-600 text-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl bg-[#f6fbff] p-8 shadow">
            <h3 className="text-xl font-bold text-slate-900">About TaskSphere</h3>
            <p className="mt-3 text-slate-600">
              TaskSphere is a scalable web app that combines authentication, a protected dashboard, and CRUD operations,
              built with React and a lightweight Node/Express backend secured by JWT.
            </p>
            <div className="mt-6">
              <Link
                to="/register"
                className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Create Account
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow">
            <h4 className="text-lg font-semibold">What you can do</h4>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-green-500">•</span> Register, Login, Logout
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">•</span> View user profile in dashboard
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">•</span> CRUD on tasks with JWT-protected APIs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">•</span> Search and filter tasks
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
