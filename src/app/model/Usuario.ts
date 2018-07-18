export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto)
    }
}


export class Usuario extends Model {
    cpf: string;
    senha: string;
}