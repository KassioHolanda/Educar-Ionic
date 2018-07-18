import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
        this.listaDisciplinas = new Array<any>();
    }

    ionViewDidLoad() {
        this.database.getDisciplinasBD();
        this.listaDisciplinas = this.database.getDisciplinas();
    }

}
