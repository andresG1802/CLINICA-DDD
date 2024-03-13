import { CreateMedicoDto, UpdateMedicoDto } from "../../dtos";
import { MedicoEntity } from "../../entities/medico.entity";
import { MedicoRepository } from "../../repositories/medico.repository";

export interface DeleteMedicoUseCase{
    execute(id:number):Promise<MedicoEntity>
}

export class DeleteMedico implements DeleteMedicoUseCase{
    constructor(
        private readonly repository: MedicoRepository,
    ){}
    execute(id:number): Promise<MedicoEntity> {
        return this.repository.deleteById(id);
    }
}