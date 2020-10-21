
export class Tramites {
    constructor(
        public id: number,
        public nombre: string,
        public entidad : string,
        public disponiblelinea : boolean = false,
        public concosto : boolean = false,
        public detalletramite : string

    ) { }
}


export class OtrosTemas {
    constructor(
        public id: number,
        public titulo: string,
        public subtitulo : string,
        public enlace : boolean,
        public imagen : boolean
    ) { }
}



export class Opinion {
    constructor(
        public id: number,
        public estado: number,
        public nombre : string,
        public entidad : string
    ) { }
}


export class Cuentanos {
    constructor(
        public id: number,
        public idopinion: number,
        public descripcion : string
    ) { }
}