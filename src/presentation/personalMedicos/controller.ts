import { Request, Response} from "express";
import { CreatePersonalMedicoDto, UpdatePersonalMedicoDto } from "../../domain/dtos";
import { CreatePersonalMedico, DeletePersonalMedico, GetPersonalMedico, GetPersonalMedicos, PersonalMedicoRepository, UpdatePersonalMedico } from "../../domain";

export class PersonalMedicosController{

    //* DI
    constructor(
        private readonly personalMedicoRepository: PersonalMedicoRepository,
    ){}
    
    //Lo raro es que express recomienda:
    //no utilizar async 
    public getPersonalMedicos = (req:Request,res:Response) => {
        new GetPersonalMedicos(this.personalMedicoRepository)
            .execute()
            .then(personalMedicos => res.json(personalMedicos))
            .catch(error => res.status(400).json({error}));
    };
    
    public getPersonalMedicoById = (req:Request,res:Response)=>{
        const id = +req.params.id;
        
        new GetPersonalMedico(this.personalMedicoRepository)
            .execute(id)
            .then(personalMedico => res.json(personalMedico))
            .catch(error=>res.status(400).json({error}))

    }

    public createPersonalMedico = (req:Request, res:Response)=>{
        const [error,createPersonalMedicoDto] = CreatePersonalMedicoDto.create(req.body);
        if(error) return res.status(400).json({error});

        new CreatePersonalMedico(this.personalMedicoRepository)
            .execute( createPersonalMedicoDto! )
            .then(personalMedico => res.json(personalMedico))
            .catch(error=> res.status(400).json({error}));        
        
    
    };

    public updatePersonalMedico = (req: Request, res:Response )=>{

        const id= +req.params.id;
        const [error,updatePersonalMedicoDto] = UpdatePersonalMedicoDto.create({...req.body,id});
        if(error) return res.status(400).json({error});

        new UpdatePersonalMedico(this.personalMedicoRepository)
            .execute(updatePersonalMedicoDto!)
            .then(personalMedico=>res.json(personalMedico))
            .catch(error=>res.status(400).json({error}));
    };

    public deletePersonalMedico = (req : Request , res:Response)=>{
        
        const id= +req.params.id;
        
        new DeletePersonalMedico(this.personalMedicoRepository)
            .execute(id)
            .then(personalMedico=>res.json(personalMedico))
            .catch(error=>res.status(400).json({error}))   
    };
}