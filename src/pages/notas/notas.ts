import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-notas',
    templateUrl: 'notas.html',
})
export class NotasPage {
    public listaAlunos: Array<any>;
    public turma;

    constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
        this.listaAlunos = [];
        this.turma = this.navParams.get('turma');
    }

    ionViewDidLoad() {
        this.database.alunosTurma(this.turma.id);
        this.listaAlunos = this.database.getAlunos();
    }
}