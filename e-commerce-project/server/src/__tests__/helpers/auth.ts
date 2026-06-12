import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "test_secret_key";

export function generateTestToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
}

export function generateTestRefreshToken(userId: number): string {
  const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "test_refresh_secret";
  return jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: "7d" });
}
