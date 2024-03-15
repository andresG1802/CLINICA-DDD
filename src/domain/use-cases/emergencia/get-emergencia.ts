import { EmergenciaEntity } from "../../entities/emergencia.entity";
import { EmergenciaRepository } from "../../repositories/emergencia.repository";

export interface GetEmergenciaUseCase{
    execute(id:number):Promise<EmergenciaEntity>
}

export class GetEmergencia implements GetEmergenciaUseCase{
    constructor(
        private readonly repository: EmergenciaRepository,
    ){}
    execute(id:number): Promise<EmergenciaEntity> {
        return this.repository.findById(id);
    }
}