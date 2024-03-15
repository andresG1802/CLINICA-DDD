import { CreatePersonalMedicoDto, UpdatePersonalMedicoDto } from "../../dtos";
import { PersonalMedicoEntity } from "../../entities/personalMedico.entity";
import { PersonalMedicoRepository } from "../../repositories/personalMedico.repository";

export interface UpdatePersonalMedicoUseCase{
    execute(dto:UpdatePersonalMedicoDto):Promise<PersonalMedicoEntity>
}

export class UpdatePersonalMedico implements UpdatePersonalMedicoUseCase{
    constructor(
        private readonly repository: PersonalMedicoRepository,
    ){}
    execute(dto: UpdatePersonalMedicoDto): Promise<PersonalMedicoEntity> {
        return this.repository.updateById(dto);
    }
}