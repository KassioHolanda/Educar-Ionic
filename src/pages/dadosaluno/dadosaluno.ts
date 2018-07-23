import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ModalController, Platform, ViewController} from 'ionic-angular';


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

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public alertCtrl: AlertController) {
        this.aluno = this.navParams.get('aluno');
    }

    ionViewDidLoad() {

    }

    adicionarNota() {
        const prompt = this.alertCtrl.create({
            title: 'Nota',
            message: "Adicionar nota do aluno!",
            inputs: [
                {
                    name: 'bimestre',
                    placeholder: 'Bimestre: '
                },
                {
                    name: 'nota',
                    placeholder: 'Nota: '
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    adicionarOcorrencia() {
        const prompt = this.alertCtrl.create({
            title: 'Nota',
            message: "Adicionar ocorrência ao aluno!",
            inputs: [
                {
                    name: 'ocorrencia',
                    placeholder: 'Ocorrência: '
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

}
