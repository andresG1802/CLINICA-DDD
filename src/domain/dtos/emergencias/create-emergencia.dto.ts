export class CreateEmergenciaDto {

    private constructor(
        public fecha:Date,
        public paciente_id:number,
        public personal_medico_id:number,
        public medico_id:number,
        public descripcion:string,
        public severidad:string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateEmergenciaDto?]  {
  
      const { fecha,paciente_id,personal_medico_id,medico_id,
        descripcion,severidad } = props;
  
        if(!fecha) return ['fecha is required', undefined];
        if(!paciente_id) return ['paciente_id is required', undefined];
        if(!personal_medico_id) return ['personal_medico_id is required', undefined];
        if(!medico_id) return ['medico_id is required', undefined];
        if(!descripcion) return ['descripcion is required', undefined];
        if(!severidad) return ['severidad is required', undefined];

      return [undefined, new CreateEmergenciaDto(fecha,paciente_id,personal_medico_id,medico_id,
        descripcion,severidad)];
    }
  
  }