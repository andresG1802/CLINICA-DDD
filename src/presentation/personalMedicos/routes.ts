import { Router } from 'express';
import { PersonalMedicosController } from './controller';
import { PersonalMedicoDatasourceImpl } from '../../infrastructure/datasource/personalMedico.data.impl';
import { PersonalMedicoRepositoryImpl } from '../../infrastructure/repositories/personalMedico.repository.impl';


export class PersonalMedicoRoutes {


    static get routes(): Router 
    {
        const router = Router();

        const datasource = new PersonalMedicoDatasourceImpl();

        const personalMedicoRepository = new PersonalMedicoRepositoryImpl(datasource);

        const personalMedicoController = new PersonalMedicosController(personalMedicoRepository);

        router.get('/', personalMedicoController.getPersonalMedicos );
        router.get('/:id', personalMedicoController.getPersonalMedicoById );
        
        router.post('/', personalMedicoController.createPersonalMedico );
        router.put('/:id', personalMedicoController.updatePersonalMedico );
        router.delete('/:id', personalMedicoController.deletePersonalMedico );


        return router;
    }
}