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

test('health endpoint returns ok payload', async () => {
  const response = await api.get('/health');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.status).toBe('ok');
  expect(typeof body.timestamp).toBe('string');
});
