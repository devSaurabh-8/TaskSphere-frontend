import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
}
