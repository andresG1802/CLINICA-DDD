import { Router } from 'express';
import { login } from './controller';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();
    
    router.post('/',login );

    return router;
  }
}