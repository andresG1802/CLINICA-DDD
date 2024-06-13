import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


export const login = async (req: Request, res: Response) => {
    const { nombre, password } = req.body;
    
    const medico = await prisma.medico.findFirst({
      where: { nombre }
    });

    if (!medico) {
      return res.status(401).json({ error: 'Usuario no reconocido' });
    }
    else{
        return res.status(200).json({medico});
    }
}