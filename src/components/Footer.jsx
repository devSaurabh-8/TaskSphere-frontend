export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-gray-300 w-full">
      {/* Top Section */}
<div className="max-w-[850px] mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Company */}
        <div>
          <h4 className="text-green-400 text-base font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-[15px]">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-green-400 text-base font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-[15px]">
            <li><a href="/dashboard" className="hover:text-white transition">Dashboard</a></li>
            <li><a href="/register" className="hover:text-white transition">Get Started</a></li>
            <li><a href="/login" className="hover:text-white transition">Login</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-green-400 text-base font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1 text-[15px]">
            <li>
              <a
                href="https://www.linkedin.com/in/saurabh-pandey-974582390"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devSaurabh-8"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li><a href="#" className="hover:text-white transition">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Line */}
      <div className="border-t border-gray-700 w-full py-3 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-white font-medium">TaskSphere</span> | Made by{" "}
          <span className="text-green-400 font-semibold">Saurabh Pandey</span>
        </p>
      </div>
    </footer>
  );
}
