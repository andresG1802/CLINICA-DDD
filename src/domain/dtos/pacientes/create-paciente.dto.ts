export class CreatePacienteDto {

    private constructor(
      public readonly nombre: string,
      public readonly edad: number,
      public readonly genero: string,
      public readonly direccion:string,
      public readonly telefono:string,
      public readonly historial_medico:string,
      public readonly nombreUsuario:string,
      public readonly password:string,
      public readonly dni:string
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatePacienteDto?]  {
  
      const { nombre,edad,genero,direccion,telefono,historial_medico,nombreUsuario,password,dni} = props;
      
      if ( !nombre ) return ['nombre property is required', undefined];
      if ( !edad ) return ['especialidad property is required', undefined];
      if ( !genero ) return ['especialidad property is required', undefined];
      if ( !direccion ) return ['direccion property is required', undefined];
      if ( !telefono ) return ['telefono property is required', undefined];
      if ( !historial_medico ) return ['telefono property is required', undefined];
      if(!nombreUsuario) return ['nombreUsuario property is required', undefined];
      if(!password) return ['password property is required', undefined];
      if(!dni) return ['dni property is required', undefined];

      return [undefined, new CreatePacienteDto(nombre,edad,genero,direccion,telefono,historial_medico,nombreUsuario,password,dni)];
    }
  
  }