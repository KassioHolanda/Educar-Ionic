class Aluno {
    private _nome: String;
    private _frequencias: Array<any>;


    constructor(nome: String) {
        this._nome = nome;
    }

    addFrequencia(frequencia: Frequencia) {
        this._frequencias.push(frequencia);
    }

    get nome(): String {
        return this._nome;
    }

    get frequencias(): Array<any> {
        return this._frequencias;
    }

    set nome(value: String) {
        this._nome = value;
    }
}