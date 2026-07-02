import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens (to be implemented in /src/pages)
import Auth from "./pages/Auth";          // Login/signup before access
import Home from "./pages/Home";          // Browse items, search + filters
import ItemDetail from "./pages/ItemDetail"; // Item info + BOOK NOW
import Booking from "./pages/Booking";    // Multi-step booking flow


// Global UI components (to be implemented in /src/components)
import Navbar from "./components/Navbar"; // Navigation bar

export function App() {
  return (
    <Router>
      {/* App container with responsive background */}
      <div className="min-h-screen bg-gray-50">
        
        {/* Global navigation bar */}
        <Navbar />

        {/* Define routes for the app */}
        <Routes>
          {/* Force authentication before browsing */}
          <Route path="/" element={<Auth />} />

          {/* Home screen: list items, search + filters */}
          <Route path="/home" element={<Home />} />

          {/* Item detail: photos, owner info, BOOK NOW */}
          <Route path="/item/:id" element={<ItemDetail />} />

          {/* Booking flow: pick dates, confirm */}
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
