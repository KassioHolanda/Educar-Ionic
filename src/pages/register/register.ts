import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {DatabaseProvider} from "../../providers/database/database";
import {modelGroupProvider} from "@angular/forms/src/directives/ng_model_group";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    model: Usuario;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private usuarioProvider: UsuarioProvider,
                private database: DatabaseProvider,
                private toast: ToastController) {

        this.model = new Usuario();

    }

    ionViewDidLoad() {
    }

    salvarUsuario() {
        this.database.criarUsuario(this.model.cpf, this.model.nome, this.model.senha);
        console.log('cpf = ' + this.model.cpf + ' senha = ' + this.model.senha);
        this.toast.create({message: 'Usuario Cadastrado.', duration: 3000, position: 'botton'}).present();
        this.navCtrl.pop()
    }
}

export class Usuario {
    cpf: String;
    nome: String;
    senha: String;
}
