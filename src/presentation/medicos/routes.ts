import { Router } from 'express';
import { MedicosController } from './controller';
import { MedicoDatasourceImpl } from '../../infrastructure/datasource/medico.data.impl';
import { MedicoRepositoryImpl } from '../../infrastructure/repositories/medico.repository.impl';


export class MedicoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new MedicoDatasourceImpl();

    const medicoRepository = new MedicoRepositoryImpl(datasource);

    const medicoController = new MedicosController(medicoRepository);

    router.get('/', medicoController.getMedicos );
    router.get('/:id', medicoController.getMedicoById );
    
    router.post('/', medicoController.createMedico );
    router.put('/:id', medicoController.updateMedico );
    router.delete('/:id', medicoController.deleteMedico );


    return router;
  }
}

