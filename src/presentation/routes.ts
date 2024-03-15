import { Router } from 'express';

import { MedicoRoutes } from './medicos/routes';
import { PacienteRoutes } from './pacientes/routes';
import { PersonalMedicoRoutes } from './personalMedicos/routes';
import { EmergenciaRoutes } from './emergencias/routes';
import { TratamientoRoutes } from './tratamientos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/medicos', MedicoRoutes.routes );
    router.use('/api/pacientes', PacienteRoutes.routes );
    router.use('/api/personalMedicos', PersonalMedicoRoutes.routes );
    router.use('/api/emergencias',EmergenciaRoutes.routes);
    router.use('/api/tratamientos',TratamientoRoutes.routes);
  
    
    return router;
  }


}

