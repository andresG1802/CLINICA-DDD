import { CreatePersonalMedicoDto } from "../../dtos";
import { PersonalMedicoEntity } from "../../entities/personalMedico.entity";
import { PersonalMedicoRepository } from "../../repositories/personalMedico.repository";

export interface CreatePersonalMedicoUseCase{
    execute(dto:CreatePersonalMedicoDto):Promise<PersonalMedicoEntity>
}

export class CreatePersonalMedico implements CreatePersonalMedicoUseCase{
    constructor(
        private readonly repository: PersonalMedicoRepository,
    ){}
    execute(dto: CreatePersonalMedicoDto): Promise<PersonalMedicoEntity> {
        return this.repository.create(dto);
    }
}