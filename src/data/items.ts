/* ============================================================
 * items.ts — Mock data for marketplace items
 * ============================================================ */

import type { Item } from "../types/Item";

export const ITEMS: Item[] = [
  {
    id: "itm_001",
    title: "Cordless Drill (18V)",
    category: "power-tools",
    description: "Solid drill, two batteries, works for most home jobs.",
    photoUrls: ["https://picsum.photos/seed/drill/600/400"],
    price: { amountCents: 5000, period: "day" },
    owner: { id: "usr_a", displayName: "Naledi", rating: 4.8, ratingCount: 24, joinedISO: "2025-02-11" },
    distanceKm: 1.2,
    status: "available",
    postedISO: "2026-06-20",
  },
  {
    id: "itm_002",
    title: "Extension Ladder (3m)",
    category: "outdoor",
    description: "Aluminium, light, fits in a hatchback.",
    photoUrls: [],
    price: { amountCents: 0, period: "day" },
    owner: { id: "usr_b", displayName: "Sipho", rating: null, ratingCount: 0, joinedISO: "2026-06-18" },
    distanceKm: null,
    status: "available",
    postedISO: "2026-06-25",
  },
  // … add more items as needed
];

/**
 * Fake async loader to simulate API.
 */
export function fetchItems(): Promise<Item[]> {
  return new Promise((resolve) => setTimeout(() => resolve(ITEMS), 400));
}
