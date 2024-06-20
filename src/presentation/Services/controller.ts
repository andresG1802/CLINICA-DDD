import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


export const getTratamientosByPacienteId = async (req: Request, res: Response) => {
    const id = +req.params.id;
    
    const tratamientos = await prisma.tratamientos.findMany({
      where: { paciente_id:id }
    });

    if (!tratamientos) {
      return res.status(401).json({ error: 'tratamientos no encontrados' });
    }
    else{
        return res.status(200).json({tratamientos});
    }
}