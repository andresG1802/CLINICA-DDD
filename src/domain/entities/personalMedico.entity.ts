export class PersonalMedicoEntity {
    constructor(
        public id:number,
        public nombre: string,
        public especialidad:string,
        public telefono:string,
        public direccion:string,
        public nombreUsuario:string,
        public password:string,
    ){}

    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre,especialidad,telefono,direccion,nombreUsuario,password} = object;

        if(!id) throw 'Id is required';
        if(!nombre) throw 'nombre is required';
        if(!especialidad) throw 'especialidad is required';
        if(!telefono) throw 'telefono is required';
        if(!direccion) throw 'direccion is required';
        if(!nombreUsuario) throw 'nombreUsuario is required';
        if(!password) throw 'password is required';
        return new PersonalMedicoEntity(id,nombre,especialidad,telefono,direccion,nombreUsuario,password)
    }

}