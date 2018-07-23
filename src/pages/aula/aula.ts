import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";

/**
 * Generated class for the AulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-aula',
    templateUrl: 'aula.html',
})
export class AulaPage {
    public listaAlunos: Array<any>;
    public turma;

    constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, public toast: ToastController) {
        this.listaAlunos = [];
        this.turma = this.navParams.get('turma');
    }

    ionViewDidLoad() {
        this.database.alunosTurma(this.turma.id);
        this.listaAlunos = this.database.getAlunos();
    }

    salvarAula() {
        this.toast.create({message: 'Aula Registrada...', duration: 3000, position: 'botton'}).present();
    }
}
