import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const allowedOrigins = process.env.CLIENT_URL ?? ' http://localhost:5173/';

app.use(
  cors({
    origin: [process.env.CLIENT_URL || '', 'http://localhost:5173'],
  })
);

app.use(express.json());

app.use('/api/v1', router);

export default app;
