import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {TabsPage} from "../tabs/tabs";
import {DadosalunoPage} from "../dadosaluno/dadosaluno";

/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-alunos',
    templateUrl: 'alunos.html',
})
export class AlunosPage {

    public listaAlunos: Array<any>;
    public turma;
    public disciplina;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public database: DatabaseProvider,
                public alertCtrl: AlertController) {
        this.listaAlunos = [];
        this.turma = this.navParams.get('turma');
    }

    ionViewDidLoad() {
        this.database.alunosTurma(this.turma.id);
        this.listaAlunos = this.database.getAlunos();
    }

    dadosAluno(item) {
        this.navCtrl.push(DadosalunoPage, {'aluno' : item})
    }

    getItems(ev: any) {
        this.listaAlunos = this.database.getAlunos();
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.listaAlunos = this.listaAlunos.filter((item) => {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}


