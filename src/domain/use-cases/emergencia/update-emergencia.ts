import { CreateEmergenciaDto, UpdateEmergenciaDto } from "../../dtos";
import { EmergenciaEntity } from "../../entities/emergencia.entity";
import { EmergenciaRepository } from "../../repositories/emergencia.repository";

export interface UpdateEmergenciaUseCase{
    execute(dto:UpdateEmergenciaDto):Promise<EmergenciaEntity>
}

export class UpdateEmergencia implements UpdateEmergenciaUseCase{
    constructor(
        private readonly repository: EmergenciaRepository,
    ){}
    execute(dto: UpdateEmergenciaDto): Promise<EmergenciaEntity> {
        return this.repository.updateById(dto);
    }
}