import { PacienteEntity } from "../../entities/paciente.entity";
import { PacienteRepository } from "../../repositories/paciente.repository";

export interface GetPacientesUseCase{
    execute():Promise<PacienteEntity[]>
}

export class GetPacientes implements GetPacientesUseCase{
    constructor(
        private readonly repository: PacienteRepository,
    ){}
    execute(): Promise<PacienteEntity[]> {
        return this.repository.getAll();
    }
}