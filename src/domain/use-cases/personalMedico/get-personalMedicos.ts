import { PersonalMedicoEntity } from "../../entities/personalMedico.entity";
import { PersonalMedicoRepository } from "../../repositories/personalMedico.repository";

export interface GetPersonalMedicosUseCase{
    execute():Promise<PersonalMedicoEntity[]>
}

export class GetPersonalMedicos implements GetPersonalMedicosUseCase{
    constructor(
        private readonly repository: PersonalMedicoRepository,
    ){}
    execute(): Promise<PersonalMedicoEntity[]> {
        return this.repository.getAll();
    }
}