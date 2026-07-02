/* ============================================================
 * Home.tsx — Browse Screen
 *
 * Requirements from BRIEF.md:
 * - Show items near the user
 * - Support search + filters (distance, category, free/paid)
 * - Handle missing fields (no photo, no price, no rating,
 *   paused/removed items)
 * - Make the screen feel "alive" even with few items
 * ============================================================ */

import { useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../data/items";   // ✅ Correct import name
import { Item } from "../types/Item";

export default function Home() {
  // Local state for search and filters
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterFree, setFilterFree] = useState<boolean | null>(null);

  // Apply search + filters to items
  const filteredItems = ITEMS.filter((item: Item) => {
    // Skip items that are paused or removed
    if (item.status === "paused" || item.status === "removed") return false;

    // Search by name
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    // Filter by category
    if (filterCategory && item.category !== filterCategory) {
      return false;
    }

    // Filter by free/paid
    if (filterFree !== null && item.free !== filterFree) {
      return false;
    }

    return true;
  });

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Items Near You</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          onChange={(e) => setFilterCategory(e.target.value || null)}
          className="border p-2"
        >
          <option value="">All Categories</option>
          <option value="Tools">Tools</option>
          <option value="Garden">Garden</option>
          <option value="DIY">DIY</option>
          <option value="Camping">Camping</option>
          <option value="Electronics">Electronics</option>
          <option value="Transport">Transport</option>
        </select>

        <select
          onChange={(e) =>
            setFilterFree(e.target.value === "" ? null : e.target.value === "true")
          }
          className="border p-2"
        >
          <option value="">All</option>
          <option value="true">Free</option>
          <option value="false">Paid</option>
        </select>
      </div>

      {/* Item list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="border rounded p-4 bg-white shadow">
            {/* Handle missing photo */}
            <img
              src={item.image || "/images/placeholder.png"}
              alt={item.name}
              className="w-full h-40 object-cover mb-2"
            />

            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.category}</p>

            {/* Handle missing price */}
            <p className="mt-2">
              {item.free ? "Free" : item.price ? `R${item.price}` : "Price not listed"}
            </p>

            {/* Handle missing rating */}
            <p className="text-sm text-gray-500">
              {item.rating ? `⭐ ${item.rating}` : "No rating yet"}
            </p>

            <p className="text-sm text-gray-500">Owner: {item.owner}</p>
            <p className="text-sm text-gray-500">{item.distance} km away</p>

            {/* BOOK NOW button links to booking flow */}
            <Link
              to={`/item/${item.id}`}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Empty state if no items match */}
      {filteredItems.length === 0 && (
        <p className="text-gray-500 mt-6">No items found. Try adjusting filters.</p>
      )}
    </main>
  );
}
