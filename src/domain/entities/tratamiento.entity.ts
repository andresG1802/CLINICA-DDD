export class TratamientoEntity{
    constructor(
        public id            :number,          
        public emergencia_id :number,
        public descripcion   :string,
        public medicamentos  :string,
        public instrucciones :string
    ){}

    public static fromObject( object: {[key:string]:any})
    {
        const {id,emergencia_id,descripcion,medicamentos,instrucciones} = object;

        if(!id) throw 'Id is required';
        if(!emergencia_id ) throw 'emergencia_id is required';
        if(!descripcion ) throw 'descripcion is required';
        if(!medicamentos ) throw 'medicamentos is required';
        if(!instrucciones ) throw 'Instrucciones is required';


        return new TratamientoEntity(id,emergencia_id,
            descripcion,medicamentos,instrucciones)
    }

}
    