import { TratamientoEntity } from "../../entities/tratamiento.entity";
import { TratamientoRepository } from "../../repositories/tratamiento.repository";

export interface GetTratamientoUseCase{
    execute(id:number):Promise<TratamientoEntity>
}

export class GetTratamiento implements GetTratamientoUseCase{
    constructor(
        private readonly repository: TratamientoRepository,
    ){}
    execute(id:number): Promise<TratamientoEntity> {
        return this.repository.findById(id);
    }
}