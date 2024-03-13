import { MedicoEntity } from "../../entities/medico.entity";
import { MedicoRepository } from "../../repositories/medico.repository";

export interface GetMedicoUseCase{
    execute(id:number):Promise<MedicoEntity>
}

export class GetMedico implements GetMedicoUseCase{
    constructor(
        private readonly repository: MedicoRepository,
    ){}
    execute(id:number): Promise<MedicoEntity> {
        return this.repository.findById(id);
    }
}