/* ============================================================
 * Item.ts — TypeScript interface for marketplace items
 * ============================================================ */

export interface Owner {
  id: string;
  displayName: string;
  rating: number | null;     // null if no rating yet
  ratingCount: number;
  joinedISO: string;         // ISO date string
}

export interface Price {
  amountCents: number;       // 0 means free
  period: string;            // e.g. "day", "hour"
}

export interface Item {
  id: string;
  title: string;
  category: string;
  description: string;
  photoUrls: string[];       // can be empty
  price: Price | null;       // null if free
  owner: Owner;
  distanceKm: number | null; // null if location not shared
  status: "available" | "paused" | "removed";
  postedISO: string;         // ISO date string
}
