class Turma {
    private _descricao: String;
    private _turno: String;
    private _alunos: Array<any>;
    private _professores: Array<any>;

    constructor(descricao: String, turno: String) {
        this._descricao = descricao;
        this._turno = turno;
        this._alunos = new Array<any>();
    }


    get descricao(): String {
        return this._descricao;
    }

    set descricao(value: String) {
        this._descricao = value;
    }

    get turno(): String {
        return this._turno;
    }

    set turno(value: String) {
        this._turno = value;
    }

    get alunos(): Array<any> {
        return this._alunos;
    }

    addProfessor(professor: Usuario) {
        this._professores.push(professor)
    }

    addAluno(aluno: Aluno) {
        this._professores.push(aluno)
    }

    get professores(): Array<any> {
        return this._professores;
    }
}