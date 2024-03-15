import { CreateTratamientoDto, TratamientoDatasource, TratamientoEntity, TratamientoRepository, UpdateTratamientoDto } from "../../domain";

export class TratamientoRepositoryImpl implements TratamientoRepository{
    constructor(
        private readonly datasource:TratamientoDatasource
    ){}
    
    create(createTratamientoDto: CreateTratamientoDto): Promise<TratamientoEntity> {
        return this.datasource.create(createTratamientoDto)
    }
    getAll(): Promise<TratamientoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<TratamientoEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateTratamientoDto: UpdateTratamientoDto): Promise<TratamientoEntity> {
        return this.datasource.updateById(updateTratamientoDto)
    }
    deleteById(id: number): Promise<TratamientoEntity> {
        return this.datasource.deleteById(id);
    }

}