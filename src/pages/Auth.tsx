/* ============================================================
 * Auth.tsx — Authentication Screen
 *
 * Requirements from BRIEF.md:
 * - Users must sign up/login BEFORE they can see anything
 * - Capture emails (growth hack)
 * - Block access until authentication is complete
 * ============================================================ */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  // Track whether user is signing up or logging in
  const [mode, setMode] = useState<"login" | "signup">("signup");

  // Track form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Track authentication state
  const [authenticated, setAuthenticated] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For now, mock authentication (no backend)
    if (email && password) {
      setAuthenticated(true);

      // Redirect to home after login/signup
      navigate("/home");
    }
  };

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {mode === "signup" ? "Sign Up" : "Login"}
      </h1>

      {/* Auth form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {mode === "signup" ? "Create Account" : "Login"}
        </button>
      </form>

      {/* Toggle between login and signup */}
      <p className="mt-4 text-sm text-gray-600">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-blue-600 underline"
            >
              Login
            </button>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-blue-600 underline"
            >
              Sign Up
            </button>
          </>
        )}
      </p>

      {/* Block access until authenticated */}
      {!authenticated && (
        <p className="mt-6 text-gray-500">
          You must {mode === "signup" ? "sign up" : "login"} to continue.
        </p>
      )}
    </main>
  );
}


/* ============================================================
 * Auth.tsx — Placeholder
 * Replace with login/signup implementation.
 * ============================================================ */

export default function Auth() {
  return (
    <main className="p-4">
      <h1>Auth Screen</h1>
      <p>This is a placeholder. Implement login/signup here.</p>
    </main>
  );
}



