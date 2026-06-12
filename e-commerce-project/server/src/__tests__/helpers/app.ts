import express from "express";
import cors from "cors";
import productRoutes from "../../modules/products/product.routes";
import cartRoutes from "../../modules/carts/cart.routes";
import authRoutes from "../../modules/auth/auth.routes";
import userRoutes from "../../modules/users/user.routes";
import { errorMiddleware } from "../../core/errors";

export function createTestApp() {
  const app = express();

  app.use(
    cors({
      origin: "*",
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/products", productRoutes);
  app.use("/carts", cartRoutes);
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);

  app.get("/", (_req, res) => {
    res.json({ message: "Test API" });
  });

  app.use(errorMiddleware);

  return app;
}
