export class CreateTratamientoDto {

  private constructor(
      public readonly emergencia_id :number,
      public readonly descripcion   :string,
      public readonly medicamentos  :string,
      public readonly instrucciones :string,
      public readonly paciente_id:number,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateTratamientoDto?]  {

    const { emergencia_id,descripcion,medicamentos,instrucciones ,paciente_id} = props;

    if ( !emergencia_id ) return ['emergencia_id property is required', undefined];
    if ( !descripcion ) return ['descripcion is required', undefined];
    if ( !medicamentos ) return ['medicamentos is required', undefined];
    if ( !instrucciones ) return ['instrucciones is required', undefined];
    if ( !paciente_id ) return ['paciente_id is required', undefined];

    return [undefined, new CreateTratamientoDto(emergencia_id,descripcion,medicamentos,instrucciones,paciente_id)];
  }
}