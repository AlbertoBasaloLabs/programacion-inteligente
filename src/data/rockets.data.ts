import { Rocket } from '../shared/rocket.type';

const rockets: Rocket[] = [];

export function getAllRockets(): Rocket[] {
  return rockets;
}

export function getRocketById(id: number): Rocket | undefined {
  return rockets.find(rocket => rocket.id === id);
}

export function addRocket(rocket: Rocket): Rocket {
  rockets.push(rocket);
  return rocket;
}

export function generateRocketId(): number {
  if (rockets.length === 0) {
    return 1;
  }
  const maxId = Math.max(...rockets.map(r => r.id));
  return maxId + 1;
}
