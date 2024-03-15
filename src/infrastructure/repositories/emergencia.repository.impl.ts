import { CreateEmergenciaDto, EmergenciaDatasource, EmergenciaEntity, EmergenciaRepository, UpdateEmergenciaDto } from "../../domain";

export class EmergenciaRepositoryImpl implements EmergenciaRepository{
    constructor(
        private readonly datasource:EmergenciaDatasource
    ){}
    
    create(createEmergenciaDto: CreateEmergenciaDto): Promise<EmergenciaEntity> {
        return this.datasource.create(createEmergenciaDto)
    }
    getAll(): Promise<EmergenciaEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<EmergenciaEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateEmergenciaDto: UpdateEmergenciaDto): Promise<EmergenciaEntity> {
        return this.datasource.updateById(updateEmergenciaDto)
    }
    deleteById(id: number): Promise<EmergenciaEntity> {
        return this.datasource.deleteById(id);
    }

}