import {Component} from '@angular/core';
import {
    ActionSheetController, AlertController, IonicPage, NavController, NavParams,
    ToastController
} from 'ionic-angular';
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
    public nomeTurma;
    public nomeUnidade;
    public nomeDisciplina;
    public disciplina;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public database: DatabaseProvider,
                public alertCtrl: AlertController,
                public actionSheetCtrl: ActionSheetController,
                private toastCtrl: ToastController) {

        this.listaAlunos = [];
        this.turma = this.navParams.get('turma');
        this.nomeUnidade = this.navParams.get('unidade');
        this.nomeTurma = this.turma.descricao;
        this.nomeDisciplina = this.navParams.get('disciplina').descricao;

    }

    ionViewDidLoad() {
        this.database.alunosTurma(this.turma.id);
        this.listaAlunos = this.database.getAlunos();
    }

    dadosAluno(item) {
        this.navCtrl.push(DadosalunoPage, {'aluno': item})
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

    presentToast() {
        let toast = this.toastCtrl.create({
            message: `Unidade: ${this.nomeUnidade}\nTurma: ${this.nomeTurma}\nDisciplina: ${this.nomeDisciplina}`,
            // duration: 10000,
            position: 'bottom',
            closeButtonText: 'OK'
        }).setShowCloseButton(true);


        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }

    mostrarMenu(item) {

        const actionSheet = this.actionSheetCtrl.create({
            title: 'Dados dos Alunos',
            buttons: [
                {
                    text: 'Adicionar Nota',
                    role: 'adicionarnota',
                    handler: () => {
                        console.log('Destructive clicked');
                        this.adicionarNota(item);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    adicionarNota(item) {
        const prompt = this.alertCtrl.create({
            title: 'Nota',
            message: "Informar a Nota do Aluno:",
            inputs: [
                {
                    name: 'Nota',
                    placeholder: 'Nota'
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


