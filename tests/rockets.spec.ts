import type { APIRequestContext } from '@playwright/test';
import { expect, request as playwrightRequest, test } from '@playwright/test';
import type { Server } from 'http';
import type { AddressInfo } from 'net';
import { startServer } from '../src/index';

let server: Server;
let api: APIRequestContext;

const closeServer = (instance: Server) =>
  new Promise<void>((resolve, reject) => {
    instance.close(err => {
      if (err) reject(err);
      else resolve();
    });
  });

test.beforeAll(async () => {
  server = startServer(0);
  const address = server.address() as AddressInfo;
  const baseURL = `http://127.0.0.1:${address.port}`;
  api = await playwrightRequest.newContext({ baseURL });
});

test.afterAll(async () => {
  await api.dispose();
  await closeServer(server);
});

test.describe('Rockets API', () => {
  
  test('POST /rockets - should create a rocket with valid data and return 201', async () => {
    const newRocket = {
      name: 'Falcon Heavy',
      range: 'mars',
      capacity: 7
    };

    const response = await api.post('/rockets', {
      data: newRocket
    });

    expect(response.status()).toBe(201);
    const rocket = await response.json();
    expect(rocket).toHaveProperty('id');
    expect(rocket.name).toBe(newRocket.name);
    expect(rocket.range).toBe(newRocket.range);
    expect(rocket.capacity).toBe(newRocket.capacity);
  });

  test('POST /rockets - should return 400 for invalid name (too short)', async () => {
    const invalidRocket = {
      name: 'AB',
      range: 'orbital',
      capacity: 5
    };

    const response = await api.post('/rockets', {
      data: invalidRocket
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('POST /rockets - should return 400 for invalid range', async () => {
    const invalidRocket = {
      name: 'Test Rocket',
      range: 'jupiter',
      capacity: 5
    };

    const response = await api.post('/rockets', {
      data: invalidRocket
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('POST /rockets - should return 400 for invalid capacity (too high)', async () => {
    const invalidRocket = {
      name: 'Test Rocket',
      range: 'moon',
      capacity: 15
    };

    const response = await api.post('/rockets', {
      data: invalidRocket
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('GET /rockets - should return 200 with array of rockets', async () => {
    const response = await api.get('/rockets');

    expect(response.status()).toBe(200);
    const rockets = await response.json();
    expect(Array.isArray(rockets)).toBe(true);
  });

  test('GET /rockets/:id - should return 200 with rocket details for existing rocket', async () => {
    // First create a rocket
    const newRocket = {
      name: 'Starship',
      range: 'mars',
      capacity: 10
    };

    const createResponse = await api.post('/rockets', {
      data: newRocket
    });

    const createdRocket = await createResponse.json();

    // Then retrieve it by ID
    const response = await api.get(`/rockets/${createdRocket.id}`);

    expect(response.status()).toBe(200);
    const rocket = await response.json();
    expect(rocket.id).toBe(createdRocket.id);
    expect(rocket.name).toBe(newRocket.name);
    expect(rocket.range).toBe(newRocket.range);
    expect(rocket.capacity).toBe(newRocket.capacity);
  });

  test('GET /rockets/:id - should return 404 for non-existing rocket', async () => {
    const response = await api.get('/rockets/99999');

    expect(response.status()).toBe(404);
    const error = await response.json();
    expect(error).toHaveProperty('error');
  });
});
