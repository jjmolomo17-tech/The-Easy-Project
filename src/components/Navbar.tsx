/* ============================================================
 * Navbar.tsx — Global Navigation Bar
 *
 * Requirements from BRIEF.md:
 * - Premium look and feel (better than Airbnb vibe)
 * - Consistent navigation across screens
 * - Responsive and accessible
 * ============================================================ */

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo / Project Name */}
      <Link to="/home" className="text-xl font-bold text-blue-600">
        The-Easy Project
      </Link>

      {/* Navigation links */}
      <div className="flex gap-4">
        {/* Home link */}
        <Link
          to="/home"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>

        {/* Example: Wishlist (future feature, can be deferred) */}
        <Link
          to="/wishlist"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Wishlist
        </Link>

        {/* Example: Profile (future feature, can be deferred) */}
        <Link
          to="/profile"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Profile
        </Link>

        {/* Logout (redirects to Auth) */}
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}
