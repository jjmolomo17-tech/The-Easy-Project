/* ============================================================
 * Navbar.tsx — Global Navigation Bar
 * ============================================================ */

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo / Project Name */}
      <Link to="/home" className="text-xl font-bold text-blue-600">
        PddleThabo
      </Link>

      {/* Navigation links */}
      <div className="flex gap-4">
        <Link to="/home" className="text-gray-700 hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
          Logout
        </Link>
      </div>
    </nav>
  );
}
