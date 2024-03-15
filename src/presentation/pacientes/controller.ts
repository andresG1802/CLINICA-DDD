import { Request, Response} from "express";
import { prisma } from "../../data/postgres";
import { CreatePacienteDto, UpdatePacienteDto } from "../../domain/dtos";
import { CreatePaciente, DeletePaciente, GetPaciente, GetPacientes, PacienteRepository, UpdatePaciente } from "../../domain";

export class PacientesController{

    //* DI
    constructor(
        private readonly PacienteRepository: PacienteRepository,
    ){}
    
    //Lo raro es que express recomienda:
    //no utilizar async 
    public getPacientes = (req:Request,res:Response) => {
        new GetPacientes(this.PacienteRepository)
            .execute()
            .then(pacientes => res.json(pacientes))
            .catch(error => res.status(400).json({error}));
    };
    
    public getPacienteById = (req:Request,res:Response)=>{
        const id = +req.params.id;
        
        new GetPaciente(this.PacienteRepository)
            .execute(id)
            .then(paciente => res.json(paciente))
            .catch(error=>res.status(400).json({error}))

    }

    public createPaciente = (req:Request, res:Response)=>{
        const [error,createPacienteDto] = CreatePacienteDto.create(req.body);
        if(error) return res.status(400).json({error});

        new CreatePaciente(this.PacienteRepository)
            .execute( createPacienteDto! )
            .then(paciente => res.json(paciente))
            .catch(error=> res.status(400).json({error}));        
        
    
    };

    public updatePaciente = (req: Request, res:Response )=>{

        const id= +req.params.id;
        const [error,updatePacienteDto] = UpdatePacienteDto.create({...req.body,id});
        if(error) return res.status(400).json({error});

        new UpdatePaciente(this.PacienteRepository)
            .execute(updatePacienteDto!)
            .then(paciente=>res.json(paciente))
            .catch(error=>res.status(400).json({error}));
    };

    public deletePaciente = (req : Request , res:Response)=>{
        
        const id= +req.params.id;
        
        new DeletePaciente(this.PacienteRepository)
            .execute(id)
            .then(paciente=>res.json(paciente))
            .catch(error=>res.status(400).json({error}))   
    };
}