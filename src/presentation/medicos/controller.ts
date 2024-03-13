import { Request, Response} from "express";
import { prisma } from "../../data/postgres";
import { CreateMedicoDto, UpdateMedicoDto } from "../../domain/dtos";
import { CreateMedico, DeleteMedico, GetMedico, GetMedicos, MedicoRepository, UpdateMedico } from "../../domain";

export class MedicosController{

    //* DI
    constructor(
        private readonly medicoRepository: MedicoRepository,
    ){}
    
    //Lo raro es que express recomienda:
    //no utilizar async 
    public getMedicos = (req:Request,res:Response) => {
        new GetMedicos(this.medicoRepository)
            .execute()
            .then(medicos => res.json(medicos))
            .catch(error => res.status(400).json({error}));
    };
    
    public getMedicoById = (req:Request,res:Response)=>{
        const id = +req.params.id;
        
        new GetMedico(this.medicoRepository)
            .execute(id)
            .then(medico => res.json(medico))
            .catch(error=>res.status(400).json({error}))

    }

    public createMedico = (req:Request, res:Response)=>{
        const [error,createMedicoDto] = CreateMedicoDto.create(req.body);
        if(error) return res.status(400).json({error});

        new CreateMedico(this.medicoRepository)
            .execute( createMedicoDto! )
            .then(medico => res.json(medico))
            .catch(error=> res.status(400).json({error}));        
        
    
    };

    public updateMedico = (req: Request, res:Response )=>{

        const id= +req.params.id;
        const [error,updateMedicoDto] = UpdateMedicoDto.create({...req.body,id});
        if(error) return res.status(400).json({error});

        new UpdateMedico(this.medicoRepository)
            .execute(updateMedicoDto!)
            .then(medico=>res.json(medico))
            .catch(error=>res.status(400).json({error}));
    };

    public deleteMedico = (req : Request , res:Response)=>{
        
        const id= +req.params.id;
        
        new DeleteMedico(this.medicoRepository)
            .execute(id)
            .then(medico=>res.json(medico))
            .catch(error=>res.status(400).json({error}))   
    };
}