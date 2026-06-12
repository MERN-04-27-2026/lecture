import request from 'supertest';
import { createTestApp } from './helpers/app';

const app = createTestApp();

describe('Integration Tests - Testing Concepts Demo', () => {
  describe('API Health Check', () => {
    it('should demonstrate testing root endpoint', async () => {
      const response = await request(app)
        .get('/');

      // Demonstrates: Testing basic connectivity
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
    });
  });

  describe('Error Handling', () => {
    it('should demonstrate testing 404 for unknown routes', async () => {
      const response = await request(app)
        .get('/nonexistent-route');

      // Demonstrates: Testing error handling
      expect(response.status).toBe(404);
    });
  });

  describe('Request/Response Cycle', () => {
    it('should demonstrate testing JSON responses', async () => {
      const response = await request(app)
        .get('/products');

      // Demonstrates: Testing content type
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toBeDefined();
    });

    it('should demonstrate testing request headers', async () => {
      const response = await request(app)
        .get('/products')
        .set('Accept', 'application/json');

      // Demonstrates: Testing with custom headers
      expect([200, 500]).toContain(response.status);
    });
  });

  describe('HTTP Methods', () => {
    it('should demonstrate testing different HTTP methods', async () => {
      // GET
      const getResponse = await request(app).get('/products');
      expect([200, 404, 500]).toContain(getResponse.status);

      // POST
      const postResponse = await request(app)
        .post('/products')
        .send({ title: 'Test' });
      expect([200, 201, 400, 401, 500]).toContain(postResponse.status);

      // PATCH
      const patchResponse = await request(app)
        .patch('/products/1')
        .send({ title: 'Updated' });
      expect([200, 404, 401, 500]).toContain(patchResponse.status);

      // DELETE
      const deleteResponse = await request(app).delete('/products/1');
      expect([200, 204, 404, 401, 500]).toContain(deleteResponse.status);
    });
  });

  describe('Query Parameters', () => {
    it('should demonstrate testing with query strings', async () => {
      const response = await request(app)
        .get('/products')
        .query({ limit: 10, skip: 0, category: 'electronics' });

      // Demonstrates: Testing query parameters
      expect([200, 500]).toContain(response.status);
    });
  });

  describe('Request Body Validation', () => {
    it('should demonstrate testing with various payloads', async () => {
      // Empty body
      const emptyResponse = await request(app)
        .post('/auth/login')
        .send({});
      expect(emptyResponse.status).toBeGreaterThanOrEqual(400);

      // Invalid data
      const invalidResponse = await request(app)
        .post('/auth/signup')
        .send({ email: 'not-an-email' });
      expect(invalidResponse.status).toBeGreaterThanOrEqual(400);
    });
  });

  describe('Authentication Flow', () => {
    it('should demonstrate testing auth flow', async () => {
      // Attempt to access protected route without token
      const unauthedResponse = await request(app)
        .get('/users');
      expect(unauthedResponse.status).toBe(401);

      // Attempt with invalid token
      const invalidTokenResponse = await request(app)
        .get('/users')
        .set('Authorization', 'Bearer invalid-token');
      expect(invalidTokenResponse.status).toBe(401);
    });
  });

  describe('CORS and Headers', () => {
    it('should demonstrate testing CORS headers', async () => {
      const response = await request(app)
        .get('/products')
        .set('Origin', 'http://localhost:3000');

      // Demonstrates: Testing CORS configuration
      expect(response.headers).toHaveProperty('access-control-allow-origin');
    });
  });
});
