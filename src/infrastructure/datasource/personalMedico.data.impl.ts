import { prisma } from "../../data/postgres";
import { CreatePersonalMedicoDto, PersonalMedicoDatasource, PersonalMedicoEntity, UpdatePersonalMedicoDto } from "../../domain";

export class PersonalMedicoDatasourceImpl implements PersonalMedicoDatasource{
    async create(createPersonalMedicoDto: CreatePersonalMedicoDto): Promise<PersonalMedicoEntity> {
        const personalMedico = await prisma.personalmedico.create({
            data:createPersonalMedicoDto!
        });

        return PersonalMedicoEntity.fromObject(personalMedico);
    }
    async getAll(): Promise<PersonalMedicoEntity[]> {
        const personalMedicos = await prisma.personalmedico.findMany();

        return personalMedicos.map(personalMedico=>PersonalMedicoEntity.fromObject(personalMedico));
    }
    async findById(id: number): Promise<PersonalMedicoEntity> {
        const personalMedico = await prisma.personalmedico.findFirst({
            where:{ id }
        });

        if( !personalMedico) throw `Todo with id ${ id } not found`;

        //El fromObject no es metodo del mismo nodejs 
        //Se creo en
        return PersonalMedicoEntity.fromObject(personalMedico);
    }
    async updateById(updatePersonalMedicoDto: UpdatePersonalMedicoDto): Promise<PersonalMedicoEntity> {
        const personalMedico = await this.findById( updatePersonalMedicoDto.id);
        const updatedPersonalMedico = await prisma.personalmedico.update({
            where: {id: updatePersonalMedicoDto.id},
            data: updatePersonalMedicoDto!.values
        });

        return PersonalMedicoEntity.fromObject((updatePersonalMedicoDto));
    }
    async deleteById(id: number): Promise<PersonalMedicoEntity> {
        await this.findById(id);
        
        const deleted = await prisma.personalmedico.delete({
            where:{id}
        });

        return PersonalMedicoEntity.fromObject(deleted);
    }
}