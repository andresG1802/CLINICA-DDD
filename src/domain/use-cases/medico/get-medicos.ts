import { MedicoEntity } from "../../entities/medico.entity";
import { MedicoRepository } from "../../repositories/medico.repository";

export interface GetMedicosUseCase{
    execute():Promise<MedicoEntity[]>
}

export class GetMedicos implements GetMedicosUseCase{
    constructor(
        private readonly repository: MedicoRepository,
    ){}
    execute(): Promise<MedicoEntity[]> {
        return this.repository.getAll();
    }
}