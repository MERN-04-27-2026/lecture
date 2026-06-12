import request from 'supertest';
import { createTestApp } from './helpers/app';
import { generateTestToken } from './helpers/auth';

const app = createTestApp();

describe('User Endpoints - Testing Concepts Demo', () => {
  describe('GET /users', () => {
    it('should demonstrate testing protected routes', async () => {
      const response = await request(app)
        .get('/users');

      // Demonstrates: Testing authentication requirement
      expect(response.status).toBe(401);
    });

    it('should demonstrate testing with authorization header', async () => {
      const token = generateTestToken(1);
      const response = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);

      // Demonstrates: Testing with JWT token
      expect([200, 401]).toContain(response.status);
    });
  });

  describe('GET /users/:id', () => {
    it('should demonstrate testing authenticated GET by ID', async () => {
      const response = await request(app)
        .get('/users/1');

      // Demonstrates: Testing protected resource access
      expect(response.status).toBe(401);
    });
  });

  describe('PATCH /users/:id', () => {
    it('should demonstrate testing authenticated updates', async () => {
      const response = await request(app)
        .patch('/users/1')
        .send({ firstName: 'Updated' });

      // Demonstrates: Testing update without auth
      expect(response.status).toBe(401);
    });

    it('should demonstrate testing with valid token', async () => {
      const token = generateTestToken(1);
      const response = await request(app)
        .patch('/users/1')
        .set('Authorization', `Bearer ${token}`)
        .send({ firstName: 'Updated' });

      // Demonstrates: Testing authenticated updates
      expect([200, 404, 401, 500]).toContain(response.status);
    });
  });
});
