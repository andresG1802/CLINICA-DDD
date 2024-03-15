import { CreatePersonalMedicoDto, UpdatePersonalMedicoDto } from "../dtos";
import { PersonalMedicoEntity } from "../entities/personalMedico.entity";

export abstract class PersonalMedicoRepository {
    abstract create(createPersonalMedicoDto:CreatePersonalMedicoDto): Promise<PersonalMedicoEntity>;
    abstract getAll(): Promise<PersonalMedicoEntity[]>;
    abstract findById(id:number): Promise<PersonalMedicoEntity>;
    abstract updateById(updatePersonalMedicoDto:UpdatePersonalMedicoDto): Promise<PersonalMedicoEntity>;
    abstract deleteById(id:number):Promise<PersonalMedicoEntity>;
}

