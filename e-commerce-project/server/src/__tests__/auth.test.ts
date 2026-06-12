import request from 'supertest';
import { createTestApp } from './helpers/app';

const app = createTestApp();

describe('Auth Endpoints - Testing Concepts Demo', () => {
  describe('POST /auth/signup', () => {
    it('should demonstrate testing POST requests with validation', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({
          email: 'invalid-email',
          password: 'password123',
        });

      // Demonstrates: Testing validation errors
      expect(response.status).toBeGreaterThanOrEqual(400);
      expect(response.body).toBeDefined();
    });
  });

  describe('POST /auth/login', () => {
    it('should demonstrate testing authentication endpoints', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'password123',
        });

      // Demonstrates: Testing authentication failures
      expect([400, 401]).toContain(response.status);
    });
  });

  describe('GET /auth/me', () => {
    it('should demonstrate testing protected routes without token', async () => {
      const response = await request(app)
        .get('/auth/me');

      // Demonstrates: Testing authorization
      expect(response.status).toBe(401);
    });

    it('should demonstrate testing with invalid JWT token', async () => {
      const response = await request(app)
        .get('/auth/me')
        .set('Authorization', 'Bearer invalid-token-format');

      // Demonstrates: Testing token validation
      expect(response.status).toBe(401);
    });
  });

  describe('POST /auth/logout', () => {
    it('should demonstrate testing simple POST endpoints', async () => {
      const response = await request(app)
        .post('/auth/logout');

      // Demonstrates: Testing successful responses
      expect([200, 204]).toContain(response.status);
    });
  });
});
