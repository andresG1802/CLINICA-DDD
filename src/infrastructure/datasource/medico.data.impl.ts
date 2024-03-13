import { prisma } from "../../data/postgres";
import { CreateMedicoDto, MedicoDatasource, MedicoEntity, UpdateMedicoDto } from "../../domain";

export class MedicoDatasourceImpl implements MedicoDatasource{
    async create(createMedicoDto: CreateMedicoDto): Promise<MedicoEntity> {
        const medico = await prisma.medico.create({
            data:createMedicoDto!
        });

        return MedicoEntity.fromObject(medico);
    }
    async getAll(): Promise<MedicoEntity[]> {
        const medicos = await prisma.medico.findMany();

        return medicos.map(medico=>MedicoEntity.fromObject(medico));
    }
    async findById(id: number): Promise<MedicoEntity> {
        const medico = await prisma.medico.findFirst({
            where:{ id }
        });

        if( !medico) throw `Todo with id ${ id } not found`;

        //El fromObject no es metodo del mismo nodejs 
        //Se creo en
        return MedicoEntity.fromObject(medico);
    }
    async updateById(updateMedicoDto: UpdateMedicoDto): Promise<MedicoEntity> {
        const medico = await this.findById( updateMedicoDto.id);
        const updatedMedico = await prisma.medico.update({
            where: {id: updateMedicoDto.id},
            data: updateMedicoDto!.values
        });

        return MedicoEntity.fromObject((updateMedicoDto));
    }
    async deleteById(id: number): Promise<MedicoEntity> {
        await this.findById(id);
        
        const deleted = await prisma.medico.delete({
            where:{id}
        });

        return MedicoEntity.fromObject(deleted);
    }
}