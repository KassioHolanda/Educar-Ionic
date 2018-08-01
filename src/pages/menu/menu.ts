import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {HomePage} from "../home/home";

// import {LoginPage} from '../login/login';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    rootPage = HomePage;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    }

    ionViewDidLoad() {

    }

    voltar() {
        // this.appCtrl.
        this.navCtrl.pop();
    }

    home() {
        // this.viewCtrl.dismiss();
        // this.navCtrl.push(MenuPage)

        // this.appCtrl.getRootNav().push(MenuPage);
    }

    sair() {
        this.navCtrl.popToRoot()
    }
}
