import {Component} from '@angular/core';

import {AulaPage} from "../aula/aula";
import {AlunosPage} from "../alunos/alunos";
import {NavParams} from "ionic-angular";

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {

    tab1Root = AulaPage;
    tab2Root = AlunosPage;
    tab1Params;
    tab2Params;

    constructor(parametros: NavParams) {
        console.log(parametros);

        this.tab1Root = AulaPage;
        this.tab2Root = AlunosPage;

        this.tab1Params = {'disciplina': parametros.data.disciplina, 'turma': parametros.data.turma}
        this.tab2Params = {'disciplina': parametros.data.disciplina, 'turma': parametros.data.turma}

    }
}
