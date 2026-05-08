import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://puraskaram-backend-958822505475.asia-southeast1.run.app";

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not set. Add it to your environment before building the admin app.");
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("admin_access_token");
        if (token) headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: [
    "DashboardAmount", "DashboardSalesReport", "DashboardMostSellingCategory", "DashboardRecentOrders",
    "AllProducts", "StockOutProducts", "AllCategory", "AllBrands", "getCategory", "AllOrders",
    "getBrand", "ReviewProducts", "AllCoupons", "Coupon", "AllStaff", "Stuff", "SingleProduct",
  ],
});
