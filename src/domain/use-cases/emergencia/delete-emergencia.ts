import { EmergenciaEntity } from "../../entities/emergencia.entity";
import { EmergenciaRepository } from "../../repositories/emergencia.repository";

export interface DeleteEmergenciaUseCase{
    execute(id:number):Promise<EmergenciaEntity>
}

export class DeleteEmergencia implements DeleteEmergenciaUseCase{
    constructor(
        private readonly repository: EmergenciaRepository,
    ){}
    execute(id:number): Promise<EmergenciaEntity> {
        return this.repository.deleteById(id);
    }
}