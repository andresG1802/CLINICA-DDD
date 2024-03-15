import { PersonalMedicoEntity } from "../../entities/personalMedico.entity";
import { PersonalMedicoRepository } from "../../repositories/personalMedico.repository";

export interface DeletePersonalMedicoUseCase{
    execute(id:number):Promise<PersonalMedicoEntity>
}

export class DeletePersonalMedico implements DeletePersonalMedicoUseCase{
    constructor(
        private readonly repository: PersonalMedicoRepository,
    ){}
    execute(id:number): Promise<PersonalMedicoEntity> {
        return this.repository.deleteById(id);
    }
}