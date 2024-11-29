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
  
  const apiResponse = await fetch('http://127.0.0.1:8000/securepass/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }), // Enviar password en el cuerpo de la solicitud
  });
  const response = await apiResponse.json();
  const {encrypted_password} = response;
  console.log(encrypted_password)
  const {ciphertext_hex,key_hex,iv_hex} = encrypted_password;


  //Desencriptamos
  const Responsedesncriptar = await fetch('http://127.0.0.1:8000/decrypt/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ciphertext_hex,key_hex,iv_hex }), // Enviar password en el cuerpo de la solicitud
  });
  const response2 = await Responsedesncriptar.json();
  const {decrypted_message} = response2;
  const sanitizedPassword = decrypted_message.replace(/[\0-\x1F\x7F]/g, '');

  console.log(decrypted_message);
  const medico = await prisma.medico.findFirst({
    where: { nombreUsuario ,password:sanitizedPassword}
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
  // Realizar petición a la API con el password
  const apiResponse = await fetch('http://127.0.0.1:8000/securepass/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }), // Enviar password en el cuerpo de la solicitud
  });
  
  console.log(apiResponse)


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