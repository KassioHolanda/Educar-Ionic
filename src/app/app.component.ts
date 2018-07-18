import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {DatabaseProvider} from "../providers/database/database";
import {DataApiProvider} from "../providers/data-api/data-api";
import {UsuarioProvider} from "../providers/usuario/usuario";
import {CarregarBdProvider} from "../providers/carregar-bd/carregar-bd";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = LoginPage;

    constructor(platform: Platform, statusBar: StatusBar,
                splashScreen: SplashScreen,
                dbProvider: DatabaseProvider,
                carregarBD: CarregarBdProvider,) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.

            carregarBD.carregarDadosParaBD();

            statusBar.styleDefault();
            splashScreen.hide();
        });


    }

    // private openHomePage(splashScreen: SplashScreen) {
    //     splashScreen.hide();
    //     this.rootPage = LoginPage;
    // }
}

