

export class UpdateMedicoDto {

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


  static create( props: {[key:string]: any} ): [string?, UpdateMedicoDto?]  {

    const { id, nombre, especialidad ,telefono,direccion } = props;
    
    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    // if ( especialidad ) {
    //   newEspecialidad = new Date( completedAt)
    //   if ( newCompletedAt.toString() === 'Invalid Date' ) {
    //     return ['CompletedAt must be a valid date']
    //   }
    // }

    return [undefined, new UpdateMedicoDto(id, nombre, especialidad,telefono,direccion)];
  }


}