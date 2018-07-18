class Disciplina {
    private _professor: Usuario;
    private _nome: String;


    constructor(professor: Usuario, nome: String) {
        this._professor = professor;
        this._nome = nome;
    }

    get professor(): Usuario {
        return this._professor;
    }

    get nome(): String {
        return this._nome;
    }
}