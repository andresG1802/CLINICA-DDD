import { CreatePacienteDto, UpdatePacienteDto } from "../dtos";
import { PacienteEntity } from "../entities/paciente.entity";

export abstract class PacienteDatasource {
    abstract create(createPacienteDto:CreatePacienteDto): Promise<PacienteEntity>;
    abstract getAll(): Promise<PacienteEntity[]>;
    abstract findById(id:number): Promise<PacienteEntity>;
    abstract updateById(updatePacienteDto:UpdatePacienteDto): Promise<PacienteEntity>;
    abstract deleteById(id:number):Promise<PacienteEntity>;
}