import { Router } from 'express';
import { TratamientosController } from './controller';
import { TratamientoDatasourceImpl } from '../../infrastructure/datasource/tratamiento.data.impl';
import { TratamientoRepositoryImpl } from '../../infrastructure/repositories/tratamiento.repository.impl';


export class TratamientoRoutes {


    static get routes(): Router 
    {
        const router = Router();

        const datasource = new TratamientoDatasourceImpl();

        const tratamientoRepository = new TratamientoRepositoryImpl(datasource);

        const tratamientoController = new TratamientosController(tratamientoRepository);

        router.get('/', tratamientoController.getTratamientos );
        router.get('/:id', tratamientoController.getTratamientoById );
        
        router.post('/', tratamientoController.createTratamiento );
        router.put('/:id', tratamientoController.updateTratamiento );
        router.delete('/:id', tratamientoController.deleteTratamiento );


        return router;
    }
}