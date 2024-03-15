import { prisma } from "../../data/postgres";
import { CreatePacienteDto, PacienteDatasource, PacienteEntity, UpdatePacienteDto } from "../../domain";
export class PacienteDatasourceImpl implements PacienteDatasource{
    async create(createPacienteDto: CreatePacienteDto): Promise<PacienteEntity> {
        const paciente = await prisma.pacientes.create({
            data:createPacienteDto!
        });

        return PacienteEntity.fromObject(paciente);
    }
    async getAll(): Promise<PacienteEntity[]> {
        const pacientes = await prisma.pacientes.findMany();

        return pacientes.map(paciente=>PacienteEntity.fromObject(paciente));
    }
    async findById(id: number): Promise<PacienteEntity> {
        const paciente = await prisma.pacientes.findFirst({
            where:{ id }
        });

        if( !paciente) throw `Todo with id ${ id } not found`;

        //El fromObject no es metodo del mismo nodejs 
        //Se creo en
        return PacienteEntity.fromObject(paciente);
    }
    async updateById(updatePacienteDto: UpdatePacienteDto): Promise<PacienteEntity> {
        const paciente = await this.findById( updatePacienteDto.id);
        const updatedPaciente = await prisma.pacientes.update({
            where: {id: updatePacienteDto.id},
            data: updatePacienteDto!.values
        });

        return PacienteEntity.fromObject((updatePacienteDto));
    }
    async deleteById(id: number): Promise<PacienteEntity> {
        await this.findById(id);
        
        const deleted = await prisma.pacientes.delete({
            where:{id}
        });

        return PacienteEntity.fromObject(deleted);
    }
}