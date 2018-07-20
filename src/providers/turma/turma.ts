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
                for (var i = 0; i < lista_turmas.length; i++) {
                    this.database.criarTurma(lista_turmas[i].descricao, lista_turmas[i].turno, (lista_turmas[i].unidade));
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
                for (var i = 0; i < listaDisciplinas.length; i++) {
                    this.database.criarDisciplina(listaDisciplinas[i].professor, listaDisciplinas[i].nome);
                }
            }
            , error => {
                console.log(error)
            }
        )
    }

    carregarAlunosAPI() {
        this.dataApi.getAlunos().subscribe(data => {
                let listaAlunos: any[];
                listaAlunos = (data as any);
                console.log(listaAlunos);

                for (var i = 0; i < listaAlunos.length; i++) {
                    this.database.criarAluno(listaAlunos[i].nome_aluno, listaAlunos[i].turma);
                }
            }
            , error => {
                console.log(error)
            }
        )
    }
}
