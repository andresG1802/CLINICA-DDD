
export class UpdatePersonalMedicoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly especialidad?: string,
      public readonly telefono?: string,
      public readonly direccion?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.especialidad ) returnObj.especialidad = this.especialidad;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePersonalMedicoDto?]  {
  
      const { id, nombre, especialidad ,telefono,direccion } = props;
      
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
  
      return [undefined, new UpdatePersonalMedicoDto(id, nombre, especialidad,telefono,direccion)];
    }
  
  
  }