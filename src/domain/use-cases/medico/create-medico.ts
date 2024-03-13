import { CreateMedicoDto } from "../../dtos";
import { MedicoEntity } from "../../entities/medico.entity";
import { MedicoRepository } from "../../repositories/medico.repository";

export interface CreateMedicoUseCase{
    execute(dto:CreateMedicoDto):Promise<MedicoEntity>
}

export class CreateMedico implements CreateMedicoUseCase{
    constructor(
        private readonly repository: MedicoRepository,
    ){}
    execute(dto: CreateMedicoDto): Promise<MedicoEntity> {
        return this.repository.create(dto);
    }
}