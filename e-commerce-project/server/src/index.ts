import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import productsRouter from "./modules/products/route";
import todosRouter from "./modules/todos/route";
import { errorHandler } from "./modules/core/error/middleware";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// cors middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
// this middleware makes sure you can get the body of req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const someMiddleware = (req: Request, res: Response, next: any) => {
  console.log("Time:", Date.now());
  next();
};

app.get("/test", (_req, res) => {
  res.send("test");
});

// this middleware function will call before everything afterward
// app.use(someMiddleware);

app.get("/", (req, res) => {
  console.log(req.query);

  res.json({ message: "Lecture E-Commerce API is running", port: PORT });
});

app.use("/todos", todosRouter);
app.use("/products", productsRouter);

// Fallback Middleware for 404 (Not Found)
// The Express documentation reminds us that 404 is NOT an error, but the absence of a route handler.
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    statusCode: 404,
    message: `Cannot find ${req.originalUrl} on this server`,
  });
});

// !!! CRITICAL: Global Error Handler must be the LAST middleware in the app stack !!!
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
