# E2E Test Suite for E-Commerce Application

This directory contains comprehensive end-to-end tests for the e-commerce application using Playwright.

## 📁 Test Structure

```
e2e/
├── fixtures/
│   ├── auth.fixture.ts      # Authentication fixtures and mocks
│   └── api.fixture.ts       # API mocking fixtures
├── home.spec.ts             # Home page tests
├── products.spec.ts         # Products listing page tests
├── product-detail.spec.ts   # Product detail page tests
├── auth.spec.ts             # Authentication flow tests
├── cart.spec.ts             # Shopping cart functionality tests
├── navigation.spec.ts       # Navigation and routing tests
├── user-flows.spec.ts       # Complete user journey tests
├── test-setup.ts            # Global test configuration
└── README.md               # This documentation
```

## 🚀 Running Tests

### Prerequisites
- Node.js installed
- Dependencies installed (`npm install`)
- **Note**: The dev server will automatically start when running tests

### Commands

```bash
# Run all e2e tests (automatically starts dev server)
npm run e2e

# Run tests with UI mode (for debugging)
npx playwright test --ui

# Run tests in headed mode (show browser)
npx playwright test --headed

# Run specific test file
npx playwright test home.spec.ts

# Run tests with specific pattern
npx playwright test --grep "should display"

# Run tests in debug mode
npx playwright test --debug
```

## 📋 Test Coverage

### 1. Home Page (`home.spec.ts`)
- ✅ Welcome message and description display
- ✅ Recommended products section
- ✅ Product cards with required information (price, rating, stock)
- ✅ Loading state handling
- ✅ Error state handling
- ✅ Responsive design testing

### 2. Products Page (`products.spec.ts`)
- ✅ Page title and layout
- ✅ Product cards with correct information
- ✅ Navigation to product details
- ✅ Product image loading
- ✅ Loading and error states
- ✅ Category and rating filtering via URL parameters
- ✅ Responsive design testing
- ✅ Grid layout validation

### 3. Product Detail Page (`product-detail.spec.ts`)
- ✅ Product information display
- ✅ Product image loading and attributes
- ✅ Add to Cart functionality
- ✅ Back to Products navigation
- ✅ Loading and error states
- ✅ Responsive design testing
- ✅ Grid layout validation
- ✅ Direct navigation handling

### 4. Authentication (`auth.spec.ts`)
- ✅ Login page display and layout
- ✅ Signup page display and layout
- ✅ Responsive design for auth pages
- ✅ Protected route handling (cart, settings)
- ✅ Public route accessibility
- ✅ Navigation between auth pages
- ✅ Authentication flow mocking

### 5. Shopping Cart (`cart.spec.ts`)
- ✅ Unauthenticated access blocking (redirects to login)
- ⏭️ Authenticated user cart display (skipped - auth not implemented)
- ⏭️ Empty cart message (skipped - auth not implemented)
- ⏭️ Page layout validation (skipped - auth not implemented)
- ⏭️ Responsive design testing (skipped - auth not implemented)
- ⏭️ Cart functionality with items (skipped - auth not implemented)
- ⏭️ API error handling (skipped - auth not implemented)
- ⏭️ Add to Cart flow integration (skipped - auth not implemented)

**Note**: Most cart tests are currently skipped because the application doesn't have a working authentication system yet. Once authentication is implemented, these tests can be enabled by removing the `.skip` modifier.

### 6. Navigation (`navigation.spec.ts`)
- ✅ Basic page navigation
- ✅ Browser navigation (back/forward)
- ✅ Direct URL navigation
- ✅ Dynamic product routes
- ✅ Invalid route handling
- ✅ Navigation state persistence
- ✅ Query parameter handling
- ✅ Navigation history management
- ✅ Hash navigation
- ✅ Loading state during navigation
- ✅ API error handling during navigation

### 7. User Flows (`user-flows.spec.ts`)
- ✅ Complete shopping journey
- ✅ Product discovery flows
- ✅ Error handling flows
- ✅ Responsive design flows
- ✅ Performance testing
- ✅ Accessibility testing

## 🔧 Test Configuration

### Playwright Config (`playwright.config.ts`)
- Test directory: `./e2e`
- Parallel execution enabled
- HTML reporter
- Chromium browser testing
- Trace on first retry
- CI-specific configurations

### Test Setup (`test-setup.ts`)
- Global test configuration
- Console mocking for cleaner output
- Default viewport sizing
- Error handling setup

## 🎯 Test Fixtures

### Authentication Fixture (`fixtures/auth.fixture.ts`)
- Mock user data and authentication tokens
- API endpoint mocking for login/signup
- Easy authenticated page setup

### API Fixture (`fixtures/api.fixture.ts`)
- Comprehensive product data mocking
- Cart API mocking
- Filter and search parameter handling
- Error response simulation

## 📱 Responsive Testing

Tests are automatically run across multiple viewport sizes:
- **Mobile**: 375x667 (iPhone)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1200x800 (Standard desktop)

## 🐛 Debugging Tips

### Using Test IDs
The tests use CSS classes and semantic selectors rather than test IDs:
- Use `.mantine-Card` for product cards
- Use `.mantine-Badge` for price/category badges
- Use `img[alt="Product"]` for product images
- Use semantic text selectors like `text=Welcome to E-Commerce Store`

### Common Issues
1. **Timeouts**: Increase timeout values for slow-loading APIs
2. **Selector Issues**: Use browser dev tools to verify selectors
3. **API Mocking**: Ensure mock data matches expected API responses
4. **Authentication**: Check that auth fixtures are properly set up

### Debug Mode
```bash
# Run with debug mode for step-by-step execution
npx playwright test --debug

# Run with UI mode for visual debugging
npx playwright test --ui
```

## 📊 Mock Data

### Products
- 4 sample products with realistic data
- Images, ratings, prices, descriptions
- Category and brand information

### Authentication
- Mock user: `test@example.com`
- JWT token simulation
- Role-based access testing

### Cart
- Sample cart items with quantities
- Total calculation testing
- Empty cart scenarios

## 🔄 CI/CD Integration

The tests are configured to work with CI/CD pipelines:
- Automatic retry on failure (2 retries in CI)
- Parallel execution for faster runs
- HTML reports for test results
- Screenshot and trace capture on failures

## 📈 Best Practices

1. **Page Object Pattern**: Tests use page-specific selectors and actions
2. **Data-Driven Testing**: Mock data is centralized in fixtures
3. **Error Boundaries**: All tests include error handling scenarios
4. **Accessibility**: Tests include keyboard navigation and focus management
5. **Performance**: Loading times and responsiveness are validated
6. **Cross-Browser**: Configuration supports multiple browsers (currently Chromium)

## 🚧 Future Enhancements

- [ ] Cross-browser testing (Firefox, Safari)
- [ ] Visual regression testing
- [ ] Performance metrics collection
- [ ] Accessibility audit integration
- [ ] Mobile app testing (if applicable)
- [ ] API contract testing integration

## 📞 Support

For questions or issues with the e2e test suite:
1. Check the Playwright documentation: https://playwright.dev/
2. Review test logs and HTML reports
3. Use debug mode to troubleshoot failing tests
4. Verify API endpoints and mock data match actual application behavior
