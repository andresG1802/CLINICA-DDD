export class UpdateEmergenciaDto{
    private constructor(
        public id:number,
        public fecha?:Date,
        public paciente_id?:number,
        public personal_medico_id?:number,
        public medico_id?:number,
        public descripcion?:string,
        public severidad?:string,
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};
        
        if ( this.fecha) returnObj.fecha = this.fecha;
        if ( this.paciente_id) returnObj.paciente_id = this.paciente_id;
        if ( this.personal_medico_id) returnObj.personal_medico_id = this.personal_medico_id;
        if ( this.medico_id) returnObj.medico_id = this.medico_id;
        if ( this.descripcion) returnObj.descripcion = this.descripcion;
        if ( this.severidad) returnObj.severidad = this.severidad;
        return returnObj;
    }

    static create( props: {[key:string]: any} ): [string?, UpdateEmergenciaDto?]  {
  
        const { id,fecha,paciente_id,personal_medico_id,medico_id,
            descripcion,severidad } = props;
        
        if ( !id || isNaN( Number(id)) ) {
          return ['id must be a valid number'];
        }
        //Completar fecha
    
        return [undefined, new UpdateEmergenciaDto(id,fecha,paciente_id,
            personal_medico_id,medico_id,descripcion,severidad)];
    }
}
