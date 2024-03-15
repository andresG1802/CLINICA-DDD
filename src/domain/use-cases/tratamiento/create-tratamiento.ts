import { CreateTratamientoDto } from "../../dtos";
import { TratamientoEntity } from "../../entities/tratamiento.entity";
import { TratamientoRepository } from "../../repositories/tratamiento.repository";

export interface CreateTratamientoUseCase{
    execute(dto:CreateTratamientoDto):Promise<TratamientoEntity>
}

export class CreateTratamiento implements CreateTratamientoUseCase{
    constructor(
        private readonly repository: TratamientoRepository,
    ){}
    execute(dto: CreateTratamientoDto): Promise<TratamientoEntity> {
        return this.repository.create(dto);
    }
}