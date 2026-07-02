/* ============================================================
 * Item.ts — TypeScript interface for marketplace items
 * ============================================================ */

export interface Item {
  id: string;                          // Unique identifier
  name: string;                        // Item name
  category: string;                    // Category (Tools, Garden, etc.)
  distance: number;                    // Distance in km
  free: boolean;                       // Whether item is free
  price?: number;                      // Optional price
  image?: string;                      // Optional photo URL
  owner: string;                       // Owner name
  rating?: number;                     // Optional rating
  status?: "active" | "paused" | "removed"; // Item availability
}
