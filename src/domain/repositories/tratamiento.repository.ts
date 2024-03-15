import { CreateTratamientoDto, UpdateTratamientoDto } from "../dtos";
import { TratamientoEntity } from "../entities/tratamiento.entity";

export abstract class TratamientoRepository {
    abstract create(createTratamientoDto:CreateTratamientoDto): Promise<TratamientoEntity>;
    abstract getAll(): Promise<TratamientoEntity[]>;
    abstract findById(id:number): Promise<TratamientoEntity>;
    abstract updateById(updateTratamientoDto:UpdateTratamientoDto): Promise<TratamientoEntity>;
    abstract deleteById(id:number):Promise<TratamientoEntity>;
}