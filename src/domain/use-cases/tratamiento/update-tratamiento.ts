import { CreateTratamientoDto, UpdateTratamientoDto } from "../../dtos";
import { TratamientoEntity } from "../../entities/tratamiento.entity";
import { TratamientoRepository } from "../../repositories/tratamiento.repository";

export interface UpdateTratamientoUseCase{
    execute(dto:UpdateTratamientoDto):Promise<TratamientoEntity>
}

export class UpdateTratamiento implements UpdateTratamientoUseCase{
    constructor(
        private readonly repository: TratamientoRepository,
    ){}
    execute(dto: UpdateTratamientoDto): Promise<TratamientoEntity> {
        return this.repository.updateById(dto);
    }
}