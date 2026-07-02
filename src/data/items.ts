
}
   

import { Item } from "../types/Item";

export const ITEMS: Item[] = [
  { id: "1", name: "Cordless Drill", category: "Tools", distance: 2, free: false, price: 50, image: "/images/drill.jpg", owner: "Sam", rating: 4.5, status: "active" },
  { id: "2", name: "Lawn Mower", category: "Garden", distance: 5, free: true, owner: "Alex", status: "active" },
  { id: "3", name: "Hammer", category: "Tools", distance: 1, free: true, owner: "Lee", rating: 5, status: "active" },
  { id: "4", name: "Paint Sprayer", category: "DIY", distance: 3, free: false, price: 100, owner: "Nina", status: "paused" },
  { id: "5", name: "Tent", category: "Camping", distance: 7, free: false, price: 200, owner: "Chris", rating: 4, status: "active" },
  { id: "6", name: "Projector", category: "Electronics", distance: 4, free: false, price: 150, owner: "Pat", status: "removed" },
  { id: "7", name: "Bike", category: "Transport", distance: 6, free: true, owner: "Jordan", rating: 3.5, status: "active" },
  { id: "8", name: "Chainsaw", category: "Garden", distance: 8, free: false, price: 80, owner: "Taylor", status: "active" },
];
