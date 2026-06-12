import { test as base, type Page, type Route } from '@playwright/test';

// Mock product data
export const mockProducts = {
  products: [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.',
      price: 9.99,
      discountPercentage: 10,
      rating: 4.5,
      stock: 99,
      brand: 'Essence',
      category: 'beauty',
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/2.webp',
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/3.webp'
      ]
    },
    {
      id: 2,
      title: 'Eyeshadow Palette with Mirror',
      description: 'The Eyeshadow Palette with Mirror offers a versatile range of colors for creating stunning eye looks.',
      price: 19.99,
      discountPercentage: 5,
      rating: 4.2,
      stock: 150,
      brand: 'Glamour',
      category: 'beauty',
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette/thumbnail.webp',
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette/1.webp',
        'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette/2.webp'
      ]
    },
    {
      id: 3,
      title: 'Powder Canister',
      description: 'The Powder Canister is a finely milled face powder that provides a smooth, matte finish.',
      price: 14.99,
      discountPercentage: 15,
      rating: 4.8,
      stock: 75,
      brand: 'Luxury',
      category: 'beauty',
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp',
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp'
      ]
    },
    {
      id: 4,
      title: 'Red Lipstick',
      description: 'The Red Lipstick is a classic, bold red lipstick that provides long-lasting color.',
      price: 12.99,
      discountPercentage: 8,
      rating: 4.6,
      stock: 88,
      brand: 'Chic',
      category: 'beauty',
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
      images: [
        'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp',
        'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/2.webp'
      ]
    }
  ],
  total: 4,
  skip: 0,
  limit: 4
};

// Mock single product data
export const mockProduct = {
  id: 1,
  title: 'Essence Mascara Lash Princess',
  description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Its unique formula coats each lash from root to tip, creating a dramatic, full-bodied look that lasts all day.',
  price: 9.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 99,
  brand: 'Essence',
  category: 'beauty',
  thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  images: [
    'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/2.webp',
    'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/3.webp'
  ]
};

// Mock cart data
export const mockCart = {
  items: [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      price: 9.99,
      quantity: 2,
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp'
    },
    {
      id: 2,
      title: 'Eyeshadow Palette with Mirror',
      price: 19.99,
      quantity: 1,
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette/thumbnail.webp'
    }
  ],
  total: 39.97,
  itemCount: 3
};

// Define custom fixture types
interface ApiFixtures {
  mockApiEndpoints: Page;
}

// Extend base test with API mocking fixtures
export const test = base.extend<ApiFixtures>({
  mockApiEndpoints: async ({ page }: { page: Page }, use: (page: Page) => Promise<void>) => {
    // Mock products API
    await page.route('**/products', (route: Route) => {
      const url = new URL(route.request().url());
      const category = url.searchParams.get('category');
      const minRating = url.searchParams.get('minRating');
      
      let filteredProducts = mockProducts.products;
      
      // Apply filters if present
      if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
      }
      
      if (minRating) {
        const minRatingNum = parseFloat(minRating);
        filteredProducts = filteredProducts.filter(p => p.rating >= minRatingNum);
      }
      
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          ...mockProducts,
          products: filteredProducts
        })
      });
    });

    // Mock single product API
    await page.route('**/products/1', (route: Route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockProduct)
      });
    });

    // Mock product not found
    await page.route('**/products/999', (route: Route) => {
      route.fulfill({
        status: 404,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Product not found' })
      });
    });

    // Mock cart API
    await page.route('**/cart/**', (route: Route) => {
      const method = route.request().method();
      
      if (method === 'GET') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(mockCart)
        });
      } else if (method === 'POST' || method === 'PUT') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ 
            success: true, 
            message: 'Cart updated successfully' 
          })
        });
      }
    });

    await use(page); // eslint-disable-line react-hooks/rules-of-hooks
  }
});
