import express from 'express';
import { json } from 'body-parser';
import { errorHandler } from './Middlewares/error-handler';
import { userRoutes } from './Routes/current-user';

const app = express();

app.use(json());

app.use(userRoutes);

app.all('*', () => {
  throw new Error('Route not found');
});

app.use(errorHandler);

export { app };
