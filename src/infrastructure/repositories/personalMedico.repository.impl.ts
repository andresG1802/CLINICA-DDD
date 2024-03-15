import { CreatePersonalMedicoDto, PersonalMedicoDatasource, PersonalMedicoEntity, 
    PersonalMedicoRepository, UpdatePersonalMedicoDto } from "../../domain";

export class PersonalMedicoRepositoryImpl implements PersonalMedicoRepository{
    constructor(
        private readonly datasource:PersonalMedicoDatasource
    ){}
    
    create(createPersonalMedicoDto: CreatePersonalMedicoDto): Promise<PersonalMedicoEntity> {
        return this.datasource.create(createPersonalMedicoDto)
    }
    getAll(): Promise<PersonalMedicoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<PersonalMedicoEntity> {
        return this.datasource.findById(id);
    }
    updateById(updatePersonalMedicoDto: UpdatePersonalMedicoDto): Promise<PersonalMedicoEntity> {
        return this.datasource.updateById(updatePersonalMedicoDto)
    }
    deleteById(id: number): Promise<PersonalMedicoEntity> {
        return this.datasource.deleteById(id);
    }

}