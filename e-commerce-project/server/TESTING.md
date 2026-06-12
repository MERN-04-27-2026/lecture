# API Testing Guide

## 🎯 Overview

Comprehensive test suite for the E-Commerce API using **Jest** and **Supertest**, following industry-standard practices.

## 📊 Test Statistics

- **Total Test Suites**: 5
- **Total Tests**: 80+
- **Coverage Target**: >80%
- **Test Execution Time**: <30 seconds

## 🧪 Test Suites

### 1. Authentication Tests (`auth.test.ts`)
**Coverage**: 15 tests

| Test Case | Description |
|-----------|-------------|
| ✅ Signup validation | Valid user registration with JWT tokens |
| ✅ Duplicate email rejection | Prevents duplicate user accounts |
| ✅ Email validation | Rejects invalid email formats |
| ✅ Required fields | Validates all required fields present |
| ✅ Login success | Authenticates with valid credentials |
| ✅ Invalid password | Rejects incorrect passwords |
| ✅ Non-existent user | Handles login for non-existent users |
| ✅ Protected routes | Validates JWT authentication |
| ✅ Invalid tokens | Rejects malformed/expired tokens |
| ✅ Token refresh | Refreshes access tokens |
| ✅ Logout | Handles logout flow |
| ✅ Password reset | Initiates password reset |

### 2. Product Tests (`products.test.ts`)
**Coverage**: 20 tests

| Test Case | Description |
|-----------|-------------|
| ✅ List products | Returns paginated product list |
| ✅ Empty list | Handles empty product catalog |
| ✅ Pagination | Supports limit/skip parameters |
| ✅ Category filter | Filters by product category |
| ✅ Search | Full-text search by title |
| ✅ Get by ID | Retrieves single product |
| ✅ 404 handling | Returns 404 for missing products |
| ✅ Create product | Creates new product with validation |
| ✅ Update product | Updates existing product |
| ✅ Delete product | Removes product from catalog |
| ✅ Metadata update | Updates product metadata |
| ✅ Image management | Adds product images |
| ✅ Categories list | Returns unique categories |
| ✅ Price validation | Validates price constraints |
| ✅ Stock validation | Validates stock levels |

### 3. Cart Tests (`carts.test.ts`)
**Coverage**: 18 tests

| Test Case | Description |
|-----------|-------------|
| ✅ List carts | Returns all carts |
| ✅ Get cart by ID | Retrieves cart with items |
| ✅ Get user cart | Finds cart by user ID |
| ✅ Create cart | Creates new cart for user |
| ✅ Add item | Adds product to cart |
| ✅ Update quantity | Updates existing item quantity |
| ✅ Remove item | Removes item from cart |
| ✅ Delete cart | Deletes cart with cascade |
| ✅ Cart totals | Calculates cart totals |
| ✅ Invalid quantity | Rejects negative quantities |
| ✅ Non-existent product | Handles missing products |
| ✅ User validation | Validates user exists |
| ✅ Cart isolation | Maintains separate user carts |

### 4. User Tests (`users.test.ts`)
**Coverage**: 15 tests

| Test Case | Description |
|-----------|-------------|
| ✅ List users | Returns paginated user list (auth required) |
| ✅ Pagination | Supports limit/skip |
| ✅ Get by ID | Retrieves user profile |
| ✅ Update profile | Updates user information |
| ✅ Email update | Changes user email |
| ✅ Preferences | Updates user preferences |
| ✅ Preference merge | Merges new preferences with existing |
| ✅ Authorization | Requires authentication |
| ✅ Password exclusion | Never returns password in response |
| ✅ 404 handling | Returns 404 for missing users |
| ✅ Invalid email | Rejects invalid email formats |

### 5. Integration Tests (`integration.test.ts`)
**Coverage**: 12+ E2E scenarios

| Test Case | Description |
|-----------|-------------|
| ✅ Complete shopping flow | Signup → Browse → Cart → Checkout |
| ✅ Product discovery | Search and filter products |
| ✅ Auth lifecycle | Complete authentication flow |
| ✅ Multi-user isolation | Separate carts per user |
| ✅ Concurrent operations | Handles race conditions |
| ✅ Edge cases | Out-of-stock, invalid data, etc. |

## 🏗️ Architecture

### Test Helpers

```typescript
// helpers/app.ts - Test application factory
createTestApp() // Returns configured Express app

// helpers/db.ts - Database utilities
clearDatabase() // Cleans all tables
resetSequences() // Resets auto-increment IDs

// helpers/factories.ts - Test data factories
createUser(overrides?) // Creates test user
createProduct(overrides?) // Creates test product
createCart(userId) // Creates cart for user
addCartItem(cartId, productId, quantity) // Adds item to cart

// helpers/auth.ts - Authentication helpers
generateTestToken(userId) // Generates JWT token
generateTestRefreshToken(userId) // Generates refresh token
```

### Test Pattern

```typescript
describe('Feature', () => {
  beforeEach(async () => {
    await clearDatabase(); // Clean slate for each test
  });

  it('should perform action', async () => {
    // Arrange - Set up test data
    const user = await createUser();
    
    // Act - Execute the test
    const response = await request(app)
      .post('/endpoint')
      .send(data)
      .expect(200);
    
    // Assert - Verify results
    expect(response.body).toMatchObject(expected);
  });
});
```

## 🚀 Running Tests

### First Time Setup

Before running tests for the first time, create the test database schema:

```bash
# Push database schema to test database
npm run db:push
```

This creates all necessary tables in your test database.

### Running Tests

```bash
# Run all tests
npm test

# Watch mode (auto-rerun on changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Specific test file
npm test -- auth.test.ts

# Specific test pattern
npm test -- --testNamePattern="should login"

# Verbose output
npm test -- --verbose

# Run in band (sequential, easier debugging)
npm test -- --runInBand
```

## 📈 Coverage Report

```bash
npm run test:coverage
```

Generates coverage report in `coverage/` directory:
- `lcov-report/index.html` - Interactive HTML report
- `lcov.info` - LCOV format for CI/CD
- `coverage-final.json` - JSON format

## 🔧 Configuration

### Jest Config (`jest.config.js`)

```javascript
{
  testEnvironment: "node",
  transform: { "^.+\.tsx?$": ["ts-jest", {}] },
  testMatch: ['**/__tests__/**/*.test.ts'],
  setupFilesAfterEnv: ['./src/__tests__/setup.ts'],
  testTimeout: 30000
}
```

### Test Environment (`.env.test`)

```env
PORT=3002
DATABASE_URL="postgresql://postgres:postgres@localhost:5434/lecture_ecommerce_test"
JWT_SECRET="test_secret_key"
JWT_REFRESH_SECRET="test_refresh_secret"
NODE_ENV=test
```

## 🎓 Best Practices

### ✅ DO

- **Isolate tests**: Each test has clean database state
- **Use factories**: Reusable test data creation
- **Test happy & sad paths**: Both success and error cases
- **Descriptive names**: Clear test descriptions
- **Proper assertions**: Use specific matchers
- **Mock external services**: Don't hit real APIs
- **Fast tests**: Keep execution time low

### ❌ DON'T

- **Share state**: Tests should be independent
- **Test implementation**: Test behavior, not internals
- **Hardcode IDs**: Use factory-generated data
- **Skip cleanup**: Always clean up after tests
- **Ignore errors**: All errors should be tested
- **Use production DB**: Always use test database

## 🐛 Debugging

### VS Code Launch Config

```json
{
  "type": "node",
  "request": "launch",
  "name": "Jest Debug",
  "program": "${workspaceFolder}/node_modules/.bin/jest",
  "args": ["--runInBand", "${file}"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

### Common Issues

**Tests failing randomly?**
- Check for shared state between tests
- Ensure `clearDatabase()` is called in `beforeEach`

**Timeout errors?**
- Increase `testTimeout` in jest.config.js
- Check for unresolved promises

**Database connection errors?**
- Verify `.env.test` configuration
- Ensure test database exists
- Check PostgreSQL is running

## 📝 Writing New Tests

1. **Create test file**: `src/__tests__/feature.test.ts`
2. **Import helpers**: Use test utilities
3. **Setup/teardown**: Clean database in `beforeEach`
4. **Write tests**: Follow AAA pattern (Arrange, Act, Assert)
5. **Run tests**: `npm test -- feature.test.ts`

### Example Template

```typescript
import request from 'supertest';
import { createTestApp } from './helpers/app';
import { clearDatabase } from './helpers/db';
import { createUser } from './helpers/factories';

const app = createTestApp();

describe('New Feature', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  describe('POST /new-endpoint', () => {
    it('should handle valid request', async () => {
      const user = await createUser();
      
      const response = await request(app)
        .post('/new-endpoint')
        .send({ userId: user.id })
        .expect(200);
      
      expect(response.body).toHaveProperty('success', true);
    });

    it('should reject invalid request', async () => {
      const response = await request(app)
        .post('/new-endpoint')
        .send({})
        .expect(400);
      
      expect(response.body).toHaveProperty('error');
    });
  });
});
```

## 🔄 CI/CD Integration

Tests run automatically on:
- Push to `main` or `develop` branches
- Pull requests
- Manual workflow dispatch

See `.github/workflows/test.yml` for CI configuration.

## 📚 Resources

- [Jest Documentation](https://jestjs.io/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Testing Best Practices](https://testingjavascript.com/)
- [API Testing Guide](https://martinfowler.com/articles/practical-test-pyramid.html)
