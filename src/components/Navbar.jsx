import { Link, useLocation, useNavigate } from "react-router-dom";
import { getToken, clearToken } from "../lib/api";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const loc = useLocation();
  const nav = useNavigate();
  const isAuthed = !!getToken();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    clearToken();
    nav("/");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold select-none flex items-center gap-1"
        >
          <span className="text-green-500">Task</span>
          <span className="text-blue-600">Sphere</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-slate-800 font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 transition ${
                loc.pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`hover:text-blue-600 transition ${
                loc.pathname.startsWith("/dashboard") ? "text-blue-600" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href="mailto:dev.saurabhpandey@gmail.com"
              className="hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/*  Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!isAuthed ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1.5 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/*  Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-slate-700 focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/*  Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-4 text-slate-800 font-medium">
            <li>
              <Link
                to="/"
                className={`hover:text-blue-600 transition ${
                  loc.pathname === "/" ? "text-blue-600" : ""
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`hover:text-blue-600 transition ${
                  loc.pathname.startsWith("/dashboard") ? "text-blue-600" : ""
                }`}
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
            {!isAuthed ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="px-4 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
