export class EmergenciaEntity{
    constructor(
        public id :number,
        public fecha:Date,
        public paciente_id:number,
        public personal_medico_id:number,
        public medico_id:number,
        public descripcion:string,
        public severidad:string,
    ){}
    public static fromObject( object: {[key:string]:any})
    {
        const {id,fecha,paciente_id,personal_medico_id,medico_id,
            descripcion,severidad} = object;

        if(!id) throw 'Id is required';
        if(!fecha) throw 'fecha is required';
        if(!paciente_id) throw 'paciente_id is required';
        if(!personal_medico_id) throw 'personal_medico_id is required';
        if(!medico_id) throw 'descripcion is required';
        if(!descripcion) throw 'descripcion is required';
        if(!severidad) throw 'severidad is required';
        return new EmergenciaEntity(id,fecha,paciente_id,personal_medico_id,medico_id,
            descripcion,severidad);
    }

}