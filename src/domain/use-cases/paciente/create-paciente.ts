import { CreatePacienteDto } from "../../dtos";
import { PacienteEntity } from "../../entities/paciente.entity";
import { PacienteRepository } from "../../repositories/paciente.repository";

export interface CreatePacienteUseCase{
    execute(dto:CreatePacienteDto):Promise<PacienteEntity>
}

export class CreatePaciente implements CreatePacienteUseCase{
    constructor(
        private readonly repository: PacienteRepository,
    ){}
    execute(dto: CreatePacienteDto): Promise<PacienteEntity> {
        return this.repository.create(dto);
    }
}