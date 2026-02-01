import {
  getCartHandler,
  addItemHandler,
  clearHandler,
} from "./controller";

export const cartRoutes = [
  { method: "GET", path: "/cart", handler: getCartHandler },
  { method: "POST", path: "/cart/items", handler: addItemHandler },
  { method: "DELETE", path: "/cart", handler: clearHandler },
];
