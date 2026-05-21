import { instance } from "../../lib/axiosClient";
import type { ProductResponse } from "./type";

export const fetchProducts = async () => {
  // const res = await fetch("https://dummyjson.com/products");
  // const data = await res.json();

  const {data} = await instance.get("/products")
  return data as ProductResponse;
};
