import { Router } from 'express';
import { version } from '../../package.json';

const router = Router();
const startTime = Date.now();

router.get('/', (_req, res) => {
  const uptime = Math.floor((Date.now() - startTime) / 1000);
  const memoryUsage = process.memoryUsage();

  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: `${uptime}s`,
    version,
    memory: {
      rss: `${Math.round(memoryUsage.rss / 1024 / 1024)}MB`,
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
      heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`,
    },
    node: process.version,
  });
});

export default router;
