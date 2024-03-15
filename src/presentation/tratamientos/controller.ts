import { Request, Response} from "express";
import { CreateTratamientoDto, UpdateTratamientoDto } from "../../domain/dtos";
import { CreateTratamiento, DeleteTratamiento, GetTratamiento, GetTratamientos, TratamientoRepository, UpdateTratamiento } from "../../domain";

export class TratamientosController{

    //* DI
    constructor(
        private readonly TratamientoRepository: TratamientoRepository,
    ){}
    
    //Lo raro es que express recomienda:
    //no utilizar async 
    public getTratamientos = (req:Request,res:Response) => {
        new GetTratamientos(this.TratamientoRepository)
            .execute()
            .then(Tratamientos => res.json(Tratamientos))
            .catch(error => res.status(400).json({error}));
    };
    
    public getTratamientoById = (req:Request,res:Response)=>{
        const id = +req.params.id;
        
        new GetTratamiento(this.TratamientoRepository)
            .execute(id)
            .then(Tratamiento => res.json(Tratamiento))
            .catch(error=>res.status(400).json({error}))

    }

    public createTratamiento = (req:Request, res:Response)=>{
        const [error,createTratamientoDto] = CreateTratamientoDto.create(req.body);
        if(error) return res.status(400).json({error});

        new CreateTratamiento(this.TratamientoRepository)
            .execute( createTratamientoDto! )
            .then(Tratamiento => res.json(Tratamiento))
            .catch(error=> res.status(400).json({error}));        
        
    
    };

    public updateTratamiento = (req: Request, res:Response )=>{

        const id= +req.params.id;
        const [error,updateTratamientoDto] = UpdateTratamientoDto.create({...req.body,id});
        if(error) return res.status(400).json({error});

        new UpdateTratamiento(this.TratamientoRepository)
            .execute(updateTratamientoDto!)
            .then(Tratamiento=>res.json(Tratamiento))
            .catch(error=>res.status(400).json({error}));
    };

    public deleteTratamiento = (req : Request , res:Response)=>{
        
        const id= +req.params.id;
        
        new DeleteTratamiento(this.TratamientoRepository)
            .execute(id)
            .then(Tratamiento=>res.json(Tratamiento))
            .catch(error=>res.status(400).json({error}))   
    };
}