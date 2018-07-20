import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DatabaseProvider} from "../database/database";
import {DataApiProvider} from "../data-api/data-api";
import {UsuarioProvider} from "../usuario/usuario";
import {UnidadeProvider} from "../unidade/unidade";
import {TurmaProvider} from "../turma/turma";

/*
  Generated class for the CarregarBdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarregarBdProvider {

    constructor(public http: HttpClient,
                public database: DatabaseProvider,
                public dataProvider: DataApiProvider,
                public usuarioProvider: UsuarioProvider,
                public unidadeProvider: UnidadeProvider,
                public turmaProvider: TurmaProvider,) {

        // console.log('Hello CarregarBdProvider Provider');
    }

    carregarDadosParaBD() {
        this.usuarioProvider.carregarUsuariosAPI();
        this.unidadeProvider.carregarUnidadesAPI();
        this.turmaProvider.carregarTurmasAPI();
        this.turmaProvider.carregarDisciplinasAPI();
        this.turmaProvider.carregarAlunosAPI();
    }
}
