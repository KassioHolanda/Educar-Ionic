class Aula {
    private _descricao: String;
    private _turma: Turma;
    private _frequencias: Array<any>;
    private _data: Date;


    constructor(descricao: String, turma: Turma) {
        this._descricao = descricao;
        this._turma = turma;
        this._data = new Date();
        this._frequencias = new Array<any>();
    }

    addFrequencia(frequencia: Frequencia) {
        this._frequencias.push(frequencia)
    }

    get descricao(): String {
        return this._descricao;
    }

    get turma(): Turma {
        return this._turma;
    }

    get frequencias(): Array<any> {
        return this._frequencias;
    }

    get data(): Date {
        return this._data;
    }


}