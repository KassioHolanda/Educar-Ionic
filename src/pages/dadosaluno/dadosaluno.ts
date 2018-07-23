import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';


/**
 * Generated class for the DadosalunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-dadosaluno',
    templateUrl: 'dadosaluno.html',
})
export class DadosalunoPage {

    public aluno;

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.aluno = this.navParams.get('aluno');
    }

    ionViewDidLoad() {

    }


}
