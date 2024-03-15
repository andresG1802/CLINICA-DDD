import { Router } from 'express';

import { MedicoRoutes } from './medicos/routes';
import { PacienteRoutes } from './pacientes/routes';
import { PersonalMedicoRoutes } from './personalMedicos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/medicos', MedicoRoutes.routes );
    router.use('/api/pacientes', PacienteRoutes.routes );
    router.use('/api/personalMedicos', PersonalMedicoRoutes.routes );



    return router;
  }


}

