import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DatabaseProvider} from "../database/database";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {DataApiProvider} from "../data-api/data-api";


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

    constructor(public http: HttpClient, public database: DatabaseProvider, public dataApi: DataApiProvider) {
    }

    carregarUsuariosAPI() {
        this.dataApi.getProfessores().subscribe(data => {
                let lista_usuarios: any[];
                lista_usuarios = (data as any);
                console.log(lista_usuarios);

                for (var i = 0; i < lista_usuarios.length; i++) {
                    // var usuario = new Usuario(lista_usuarios[i].nome, lista_usuarios[i].cpf);
                    console.log('BD: usuario - ' + i + ': ' + lista_usuarios[i].cpf);
                    this.database.criarUsuario(lista_usuarios[i].cpf, lista_usuarios[i].nome, "123456");
                    console.log('BD: usuario CRIADO - ' + i + ': ' + lista_usuarios[i].cpf);
                }
            }
            , error => {
                console.log(error)
            }
        )
    }
}
