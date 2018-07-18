import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DataApiProvider} from "../data-api/data-api";
import {DatabaseProvider} from "../database/database";

/*
  Generated class for the TurmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TurmaProvider {

    // public turma;

    constructor(public http: HttpClient, public dataApi: DataApiProvider, public database: DatabaseProvider) {

    }

    carregarTurmasAPI() {
        this.dataApi.getTurmas().subscribe(data => {
                let lista_turmas: any[];
                lista_turmas = (data as any);
                console.log(lista_turmas);

                for (var i = 0; i < lista_turmas.length; i++) {
                    // this.turma = new Turma();
                    console.log('turmaBd ' + i + ': ' + lista_turmas[i].descricao);
                    // this.turma.nome_unidade = lista_turmas[i].descricao;
                    this.database.criarTurma(lista_turmas[i].descricao, lista_turmas[i].turno, (lista_turmas[i].unidade));
                    console.log('turmaBd CRIADO -  ' + i + ': ' + lista_turmas[i].descricao);
                    // (descricao, turno, unidade_id)
                }
            }
            , error => {
                console.log(error)
            }
        )
    }


    carregarDisciplinasAPI() {
        this.dataApi.getDisciplinas().subscribe(data => {
                let listaDisciplinas: any[];
                listaDisciplinas = (data as any);
                console.log(listaDisciplinas);

                for (var i = 0; i < listaDisciplinas.length; i++) {
                    // this.turma = new Turma();
                    console.log('disciplinaBd ' + i + ': ' + listaDisciplinas[i].descricao);
                    // this.turma.nome_unidade = lista_turmas[i].descricao;
                    this.database.criarDisciplina( listaDisciplinas[i].professor, listaDisciplinas[i].nome );
                    console.log('disciplinaBd CRIADO -  ' + i + ': ' + listaDisciplinas[i].descricao);
                    // (descricao, turno, unidade_id)
                }
            }
            , error => {
                console.log(error)
            }
        )
    }
}
