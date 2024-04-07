import { Request } from 'express';

export interface User {
  id: string;
  email: string;
}

export interface CustomeRequests extends Request {
  user?: User;
  headers: {
    authorization?: string;
  };
}
