import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DatabaseProvider} from "../database/database";
import {SQLiteObject} from "@ionic-native/sqlite";
import {DataApiProvider} from "../data-api/data-api";

/*
  Generated class for the UnidadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnidadeProvider {

    constructor(public http: HttpClient,
                public database: DatabaseProvider,
                public dataProvider: DataApiProvider) {
    }

    carregarUnidadesAPI() {
        this.dataProvider.getUnidades().subscribe(data => {
                let lista_unidades: any[];
                lista_unidades = (data as any);
                // console.log(lista_unidades);

                for (var i = 0; i < lista_unidades.length; i++) {
                    // this.unidade = new Unidade();
                    // console.log('unidadeBd ' + i + ': ' + lista_unidades[i].nome_unidade);
                    // this.unidade.nome_unidade = ;
                    this.database.criarUnidade(lista_unidades[i].nome_unidade)
                }
            }
            , error => {
                console.log(error)
            }
        )
    }
}
