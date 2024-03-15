export class PacienteEntity {
    constructor(
        public id:number,
        public nombre: string,
        public edad: number,
        public genero: string,
        public direccion:string,
        public telefono:string,
        public historial_medico:string,
    ){}

    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre,edad,genero,direccion,telefono,historial_medico} = object;

        if(!id) throw 'Id is required';
        if(!nombre) throw 'nombre is required';
        if ( !nombre ) throw 'nombre is required'; 
        if ( !edad ) throw 'nombre is required';
        if ( !genero ) throw 'nombre is required';
        if ( !direccion ) throw 'nombre is required';
        if ( !telefono ) throw 'nombre is required';
        if ( !historial_medico ) throw 'nombre is required';
      
        return new PacienteEntity(id,nombre,edad,genero,direccion,telefono,historial_medico)
    }

}