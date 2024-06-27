import { Router } from 'express';
import { loginMedico, loginPaciente, loginPersonalMedico } from './controller';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();
    
    router.post('/paciente',loginPaciente );
    router.post('/medico',loginMedico );
    router.post('/personalMedico',loginPersonalMedico );

    return router;
  }
}