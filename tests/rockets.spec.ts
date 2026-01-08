import { expect, test } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Rockets API', () => {
  
  test('POST /rockets - should create a rocket with valid data and return 201', async ({ request }) => {
    const newRocket = {
      name: 'Falcon Heavy',
      range: 'mars',
      capacity: 7
    };

    const response = await request.post(`${BASE_URL}/rockets`, {
      data: newRocket
    });

    expect(response.status()).toBe(201);
    const rocket = await response.json();
    expect(rocket).toHaveProperty('id');
    expect(rocket.name).toBe(newRocket.name);
    expect(rocket.range).toBe(newRocket.range);
    expect(rocket.capacity).toBe(newRocket.capacity);
  });

  test('POST /rockets - should return 400 for invalid name (too short)', async ({ request }) => {
    const invalidRocket = {
      name: 'AB',
      range: 'orbital',
      capacity: 5
    };

    const response = await request.post(`${BASE_URL}/rockets`, {
      data: invalidRocket
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('POST /rockets - should return 400 for invalid range', async ({ request }) => {
    const invalidRocket = {
      name: 'Test Rocket',
      range: 'jupiter',
      capacity: 5
    };

    const response = await request.post(`${BASE_URL}/rockets`, {
      data: invalidRocket
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('POST /rockets - should return 400 for invalid capacity (too high)', async ({ request }) => {
    const invalidRocket = {
      name: 'Test Rocket',
      range: 'moon',
      capacity: 15
    };

    const response = await request.post(`${BASE_URL}/rockets`, {
      data: invalidRocket
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('GET /rockets - should return 200 with array of rockets', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/rockets`);

    expect(response.status()).toBe(200);
    const rockets = await response.json();
    expect(Array.isArray(rockets)).toBe(true);
  });

  test('GET /rockets/:id - should return 200 with rocket details for existing rocket', async ({ request }) => {
    // First create a rocket
    const newRocket = {
      name: 'Starship',
      range: 'mars',
      capacity: 10
    };

    const createResponse = await request.post(`${BASE_URL}/rockets`, {
      data: newRocket
    });

    const createdRocket = await createResponse.json();

    // Then retrieve it by ID
    const response = await request.get(`${BASE_URL}/rockets/${createdRocket.id}`);

    expect(response.status()).toBe(200);
    const rocket = await response.json();
    expect(rocket.id).toBe(createdRocket.id);
    expect(rocket.name).toBe(newRocket.name);
    expect(rocket.range).toBe(newRocket.range);
    expect(rocket.capacity).toBe(newRocket.capacity);
  });

  test('GET /rockets/:id - should return 404 for non-existing rocket', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/rockets/99999`);

    expect(response.status()).toBe(404);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });
});
