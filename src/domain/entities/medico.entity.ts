export class MedicoEntity {
    constructor(
        public id:number,
        public nombre: string,
        public especialidad:string,
        public telefono:string,
        public direccion:string
    ){}

    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre,especialidad,telefono,direccion} = object;

        if(!id) throw 'Id is required';
        if(!nombre) throw 'nombre is required';
        if(!especialidad) throw 'especialidad is required';
        if(!telefono) throw 'telefono is required';
        if(!direccion) throw 'direccion is required';

        return new MedicoEntity(id,nombre,especialidad,telefono,direccion)
    }

}