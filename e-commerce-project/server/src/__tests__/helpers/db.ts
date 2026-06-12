import { db } from "../../db";
import { users, products, carts, cartItems } from "../../db/schema";
import { sql } from "drizzle-orm";

export async function clearDatabase() {
  try {
    await db.delete(cartItems);
    await db.delete(carts);
    await db.delete(products);
    await db.delete(users);
  } catch (error) {
    console.warn('Warning: Could not clear database. Tables may not exist yet.');
    console.warn('Run: npm run db:push to create tables');
  }
}

export async function resetSequences() {
  try {
    await db.execute(sql`ALTER SEQUENCE users_id_seq RESTART WITH 1`);
    await db.execute(sql`ALTER SEQUENCE products_id_seq RESTART WITH 1`);
    await db.execute(sql`ALTER SEQUENCE carts_id_seq RESTART WITH 1`);
    await db.execute(sql`ALTER SEQUENCE cart_items_id_seq RESTART WITH 1`);
  } catch (error) {
    console.warn('Warning: Could not reset sequences. Tables may not exist yet.');
  }
}
