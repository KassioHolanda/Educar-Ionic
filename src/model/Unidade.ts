class Unidade {
    private _nome: String;
    private _professores;
    private _turmas: Array<any>;

    constructor(nome: String) {
        this._nome = nome;
        this._professores = new Array<any>()
        this._turmas = new Array<any>()
    }

    addProfessor(professor: Usuario) {
        this._professores.push(professor);
    }

    addTurma(turma: Turma) {
        this._turmas.push(turma)
    }

    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
    }

    get professores() {
        return this._professores;
    }

    get turmas() {
        return this._turmas;
    }
}