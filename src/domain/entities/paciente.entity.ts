export class PacienteEntity {
    constructor(
        public id:number,
        public nombre: string,
        public edad: number,
        public genero: string,
        public direccion:string,
        public telefono:string,
        public historial_medico:string,
        public nombreUsuario:string,
        public password:string,
        public dni:string
    ){}

    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre,edad,genero,direccion,telefono,historial_medico,nombreUsuario,password,dni} = object;

        if(!id) throw 'Id is required';
        if(!nombre) throw 'nombre is required';
        if ( !nombre ) throw 'nombre is required'; 
        if ( !edad ) throw 'edad is required';
        if ( !genero ) throw 'genero is required';
        if ( !direccion ) throw 'direccion is required';
        if ( !telefono ) throw 'telefono is required';
        if ( !historial_medico ) throw 'historial_medico is required';
        if ( !nombreUsuario ) throw 'nombreUsuario is required';
        if ( !password ) throw 'password is required';
        if(!dni) throw 'dni is required';
        return new PacienteEntity(id,nombre,edad,genero,direccion,telefono,historial_medico,nombreUsuario,password,dni)
    }

}