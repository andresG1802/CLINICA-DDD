import { CreateEmergenciaDto } from "../../dtos";
import { EmergenciaEntity } from "../../entities/emergencia.entity";
import { EmergenciaRepository } from "../../repositories/emergencia.repository";

export interface CreateEmergenciaUseCase{
    execute(dto:CreateEmergenciaDto):Promise<EmergenciaEntity>
}

export class CreateEmergencia implements CreateEmergenciaUseCase{
    constructor(
        private readonly repository: EmergenciaRepository,
    ){}
    execute(dto: CreateEmergenciaDto): Promise<EmergenciaEntity> {
        return this.repository.create(dto);
    }
}