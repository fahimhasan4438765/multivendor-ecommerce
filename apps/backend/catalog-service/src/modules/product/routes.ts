import {
  getProductHandler,
  getByVendorHandler,
  createProductHandler,
} from "./controller";

export const productRoutes = [
  { method: "GET", path: "/products", handler: getProductHandler },
  { method: "GET", path: "/products/vendor", handler: getByVendorHandler },
  { method: "POST", path: "/products", handler: createProductHandler },
];
