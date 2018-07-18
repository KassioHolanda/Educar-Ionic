class Frequencia {
    private _aluno: Aluno;
    private _presente: boolean;
    private _aula: Aula;

    constructor(aluno: Aluno, presente: boolean, aula: Aula) {
        this._aluno = aluno;
        this._presente = presente;
        this._aula = aula;
        this._aluno.addFrequencia(this);
        this._aula.addFrequencia(this);
    }

    get aluno(): Aluno {
        return this._aluno;
    }

    get presente(): boolean {
        return this._presente;
    }

    get aula(): Aula {
        return this._aula;
    }
}