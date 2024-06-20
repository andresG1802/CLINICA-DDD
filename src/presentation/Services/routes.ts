import { Router } from 'express';
import { getTratamientosByPacienteId } from './controller';

export class ServicesRoutes {

  static get routes(): Router {

    const router = Router();
    
    router.get('/:id',getTratamientosByPacienteId);

    return router;
  }
}