import { EmergenciaEntity } from "../../entities/emergencia.entity";
import { EmergenciaRepository } from "../../repositories/emergencia.repository";

export interface GetEmergenciasUseCase{
    execute():Promise<EmergenciaEntity[]>
}

export class GetEmergencias implements GetEmergenciasUseCase{
    constructor(
        private readonly repository: EmergenciaRepository,
    ){}
    execute(): Promise<EmergenciaEntity[]> {
        return this.repository.getAll();
    }
}