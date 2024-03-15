import { CreateTratamientoDto, UpdateTratamientoDto } from "../../dtos";
import { TratamientoEntity } from "../../entities/tratamiento.entity";
import { TratamientoRepository } from "../../repositories/tratamiento.repository";

export interface DeleteTratamientoUseCase{
    execute(id:number):Promise<TratamientoEntity>
}

export class DeleteTratamiento implements DeleteTratamientoUseCase{
    constructor(
        private readonly repository: TratamientoRepository,
    ){}
    execute(id:number): Promise<TratamientoEntity> {
        return this.repository.deleteById(id);
    }
}