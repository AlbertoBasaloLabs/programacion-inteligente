import { Router } from 'express';
import { addRocket, generateRocketId, getAllRockets, getRocketById } from '../data/rockets.data';
import { Rocket, RocketRange } from '../shared/rocket.type';
import { validateRocket } from '../validation/rocket.validation';

const router = Router();

router.post('/', (req, res) => {
  try {
    const validation = validateRocket(req.body);
    if (!validation.isValid) {
      res.status(400).json({ error: validation.error });
      return;
    }

    const { name, range, capacity } = req.body;
    const id = generateRocketId();
    const rocket: Rocket = { id, name, range: range as RocketRange, capacity };
    
    const createdRocket = addRocket(rocket);
    res.status(201).json(createdRocket);
  } catch (error) {
    console.error('Error creating rocket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', (req, res) => {
  try {
    const rockets = getAllRockets();
    res.status(200).json(rockets);
  } catch (error) {
    console.error('Error retrieving rockets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid ID format' });
      return;
    }

    const rocket = getRocketById(id);
    if (!rocket) {
      res.status(404).json({ error: 'Rocket not found' });
      return;
    }

    res.status(200).json(rocket);
  } catch (error) {
    console.error('Error retrieving rocket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
