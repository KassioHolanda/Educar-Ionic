import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {AulaPage} from "../aula/aula";
import {TabsPage} from "../tabs/tabs";
import {AlunosPage} from "../alunos/alunos";

/**
 * Generated class for the DisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-disciplina',
    templateUrl: 'disciplina.html',
})
export class DisciplinaPage {

    public listaDisciplinas: Array<any>;
    public isSearchOpened = false;
    public turma;
    public nomeTurma;
    public nomeUnidade;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public database: DatabaseProvider,
                private toastCtrl: ToastController) {

        this.listaDisciplinas = [];
        this.turma = this.navParams.get('turma');
        this.nomeTurma = this.turma.descricao;
        this.nomeUnidade = this.navParams.get('unidade').nome;
        this.database.getDisciplinasBD();
        this.listaDisciplinas = this.database.getDisciplinas();
    }

    getItems(ev: any) {
        this.listaDisciplinas = this.database.getDisciplinas();
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.listaDisciplinas = this.listaDisciplinas.filter((item) => {
                return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    ionViewDidLoad() {

    }

    acessarAulaPage(disciplina) {
        this.navCtrl.push(AlunosPage, {'disciplina': disciplina, 'turma': this.turma, 'unidade': this.nomeUnidade})
    }

    mostrarInfo() {
        let toast = this.toastCtrl.create({
            message: `Unidade: ${this.nomeUnidade}\nTurma: ${this.nomeTurma}`,
            // duration: 10000,
            position: 'bottom',
            closeButtonText: 'OK'
        }).setShowCloseButton(true);


        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }

}
