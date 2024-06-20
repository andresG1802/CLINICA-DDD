

export class UpdatePacienteDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly edad?: number,
      public readonly genero?: string,
      public readonly direccion?:string,
      public readonly telefono?:string,
      public readonly historial_medico?:string,
      public readonly nombreUsuario?:string,
      public readonly password?:string
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.edad ) returnObj.edad = this.edad;
      if ( this.direccion ) returnObj.direccion = this.direccion;
      if ( this.genero ) returnObj.genero = this.genero;
      if ( this.telefono ) returnObj.telefono = this.telefono;
      if ( this.historial_medico ) returnObj.historial_medico = this.historial_medico;
      if ( this.nombreUsuario ) returnObj.telefono = this.nombreUsuario;
      if ( this.password ) returnObj.historial_medico = this.password;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePacienteDto?]  {
  
        const { id,nombre,edad,genero,direccion,telefono,historial_medico,nombreUsuario,password } = props;
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      return [undefined, new UpdatePacienteDto(id,nombre,edad,genero,direccion,telefono,historial_medico,nombreUsuario,password)];
    }
  
  
  }