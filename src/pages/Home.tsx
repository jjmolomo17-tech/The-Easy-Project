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
import { ITEMS } from "../data/items";   // ✅ Import mock data
import { Item } from "../types/Item";    // ✅ Import correct type

export default function Home() {
  // Local state for search and filters
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterFree, setFilterFree] = useState<boolean | null>(null);

  // Apply search + filters to items
  const filteredItems = ITEMS.filter((item: Item) => {
    // Skip items that are paused or removed
    if (item.status === "paused" || item.status === "removed") return false;

    // Search by title (not "name")
    if (search && !item.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    // Filter by category
    if (filterCategory && item.category !== filterCategory) {
      return false;
    }

    // Filter by free/paid (based on price.amountCents or null)
    if (filterFree !== null) {
      const isFree = !item.price || item.price.amountCents === 0;
      if (isFree !== filterFree) return false;
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
        {/* Category filter */}
        <select
          onChange={(e) => setFilterCategory(e.target.value || null)}
          className="border p-2"
        >
          <option value="">All Categories</option>
          <option value="power-tools">Power Tools</option>
          <option value="outdoor">Outdoor</option>
          <option value="kitchen">Kitchen</option>
          <option value="party">Party</option>
          <option value="garden">Garden</option>
          <option value="hand-tools">Hand Tools</option>
        </select>

        {/* Free/Paid filter */}
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
        {filteredItems.map((item) => {
          // ✅ Derive free/paid from price
          const isFree = !item.price || item.price.amountCents === 0;

          // ✅ Use first photo or placeholder
          const photo = item.photoUrls.length > 0 ? item.photoUrls[0] : "/images/placeholder.png";

          return (
            <div key={item.id} className="border rounded p-4 bg-white shadow">
              {/* Handle missing photo */}
              <img
                src={photo}
                alt={item.title}
                className="w-full h-40 object-cover mb-2"
              />

              {/* Title + category */}
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.category}</p>

              {/* Handle missing price */}
              <p className="mt-2">
                {isFree
                  ? "Free"
                  : `R${(item.price!.amountCents / 100).toFixed(2)} per ${item.price!.period}`}
              </p>

              {/* Handle missing rating */}
              <p className="text-sm text-gray-500">
                {item.owner.rating !== null
                  ? `⭐ ${item.owner.rating} (${item.owner.ratingCount})`
                  : "No rating yet"}
              </p>

              {/* Owner + distance */}
              <p className="text-sm text-gray-500">Owner: {item.owner.displayName}</p>
              <p className="text-sm text-gray-500">
                {item.distanceKm !== null ? `${item.distanceKm} km away` : "Distance unknown"}
              </p>

              {/* BOOK NOW button links to booking flow */}
              <Link
                to={`/item/${item.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>

      {/* Empty state if no items match */}
      {filteredItems.length === 0 && (
        <p className="text-gray-500 mt-6">No items found. Try adjusting filters.</p>
      )}
    </main>
  );
}
