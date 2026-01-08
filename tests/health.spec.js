const { test, expect } = require('@playwright/test');

test('should return 200 OK and status ok', async ({ request }) => {
  const response = await request.get('/health');
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body).toHaveProperty('status', 'ok');
  expect(body).toHaveProperty('timestamp');
});
