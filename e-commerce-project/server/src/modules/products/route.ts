import { Router } from "express";
import products from "../../db/seed/products.json";

const router = Router();

router.get("/", (req, res) => {
  res.json(products);
});

export default router;
