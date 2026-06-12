import { db } from "../../db";
import { users, products, carts, cartItems } from "../../db/schema";
import bcrypt from "bcrypt";

export const testUser = {
  email: "test@example.com",
  password: "password123",
  firstName: "Test",
  lastName: "User",
  username: "testuser",
};

export const testProduct = {
  title: "Test Product",
  description: "A test product description",
  price: 99.99,
  category: "electronics",
  brand: "TestBrand",
  stock: 100,
  thumbnail: "https://example.com/thumb.jpg",
  images: ["https://example.com/img1.jpg"],
};

export async function createUser(overrides: Partial<typeof testUser> = {}) {
  const userData = { ...testUser, ...overrides };
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  
  const [user] = await db
    .insert(users)
    .values({
      email: userData.email,
      password: hashedPassword,
      firstName: userData.firstName,
      lastName: userData.lastName,
      username: userData.username,
    })
    .returning();
  
  return { user, password: userData.password };
}

export async function createProduct(overrides: Partial<typeof testProduct> = {}) {
  const productData = { ...testProduct, ...overrides };
  
  const [product] = await db
    .insert(products)
    .values(productData)
    .returning();
  
  return product;
}

export async function createCart(userId: number) {
  const [cart] = await db
    .insert(carts)
    .values({
      userId,
      total: "0",
      discountedTotal: "0",
    })
    .returning();
  
  return cart;
}

export async function addCartItem(cartId: number, productId: number, quantity: number = 1) {
  const product = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.id, productId),
  });

  if (!product) throw new Error("Product not found");

  const [item] = await db
    .insert(cartItems)
    .values({
      cartId,
      productId,
      quantity,
      priceAtAdd: product.price.toString(),
    })
    .returning();

  return item;
}
