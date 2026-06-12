# E-Commerce API Testing Documentation

## Overview

This project uses **Jest** and **Supertest** for comprehensive API testing, following industry best practices.

## Test Structure

```
src/__tests__/
├── helpers/
│   ├── app.ts           # Test app factory
│   ├── db.ts            # Database utilities
│   ├── factories.ts     # Test data factories
│   └── auth.ts          # Auth helpers
├── auth.test.ts         # Authentication endpoints
├── products.test.ts     # Product endpoints
├── carts.test.ts        # Cart endpoints
├── users.test.ts        # User endpoints
├── integration.test.ts  # E2E integration tests
└── setup.ts             # Global test setup
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- auth.test.ts

# Run tests matching pattern
npm test -- --testNamePattern="should login"
```

## Test Coverage

### Auth Module (`auth.test.ts`)
- ✅ User signup with validation
- ✅ User login with credentials
- ✅ Protected route access with JWT
- ✅ Token refresh mechanism
- ✅ Password reset flow
- ✅ Logout functionality
- ✅ Error handling for invalid inputs

### Products Module (`products.test.ts`)
- ✅ List products with pagination
- ✅ Filter by category
- ✅ Search by keyword
- ✅ Get product by ID
- ✅ Create new product
- ✅ Update product
- ✅ Delete product
- ✅ Update product metadata
- ✅ Add product images
- ✅ List categories

### Carts Module (`carts.test.ts`)
- ✅ List all carts
- ✅ Get cart by ID
- ✅ Get cart by user ID
- ✅ Create new cart
- ✅ Add items to cart
- ✅ Update cart totals
- ✅ Delete cart (with cascade)
- ✅ Handle duplicate items
- ✅ Validate quantities

### Users Module (`users.test.ts`)
- ✅ List users (authenticated)
- ✅ Get user by ID
- ✅ Update user profile
- ✅ Update user preferences
- ✅ Pagination support
- ✅ Authorization checks

### Integration Tests (`integration.test.ts`)
- ✅ Complete shopping flow (signup → browse → cart → checkout)
- ✅ Product search and filtering
- ✅ Full authentication lifecycle
- ✅ Multi-user cart isolation
- ✅ Concurrent operations
- ✅ Edge cases and error handling

## Best Practices Implemented

### 1. **Test Isolation**
- Each test has a clean database state
- `beforeEach` clears database before tests
- No test dependencies on execution order

### 2. **Factory Pattern**
- Reusable test data factories in `helpers/factories.ts`
- Consistent test data across test suites
- Easy to override defaults

### 3. **DRY Principle**
- Shared test app setup in `helpers/app.ts`
- Reusable database utilities
- Common auth helpers

### 4. **Comprehensive Coverage**
- Happy path scenarios
- Error cases and validation
- Edge cases
- Integration flows

### 5. **Clear Test Names**
- Descriptive test descriptions
- Follows "should [expected behavior]" pattern
- Grouped by endpoint/feature

### 6. **Proper Assertions**
- Uses specific matchers (`toMatchObject`, `toHaveProperty`)
- Validates response structure
- Checks status codes
- Verifies error messages

### 7. **Authentication Testing**
- Tests both authenticated and unauthenticated requests
- Validates JWT token handling
- Tests authorization boundaries

### 8. **Database Management**
- Separate test database (`.env.test`)
- Automatic cleanup after tests
- Sequence resets for predictable IDs

## Environment Setup

The tests use a separate test database configured in `.env.test`:

```env
PORT=3002
DATABASE_URL="postgresql://postgres:postgres@localhost:5434/lecture_ecommerce_test?schema=public"
JWT_SECRET="test_secret_key"
JWT_REFRESH_SECRET="test_refresh_secret"
NODE_ENV=test
```

## Writing New Tests

### Example Test Structure

```typescript
import request from 'supertest';
import { createTestApp } from './helpers/app';
import { clearDatabase } from './helpers/db';
import { createUser, createProduct } from './helpers/factories';

const app = createTestApp();

describe('Feature Name', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  describe('POST /endpoint', () => {
    it('should perform expected action', async () => {
      // Arrange
      const user = await createUser();
      
      // Act
      const response = await request(app)
        .post('/endpoint')
        .send({ data: 'value' })
        .expect(200);
      
      // Assert
      expect(response.body).toHaveProperty('expectedField');
    });
  });
});
```

## CI/CD Integration

Tests are designed to run in CI/CD pipelines:
- Fast execution (< 30s for full suite)
- No external dependencies required
- Deterministic results
- Clear failure messages

## Debugging Tests

```bash
# Run with verbose output
npm test -- --verbose

# Run single test file
npm test -- auth.test.ts

# Debug specific test
node --inspect-brk node_modules/.bin/jest --runInBand auth.test.ts
```

## Coverage Goals

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

Run `npm run test:coverage` to generate coverage report.
