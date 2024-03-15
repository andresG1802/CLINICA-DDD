import { PersonalMedicoEntity } from "../../entities/personalMedico.entity";
import { PersonalMedicoRepository } from "../../repositories/personalMedico.repository";

export interface GetPersonalMedicoUseCase{
    execute(id:number):Promise<PersonalMedicoEntity>
}

export class GetPersonalMedico implements GetPersonalMedicoUseCase{
    constructor(
        private readonly repository: PersonalMedicoRepository,
    ){}
    execute(id:number): Promise<PersonalMedicoEntity> {
        return this.repository.findById(id);
    }
}