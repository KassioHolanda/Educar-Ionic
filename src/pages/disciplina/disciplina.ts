import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {AulaPage} from "../aula/aula";
import {TabsPage} from "../tabs/tabs";

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
    public turma;

    constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
        this.listaDisciplinas = new Array<any>();
        this.turma = this.navParams.get('turma')
    }

    ionViewDidLoad() {
        this.database.getDisciplinasBD();
        this.listaDisciplinas = this.database.getDisciplinas();
    }

    acessarAulaPage(disciplina) {
        this.navCtrl.push(TabsPage, {'disciplina': disciplina, 'turma': this.turma})
    }

}
