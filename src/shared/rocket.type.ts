export type RocketRange = 'suborbital' | 'orbital' | 'moon' | 'mars';

export type Rocket = {
  id: number;
  name: string;
  range: RocketRange;
  capacity: number;
};
