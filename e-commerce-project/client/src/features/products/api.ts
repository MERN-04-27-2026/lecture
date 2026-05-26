import { instance } from "../../lib/axiosClient";
import type { Product, ProductResponse } from "./type";

export const fetchProducts = async () => {
  // const res = await fetch("https://dummyjson.com/products");
  // const data = await res.json();

  const { data } = await instance.get("/products");
  return data as ProductResponse;
};

export const fetchProductById = async (id: string) => {
  // const res = await fetch("https://dummyjson.com/products");
  // const data = await res.json();

  const { data } = await instance.get(`/products/${id}`);
  return data as Product;
};
