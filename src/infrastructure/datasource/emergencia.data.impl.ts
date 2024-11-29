import { prisma } from "../../data/postgres";
import { CreateEmergenciaDto, EmergenciaDatasource, EmergenciaEntity, UpdateEmergenciaDto } from "../../domain";

export class EmergenciaDatasourceImpl implements EmergenciaDatasource{
    async create(createEmergenciaDto: CreateEmergenciaDto): Promise<EmergenciaEntity> {
        const Emergencia = await prisma.emergencias.create({
            data:createEmergenciaDto!
        });

        return EmergenciaEntity.fromObject(Emergencia);
    } 
    async getAll(): Promise<EmergenciaEntity[]> {
        const Emergencias = await prisma.emergencias.findMany();

        return Emergencias.map(Emergencia=>EmergenciaEntity.fromObject(Emergencia));
    }
    async findById(id: number): Promise<EmergenciaEntity> {
        const Emergencia = await prisma.emergencias.findFirst({
            where:{ id }
        });

        if( !Emergencia) throw `Todo with id ${ id } not found`;

        //El fromObject no es metodo del mismo nodejs 
        //Se creo en
        return EmergenciaEntity.fromObject(Emergencia);
    }
    async updateById(updateEmergenciaDto: UpdateEmergenciaDto): Promise<EmergenciaEntity> {
        const Emergencia = await this.findById( updateEmergenciaDto.id);
        const updatedEmergencia = await prisma.emergencias.update({
            where: {id: updateEmergenciaDto.id},
            data: updateEmergenciaDto!.values
        });

        return EmergenciaEntity.fromObject((updateEmergenciaDto));
    }
    async deleteById(id: number): Promise<EmergenciaEntity> {
        await this.findById(id);
        
        const deleted = await prisma.emergencias.delete({
            where:{id}
        });

        return EmergenciaEntity.fromObject(deleted);
    }
}