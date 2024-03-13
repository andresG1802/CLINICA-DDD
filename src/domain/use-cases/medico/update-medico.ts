import { CreateMedicoDto, UpdateMedicoDto } from "../../dtos";
import { MedicoEntity } from "../../entities/medico.entity";
import { MedicoRepository } from "../../repositories/medico.repository";

export interface UpdateMedicoUseCase{
    execute(dto:UpdateMedicoDto):Promise<MedicoEntity>
}

export class UpdateMedico implements UpdateMedicoUseCase{
    constructor(
        private readonly repository: MedicoRepository,
    ){}
    execute(dto: UpdateMedicoDto): Promise<MedicoEntity> {
        return this.repository.updateById(dto);
    }
}