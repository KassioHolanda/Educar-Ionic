import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPageModule} from "../pages/login/login.module";
import {MenuPageModule} from "../pages/menu/menu.module";
import {PerfilPageModule} from "../pages/perfil/perfil.module";
import {TurmaPageModule} from "../pages/turma/turma.module";
import {DataApiProvider} from '../providers/data-api/data-api';
import {HttpClientModule} from "@angular/common/http";
import {RegisterPageModule} from "../pages/register/register.module";
import {SQLite} from '@ionic-native/sqlite'
import {DatabaseProvider} from '../providers/database/database';
import {UsuarioProvider} from '../providers/usuario/usuario';
import {UnidadeProvider} from '../providers/unidade/unidade';
import {CarregarBdProvider} from '../providers/carregar-bd/carregar-bd';
import {TurmaProvider} from '../providers/turma/turma';

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        LoginPageModule,
        MenuPageModule,
        PerfilPageModule,
        TurmaPageModule,
        HttpClientModule,
        RegisterPageModule,

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SQLite,
        DataApiProvider,
        DatabaseProvider,
        UsuarioProvider,
        UnidadeProvider,
        CarregarBdProvider,
        TurmaProvider,

    ]
})
export class AppModule {

}
