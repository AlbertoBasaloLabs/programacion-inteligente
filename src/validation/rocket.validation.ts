import { RocketRange } from '../shared/rocket.type';

const VALID_RANGES: RocketRange[] = ['suborbital', 'orbital', 'moon', 'mars'];
const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 50;
const MIN_CAPACITY = 1;
const MAX_CAPACITY = 10;

export type ValidationResult = {
  isValid: boolean;
  error?: string;
};

export function validateRocketName(name: unknown): ValidationResult {
  if (typeof name !== 'string') {
    return { isValid: false, error: 'Name must be a string' };
  }
  if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
    return { isValid: false, error: `Name must be between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters` };
  }
  return { isValid: true };
}

export function validateRocketRange(range: unknown): ValidationResult {
  if (typeof range !== 'string') {
    return { isValid: false, error: 'Range must be a string' };
  }
  if (!VALID_RANGES.includes(range as RocketRange)) {
    return { isValid: false, error: `Range must be one of: ${VALID_RANGES.join(', ')}` };
  }
  return { isValid: true };
}

export function validateRocketCapacity(capacity: unknown): ValidationResult {
  if (typeof capacity !== 'number' || !Number.isInteger(capacity)) {
    return { isValid: false, error: 'Capacity must be an integer' };
  }
  if (capacity < MIN_CAPACITY || capacity > MAX_CAPACITY) {
    return { isValid: false, error: `Capacity must be between ${MIN_CAPACITY} and ${MAX_CAPACITY}` };
  }
  return { isValid: true };
}

export function validateRocket(data: unknown): ValidationResult {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Invalid request body' };
  }

  const rocket = data as Record<string, unknown>;

  const nameValidation = validateRocketName(rocket.name);
  if (!nameValidation.isValid) {
    return nameValidation;
  }

  const rangeValidation = validateRocketRange(rocket.range);
  if (!rangeValidation.isValid) {
    return rangeValidation;
  }

  const capacityValidation = validateRocketCapacity(rocket.capacity);
  if (!capacityValidation.isValid) {
    return capacityValidation;
  }

  return { isValid: true };
}
