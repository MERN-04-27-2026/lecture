import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

beforeAll(async () => {
  // Test setup - no database required for concept demos
});

afterAll(async () => {
  // Test cleanup
});
