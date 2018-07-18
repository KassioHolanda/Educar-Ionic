class Usuario {
    private _cpf: String;
    private _nome: String;
    private _disciplinas: Array<any>;
    private _unidades: Array<any>;

    constructor(nome: String, cpf: String) {
        this._nome = nome;
        this._cpf = cpf;
    }

    addDisciplina(disciplina: Disciplina) {
        this._disciplinas.push(disciplina);
    }

    addUnidade(unidade: Unidade) {
        this._unidades.push(unidade)
    }

    get nome(): String {
        return this._nome
    }

    set nome(nome: String) {
        this._nome = nome
    }

    get cpf(): String {
        return this._cpf
    }

    set cpf(cpf: String) {
        this._cpf = cpf
    }


    get disciplinas(): Array<any> {
        return this._disciplinas;
    }

    get unidades(): Array<any> {
        return this._unidades;
    }
}