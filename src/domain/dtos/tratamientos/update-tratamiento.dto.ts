export class UpdateTratamientoDto {

    private constructor(
        public readonly id: number,
        public readonly emergencia_id :number,
        public readonly descripcion   :string,
        public readonly medicamentos  :string,
        public readonly instrucciones :string
    ){}
    
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.id= this.id;
      if ( this.emergencia_id ) returnObj.emergencia_id= this.emergencia_id;
      if ( this.descripcion ) returnObj.descripcion= this.descripcion;
      if ( this.medicamentos ) returnObj.medicamentos= this.medicamentos;
      if ( this.instrucciones ) returnObj.instrucciones= this.instrucciones;

      return returnObj;
    }
      
    static create( props: {[key:string]: any} ): [string?, UpdateTratamientoDto?]  {
  
      const { id,emergencia_id,descripcion,medicamentos,instrucciones } = props;
        
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
      
      return [undefined, new UpdateTratamientoDto(id,emergencia_id,descripcion,medicamentos,instrucciones)];
    }
}