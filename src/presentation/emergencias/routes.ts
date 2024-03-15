import { Router } from 'express';
import { EmergenciasController } from './controller';
import { EmergenciaDatasourceImpl } from '../../infrastructure/datasource/emergencia.data.impl';
import { EmergenciaRepositoryImpl } from '../../infrastructure/repositories/emergencia.repository.impl';


export class EmergenciaRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new EmergenciaDatasourceImpl();

    const emergenciaRepository = new EmergenciaRepositoryImpl(datasource);

    const emergenciaController = new EmergenciasController(emergenciaRepository);

    router.get('/', emergenciaController.getEmergencias );
    router.get('/:id', emergenciaController.getEmergenciaById );
    
    router.post('/', emergenciaController.createEmergencia );
    router.put('/:id', emergenciaController.updateEmergencia );
    router.delete('/:id', emergenciaController.deleteEmergencia );


    return router;
  }


}