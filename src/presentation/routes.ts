import { Router } from 'express';

import { MedicoRoutes } from './medicos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/medicos', MedicoRoutes.routes );
    



    return router;
  }


}

