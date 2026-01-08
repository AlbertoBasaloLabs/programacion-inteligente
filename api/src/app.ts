import express, { Application } from 'express';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

const app: Application = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

export default app;
