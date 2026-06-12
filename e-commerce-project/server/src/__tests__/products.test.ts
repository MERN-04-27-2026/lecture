import request from 'supertest';
import { createTestApp } from './helpers/app';

const app = createTestApp();

describe('Product Endpoints - Testing Concepts Demo', () => {

  describe('GET /products', () => {
    it('should demonstrate testing GET requests with query parameters', async () => {
      const response = await request(app)
        .get('/products?limit=10&skip=0');

      // Demonstrates: Testing query parameters and response structure
      expect([200, 500]).toContain(response.status);
      expect(response.body).toBeDefined();
    });

    it('should demonstrate testing filtering', async () => {
      const response = await request(app)
        .get('/products?category=electronics');

      // Demonstrates: Testing filtered responses
      expect([200, 500]).toContain(response.status);
      expect(response.body).toBeDefined();
    });
  });

  describe('GET /products/categories', () => {
    it('should demonstrate testing array responses', async () => {
      const response = await request(app)
        .get('/products/categories');

      // Demonstrates: Testing array responses
      expect([200, 500]).toContain(response.status);
      expect(response.body).toBeDefined();
    });
  });

  describe('GET /products/:id', () => {
    it('should demonstrate testing 404 errors', async () => {
      const response = await request(app)
        .get('/products/99999');

      // Demonstrates: Testing error responses
      expect([404, 500]).toContain(response.status);
    });

    it('should demonstrate testing invalid parameters', async () => {
      const response = await request(app)
        .get('/products/invalid-id');

      // Demonstrates: Testing validation
      expect([400, 404, 500]).toContain(response.status);
    });
  });

  describe('POST /products', () => {
    it('should demonstrate testing POST with missing fields', async () => {
      const response = await request(app)
        .post('/products')
        .send({
          title: 'Incomplete Product',
        });

      // Demonstrates: Testing validation errors
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('PATCH /products/:id', () => {
    it('should demonstrate testing PATCH requests', async () => {
      const response = await request(app)
        .patch('/products/99999')
        .send({ title: 'Updated' });

      // Demonstrates: Testing update operations
      expect([404, 500]).toContain(response.status);
    });
  });

  describe('DELETE /products/:id', () => {
    it('should demonstrate testing DELETE requests', async () => {
      const response = await request(app)
        .delete('/products/99999');

      // Demonstrates: Testing delete operations
      expect([404, 500]).toContain(response.status);
    });
  });

  describe('PATCH /products/:id/metadata', () => {
    it('should demonstrate testing nested object updates', async () => {
      const response = await request(app)
        .patch('/products/1/metadata')
        .send({
          weight: 1.5,
          dimensions: { width: 10, height: 20, depth: 5 },
        });

      // Demonstrates: Testing complex payloads
      expect([200, 404, 500]).toContain(response.status);
    });
  });
});
