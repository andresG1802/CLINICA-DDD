import { CreateEmergenciaDto, UpdateEmergenciaDto } from "../dtos";
import { EmergenciaEntity } from "../entities/emergencia.entity";

export abstract class EmergenciaRepository {
    abstract create(createEmergenciaDto:CreateEmergenciaDto): Promise<EmergenciaEntity>;
    abstract getAll(): Promise<EmergenciaEntity[]>;
    abstract findById(id:number): Promise<EmergenciaEntity>;
    abstract updateById(updateEmergenciaDto:UpdateEmergenciaDto): Promise<EmergenciaEntity>;
    abstract deleteById(id:number):Promise<EmergenciaEntity>;
}