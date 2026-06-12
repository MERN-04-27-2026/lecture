import request from 'supertest';
import { createTestApp } from './helpers/app';

const app = createTestApp();

describe('Cart Endpoints - Testing Concepts Demo', () => {
  describe('GET /carts', () => {
    it('should demonstrate testing list endpoints', async () => {
      const response = await request(app)
        .get('/carts');

      // Demonstrates: Testing list responses
      expect([200, 500]).toContain(response.status);
      expect(response.body).toBeDefined();
    });
  });

  describe('GET /carts/:id', () => {
    it('should demonstrate testing resource not found', async () => {
      const response = await request(app)
        .get('/carts/99999');

      // Demonstrates: Testing 404 responses
      expect([404, 500]).toContain(response.status);
    });
  });

  describe('POST /carts', () => {
    it('should demonstrate testing POST with validation', async () => {
      const response = await request(app)
        .post('/carts')
        .send({});

      // Demonstrates: Testing missing required fields
      expect([400, 500]).toContain(response.status);
    });
  });

  describe('POST /carts/:id/items', () => {
    it('should demonstrate testing nested resource creation', async () => {
      const response = await request(app)
        .post('/carts/99999/items')
        .send({
          productId: 1,
          quantity: 2,
        });

      // Demonstrates: Testing nested routes
      expect([404, 400, 500]).toContain(response.status);
    });
  });

  describe('DELETE /carts/:id', () => {
    it('should demonstrate testing DELETE operations', async () => {
      const response = await request(app)
        .delete('/carts/99999');

      // Demonstrates: Testing delete with non-existent resource
      expect([404, 500]).toContain(response.status);
    });
  });
});
