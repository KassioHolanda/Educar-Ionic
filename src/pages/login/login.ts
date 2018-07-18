import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {MenuPage} from "../menu/menu";
import {RegisterPage} from "../register/register";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {DatabaseProvider} from "../../providers/database/database";
import {HttpClientModule} from "@angular/common/http";


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [
        HttpClientModule,
    ]
})
export class LoginPage {

    public login = new Login();

    usuarios: any[] = [];
    cpfBusca: String = null;
    public listaUsuarios: Array<any>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public database: DatabaseProvider,
                public usuarioProvider: UsuarioProvider,
                public toast: ToastController,) {

        this.listaUsuarios = new Array<any>();
        // this.database.getTodosUsuariosBD();
    }

    ionViewDidLoad() {
        // this.carregarUsuariosBD();
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
    }

    registrar() {
        this.navCtrl.push(RegisterPage)
    }
}

export class Login {
    cpf: String;
    senha: String;
}
