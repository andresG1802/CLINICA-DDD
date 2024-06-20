

export class CreateMedicoDto {

  private constructor(
    public readonly nombre: string,
    public readonly especialidad: string,
    public readonly telefono:string,
    public readonly direccion:string,
    public readonly nombreUsuario:string,
    public readonly password:string,  
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateMedicoDto?]  {

    const { nombre,especialidad,telefono,direccion,nombreUsuario,password } = props;

    if ( !nombre ) return ['nombre property is required', undefined];
    if ( !especialidad ) return ['especialidad property is required', undefined];
    if ( !telefono ) return ['telefono property is required', undefined];
    if ( !direccion ) return ['direccion property is required', undefined];
    if ( !nombreUsuario ) return ['nombreUsuario property is required', undefined];
    if ( !password ) return ['password property is required', undefined];
    return [undefined, new CreateMedicoDto(nombre,especialidad,telefono,direccion,nombreUsuario,password)];
  }

}