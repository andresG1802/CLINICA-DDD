import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


export const loginPaciente = async (req: Request, res: Response) => {
    const { dni, password } = req.body;
    
    const paciente = await prisma.pacientes.findFirst({
      where: { dni ,password}
    });

    if (!paciente) 
    {
      return res.status(401).json({ error: 'Usuario no reconocido' });
    }
    else
    {
        return res.status(200).json({paciente});
    }
}

export const loginMedico = async (req: Request, res: Response) => {
  const { nombreUsuario, password } = req.body;
  
  const medico = await prisma.medico.findFirst({
    where: { nombreUsuario ,password}
  });

  if (!medico) 
  {
    return res.status(401).json({ error: 'Usuario no reconocido' });
  }
  else
  {
      return res.status(200).json({medico});
  }
}

export const loginPersonalMedico = async (req: Request, res: Response) => {
  const { nombreUsuario, password } = req.body;
  
  const personalMedico = await prisma.personalmedico.findFirst({
    where: { nombreUsuario ,password}
  });

  if (!personalMedico) 
  {
    return res.status(401).json({ error: 'Usuario no reconocido' });
  }
  else
  {
      return res.status(200).json({personalMedico});
  }
}