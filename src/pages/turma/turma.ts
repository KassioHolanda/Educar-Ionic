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
    public unidade;
    public model;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public dataApi: DataApiProvider,
                public database: DatabaseProvider,
    ) {

    }


    acessarTurma(turma) {
        this.navCtrl.push(DisciplinaPage, {'turma': turma})
    }

    ionViewDidLoad() {
        // console.log('ionViewDidLoad TurmaPage');
        this.unidadeSelecionada = this.navParams.get('unidade');
        console.log('Unidade ID: ' + this.unidadeSelecionada.id);
        this.database.getTurmasUnidadeBD(this.unidadeSelecionada.id);
        this.database.getTurmasBD();
        this.listaTurmas = this.database.geTurmas();
        //
        // this.dataApi.getTurmasUnidade(this.unidade_selecionada.pk).subscribe(data => {
        //
        //         console.log(this.unidade);
        //         // this.lista_turmas =
        //         console.log(this.lista_turmas);
        //         this.unidade = data;
        //         let lista_turmas = [];
        //         this.lista_turmas = this.unidade.minhas_turmas;
        //         for (var i = 0; i < lista_turmas.length; i++) {
        //             this.model = new Turma();
        //             // console.log('unidade' + i + ': ' + lista_turmas[i].descricao);
        //             this.dataApi.getTurmasUnidade(this.unidade)
        //         }
        //
        //
        //     },
        //     error =>
        //         console.log(error)
        // )
    }

}

export class Turma {

}
