import express from 'express';
import rocketsRouter from './routes/rockets.route';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/rockets', rocketsRouter);

export function startServer(port = PORT) {
  // Keep a bootstrap function so tests can start the server on a random port.
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  return server;
}

if (require.main === module) {
  startServer();
}

export default app;
