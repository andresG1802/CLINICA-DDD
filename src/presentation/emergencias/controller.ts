import { Request, Response} from "express";
import { prisma } from "../../data/postgres";
import { CreateEmergenciaDto, UpdateEmergenciaDto } from "../../domain/dtos";
import { CreateEmergencia, DeleteEmergencia, GetEmergencia, GetEmergencias, EmergenciaRepository, UpdateEmergencia } from "../../domain";

export class EmergenciasController{

    //* DI
    constructor(
        private readonly emergenciaRepository: EmergenciaRepository,
    ){}
    
    //Lo raro es que express recomienda:
    //no utilizar async 
    public getEmergencias = (req:Request,res:Response) => {
        new GetEmergencias(this.emergenciaRepository)
            .execute()
            .then(emergencias => res.json(emergencias))
            .catch(error => res.status(400).json({error}));
    };
    
    public getEmergenciaById = (req:Request,res:Response)=>{
        const id = +req.params.id;
        
        new GetEmergencia(this.emergenciaRepository)
            .execute(id)
            .then(emergencia => res.json(emergencia))
            .catch(error=>res.status(400).json({error}))

    }

    public createEmergencia = (req:Request, res:Response)=>{
        const [error,createEmergenciaDto] = CreateEmergenciaDto.create(req.body);
        if(error) return res.status(400).json({error});

        new CreateEmergencia(this.emergenciaRepository)
            .execute( createEmergenciaDto! )
            .then(emergencia => res.json(emergencia))
            .catch(error=> res.status(400).json({error}));        
        
    
    };

    public updateEmergencia = (req: Request, res:Response )=>{

        const id= +req.params.id;
        const [error,updateEmergenciaDto] = UpdateEmergenciaDto.create({...req.body,id});
        if(error) return res.status(400).json({error});

        new UpdateEmergencia(this.emergenciaRepository)
            .execute(updateEmergenciaDto!)
            .then(emergencia=>res.json(emergencia))
            .catch(error=>res.status(400).json({error}));
    };

    public deleteEmergencia = (req : Request , res:Response)=>{
        
        const id= +req.params.id;
        
        new DeleteEmergencia(this.emergenciaRepository)
            .execute(id)
            .then(emergencia=>res.json(emergencia))
            .catch(error=>res.status(400).json({error}))   
    };
}