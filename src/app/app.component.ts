import {Component} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DatabaseProvider} from "../providers/database/database";
import {DataApiProvider} from "../providers/data-api/data-api";
import {CarregarBdProvider} from "../providers/carregar-bd/carregar-bd";
import {LoginAppPage} from "../pages/login-app/login-app";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = LoginAppPage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                public alertCtrl: AlertController,
                splashScreen: SplashScreen,
                dbProvider: DatabaseProvider,
                carregarBD: CarregarBdProvider,) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.


            // carregarBD.carregarDadosParaBD();



            // dbProvider.getTodosUsuariosBD();
            // dbProvider.getTodasUnidadesBD();
            // dbProvider.getTurmasBD();
            // dbProvider.getDisciplinasBD();

            statusBar.styleDefault();
            statusBar.styleDefault();
            if (platform.is('android')) {
                statusBar.overlaysWebView(false);
                statusBar.backgroundColorByHexString('#1A237E');
            }
            // splashScreen.hide();
        });


    }

    // private openHomePage(splashScreen: SplashScreen) {
    //     splashScreen.hide();
    //     this.rootPage = LoginPage;
    // }
}

