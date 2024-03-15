import { TratamientoEntity } from "../../entities/tratamiento.entity";
import { TratamientoRepository } from "../../repositories/tratamiento.repository";

export interface GetTratamientosUseCase{
    execute():Promise<TratamientoEntity[]>
}

export class GetTratamientos implements GetTratamientosUseCase{
    constructor(
        private readonly repository: TratamientoRepository,
    ){}
    execute(): Promise<TratamientoEntity[]> {
        return this.repository.getAll();
    }
}