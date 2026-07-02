/* ============================================================
 * ItemDetail.tsx — Item Information Screen
 *
 * Requirements from BRIEF.md:
 * - Show item details (photo, owner, category, distance, price, rating)
 * - Big BOOK NOW button
 * - Handle missing fields gracefully
 * - Disable booking if item is paused/removed
 * ============================================================ */

import { useParams, Link } from "react-router-dom";
import { ITEMS } from "../data/items";   //  Use correct export name
import { Item } from "../types/Item";    //  Ensure Item.ts exists

export default function ItemDetail() {
  // Get item ID from route
  const { id } = useParams();

  // Find the item by ID
  const item: Item | undefined = ITEMS.find((i: Item) => i.id === id);

  // If item not found, show error
  if (!item) {
    return <p className="p-4 text-red-600">Item not found.</p>;
  }

  // Check if item is paused or removed
  const isUnavailable = item.status === "paused" || item.status === "removed";

  return (
    <main className="p-4 max-w-2xl mx-auto">
      {/* Item photo (fallback to placeholder if missing) */}
      <img
        src={item.image || "/images/placeholder.png"}
        alt={item.name}
        className="w-full h-60 object-cover rounded mb-4"
      />

      {/* Item name + category */}
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <p className="text-gray-600">{item.category}</p>

      {/* Price handling */}
      <p className="mt-2 text-lg">
        {item.free ? "Free" : item.price ? `R${item.price}` : "Price not listed"}
      </p>

      {/* Rating handling */}
      <p className="text-sm text-gray-500">
        {item.rating ? `⭐ ${item.rating}` : "No rating yet"}
      </p>

      {/* Owner + distance */}
      <p className="text-sm text-gray-500">Owner: {item.owner}</p>
      <p className="text-sm text-gray-500">{item.distance} km away</p>

      {/* BOOK NOW button */}
      {isUnavailable ? (
        <button
          disabled
          className="mt-6 w-full bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
        >
          Unavailable
        </button>
      ) : (
        <Link
          to={`/booking/${item.id}`}
          className="mt-6 block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          BOOK NOW
        </Link>
      )}
    </main>
  );
}
