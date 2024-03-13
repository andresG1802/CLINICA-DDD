import { CreateMedicoDto, MedicoDatasource, MedicoEntity, MedicoRepository, UpdateMedicoDto } from "../../domain";

export class MedicoRepositoryImpl implements MedicoRepository{
    constructor(
        private readonly datasource:MedicoDatasource
    ){}
    
    create(createMedicoDto: CreateMedicoDto): Promise<MedicoEntity> {
        return this.datasource.create(createMedicoDto)
    }
    getAll(): Promise<MedicoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<MedicoEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateMedicoDto: UpdateMedicoDto): Promise<MedicoEntity> {
        return this.datasource.updateById(updateMedicoDto)
    }
    deleteById(id: number): Promise<MedicoEntity> {
        return this.datasource.deleteById(id);
    }

}