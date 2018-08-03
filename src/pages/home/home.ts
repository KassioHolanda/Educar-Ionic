import {Component, OnInit} from '@angular/core';
import {App, NavController, NavParams, Platform, ToastController, ViewController} from 'ionic-angular';
import {TurmaPage} from "../turma/turma";
import {HttpClientModule} from "@angular/common/http";
import {DataApiProvider} from "../../providers/data-api/data-api";
import {UnidadeProvider} from "../../providers/unidade/unidade";
import {DatabaseProvider} from "../../providers/database/database";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [
        HttpClientModule,
    ]
})
export class HomePage {

    // model: Unidade;
    public isSearchOpened = false;
    public lista_unidades: Array<any>;
    searchQuery: string = '';

    // public lista_unidades_banco: any[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public dataProvider: DataApiProvider,
                private toast: ToastController,
                private unidadeProvider: UnidadeProvider,
                public database: DatabaseProvider,
                public viewCtrl: ViewController,
                public appCtrl: App,) {

        this.lista_unidades = [];
        this.database.getTodasUnidadesBD();
        this.lista_unidades = this.database.getUnidades()

    }

    getItems(ev: any) {
        this.lista_unidades = this.database.getUnidades();
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.lista_unidades = this.lista_unidades.filter((item) => {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    ionViewDidEnter() {
        // this.carregarUnidadesBD();
        // this.statusBar.overlaysWebView(true);
        // this.statusBar.backgroundColorByHexString('#ffffff');

    }

    carregarUnidadesBD() {
        this.database.getTodasUnidadesBD().then((result: any[]) => {
            console.log('resultado banco ' + result);
            var lista_unidades: any[] = [];
            lista_unidades = result;
            console.log('Unidades banco de dados: ' + lista_unidades);

            for (var i = 0; i < result.length; i++) {
                console.log('unidade' + i + ': ' + lista_unidades[i].nome);
                var model = new Unidade(lista_unidades[i].nome);
                this.lista_unidades.push(model);
                console.log('unidade' + i + ': ' + lista_unidades[i].nome + ' adicionada a lista');
            }

            console.log('Unidades carregadas...');

        }).catch(() => {
            this.toast.create({
                message: 'Erro ao carregar as unidades.',
                duration: 3000,
                position: 'botton'
            }).present();
        });
    }

    acessarTurmas(unidade) {
        // this.viewCtrl.dismiss();
        // this.appCtrl.getRootNav().push(TurmaPage, {'unidade': unidade});
        console.log('unidade: ' + unidade);
        this.navCtrl.push(TurmaPage, {'unidade': unidade})
    }
}
