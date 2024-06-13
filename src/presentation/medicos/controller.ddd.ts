import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateMedicoDto, UpdateMedicoDto } from '../../domain/dtos';


export class MedicosController {

  //* DI
  constructor() { }


  public getMedicos = async( req: Request, res: Response ) => {
    const medicos = await prisma.medico.findMany();
    return res.json( medicos );
  };

  public getMedicoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const medico = await prisma.medico.findFirst({
      where: { id }
    });
    
    ( medico )
      ? res.json( medico )
      : res.status( 404 ).json( { error: `Medico with id ${ id } not found` } );
  };

  public createMedico = async( req: Request, res: Response ) => {
    
    const [error, createMedicoDto] = CreateMedicoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const medico = await prisma.medico.create({
      data: createMedicoDto!
    });

    res.json( medico );

  };

  public updateMedico = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateMedicoDto] = UpdateMedicoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const todo = await prisma.medico.findFirst({
      where: { id }
    });

    if ( !todo ) return res.status( 404 ).json( { error: `Todo with id ${ id } not found` } );

    const updatedMedico = await prisma.medico.update({
      where: { id },
      data: updateMedicoDto!.values
    });
  
    res.json( updatedMedico );

  }


  public deleteMedico = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const medico = await prisma.medico.findFirst({
      where: { id }
    });

    if ( !medico ) return res.status(404).json({ error: `Todo with id ${ id } not found` });

    const deleted = await prisma.medico.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Todo with id ${ id } not found` });
  }
  public login = async (req: Request, res: Response) => {
    const { nombre, password } = req.body;
    
    const medico = await prisma.medico.findFirst({
      where: { nombre }
    });

    if (!medico) {
      return res.status(401).json({ error: 'Usuario no reconocido' });
    }
  }
}
