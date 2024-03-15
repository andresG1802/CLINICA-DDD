

export class CreatePersonalMedicoDto {

    private constructor(
      public readonly nombre: string,
      public readonly especialidad: string,
      public readonly telefono:string,
      public readonly direccion:string  
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatePersonalMedicoDto?]  {
  
      const { nombre,especialidad,telefono,direccion } = props;
  
      if ( !nombre ) return ['nombre property is required', undefined];
      if ( !especialidad ) return ['especialidad property is required', undefined];
      if ( !telefono ) return ['telefono property is required', undefined];
      if ( !direccion ) return ['direccion property is required', undefined];
      return [undefined, new CreatePersonalMedicoDto(nombre,especialidad,telefono,direccion)];
    }
  
  }