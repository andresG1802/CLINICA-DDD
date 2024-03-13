import { CreateMedicoDto, UpdateMedicoDto } from "../dtos";
import { MedicoEntity } from "../entities/medico.entity";

export abstract class MedicoRepository {
    abstract create(createMedicoDto:CreateMedicoDto): Promise<MedicoEntity>;
    abstract getAll(): Promise<MedicoEntity[]>;
    abstract findById(id:number): Promise<MedicoEntity>;
    abstract updateById(updateMedicoDto:UpdateMedicoDto): Promise<MedicoEntity>;
    abstract deleteById(id:number):Promise<MedicoEntity>;
}

