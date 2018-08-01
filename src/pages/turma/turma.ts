import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataApiProvider} from '../../providers/data-api/data-api';
import {HttpClientModule} from "@angular/common/http";
import {DisciplinaPage} from "../disciplina/disciplina";
import {DatabaseProvider} from "../../providers/database/database";
// import {Unidade} from "../home/home";
// import {Turma} from "../../providers/turma/turma";

/**
 * Generated class for the TurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-turma',
    templateUrl: 'turma.html',
    providers: [
        DataApiProvider,
        HttpClientModule,
    ]
})
export class TurmaPage {

    public listaTurmas = new Array<any>();
    public unidadeSelecionada;
    public unidadeSelecionadaNome;
    public unidade;
    public model;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public dataApi: DataApiProvider,
                public database: DatabaseProvider,) {

    }

    getItems(ev: any) {
        this.listaTurmas = this.database.geTurmas();
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.listaTurmas = this.listaTurmas.filter((item) => {
                return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }


    acessarTurma(turma) {
        this.navCtrl.push(DisciplinaPage, {'turma': turma, 'unidade': this.unidadeSelecionada})
    }

    ionViewDidLoad() {
        // console.log('ionViewDidLoad TurmaPage');
        this.unidadeSelecionada = this.navParams.get('unidade');
        this.unidadeSelecionadaNome = this.unidadeSelecionada.nome;
        this.database.getTurmasUnidadeBD(this.unidadeSelecionada.id);
        this.database.getTurmasBD();
        this.listaTurmas = this.database.geTurmas();

    }

}

export class Turma {

}
