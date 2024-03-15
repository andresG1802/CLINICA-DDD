import { prisma } from "../../data/postgres";
import { CreateTratamientoDto, TratamientoDatasource, TratamientoEntity, UpdateTratamientoDto } from "../../domain";

export class TratamientoDatasourceImpl implements TratamientoDatasource{
    async create(createTratamientoDto: CreateTratamientoDto): Promise<TratamientoEntity> {
        const tratamiento = await prisma.tratamientos.create({
            data:createTratamientoDto!
        });

        return TratamientoEntity.fromObject(tratamiento);
    }
    async getAll(): Promise<TratamientoEntity[]> {
        const Tratamientos = await prisma.tratamientos.findMany();

        return Tratamientos.map(tratamiento=>TratamientoEntity.fromObject(tratamiento));
    }
    async findById(id: number): Promise<TratamientoEntity> {
        const tratamiento = await prisma.tratamientos.findFirst({
            where:{ id }
        });

        if( !tratamiento) throw `Todo with id ${ id } not found`;

        //El fromObject no es metodo del mismo nodejs 
        //Se creo en
        return TratamientoEntity.fromObject(tratamiento);
    }
    async updateById(updateTratamientoDto: UpdateTratamientoDto): Promise<TratamientoEntity> {
        const tratamiento = await this.findById( updateTratamientoDto.id);
        const updatedTratamiento = await prisma.tratamientos.update({
            where: {id: updateTratamientoDto.id},
            data: updateTratamientoDto!.values
        });

        return TratamientoEntity.fromObject((updateTratamientoDto));
    }
    async deleteById(id: number): Promise<TratamientoEntity> {
        await this.findById(id);
        
        const deleted = await prisma.tratamientos.delete({
            where:{id}
        });

        return TratamientoEntity.fromObject(deleted);
    }
}