import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams, Platform, ToastController, ViewController} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {RegisterPage} from "../register/register";
import {MenuPage} from "../menu/menu";
import {SplashScreen} from "@ionic-native/splash-screen";

/**
 * Generated class for the LoginAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login-app',
    templateUrl: 'login-app.html',
})
export class LoginAppPage {

    public login = new Login();
    public listaUsuarios: Array<any>;


    constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider,
                public usuarioProvider: UsuarioProvider,
                public toast: ToastController, public viewCtrl: ViewController, public appCtrl: App) {



        this.listaUsuarios = new Array<any>();
        this.database.getTodosUsuariosBD();
        this.listaUsuarios = this.database.getUsers();
    }

    ionViewDidLoad() {
    }

    acessar() {
        // console.log('Tamanho - ' + this.listaUsuarios.length);
        // for (var i = 0; i < this.listaUsuarios.length; i++) {
        //     console.log('CPF ' + this.listaUsuarios[i].cpf);
        //     if (this.login.cpf.toString() == this.listaUsuarios[i].cpf.toString()) {
        //         this.navCtrl.push(MenuPage)
        //     }
        // }
        // this.toast.create({message: 'Usuario não Encontrado...', duration: 3000, position: 'botton'}).present();

        this.navCtrl.push(MenuPage)

        // this.viewCtrl.dismiss();
        // this.appCtrl.getRootNav().push(MenuPage);

    }

    registrar() {
        this.navCtrl.push(RegisterPage)
    }

    carregarUsuariosBD() {
        this.database.getTodasUnidadesBD().then((result) => {
            console.log('resultado banco ' + result);
            var listaUsuarios: any[] = [];
            listaUsuarios = (result as any);
            console.log('Usuario banco de dados: ' + listaUsuarios);

            for (var i = 0; i < listaUsuarios.length; i++) {
                console.log('usuario = ' + i + ': ' + listaUsuarios[i].nome);
                var usuario = new Usuario(listaUsuarios[i].nome, listaUsuarios[i].cpf);
                this.listaUsuarios.push(usuario);
                console.log('usuario' + i + ': ' + listaUsuarios[i].nome + ' salvo');
            }

            console.log('usuarios carregados...');

        }).catch(() => {
            this.toast.create({
                message: 'Erro ao carregar as usuarios.',
                duration: 3000,
                position: 'botton'
            }).present();
        });
    }

}

export class Login {
    cpf: String;
    senha: String;
}

