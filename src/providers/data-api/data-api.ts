import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";

/*
  Generated class for the DataApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataApiProvider {

    basepath = '/api';

    constructor(public http: HttpClient,
        private _platform: Platform) {
        if (this._platform.is("cordova")) {
            this.basepath = 'http://10.20.30.162:8000';
        }
        else {
            this.basepath = 'http://10.20.30.162:8000';
        }
        console.log('basepath' + this.basepath);
    }

    getProfessores() {
        return this.http.get('http://10.20.30.162:8000/api/professor')
    }

    getUnidades() {
        return this.http.get('http://10.20.30.162:8000/api/unidade')
    }

    getTurmas() {
        return this.http.get('http://10.20.30.162:8000/api/turma')
    }

    getTurmasUnidade(unidade_id) {
        return this.http.get('http://10.20.30.162:8000/api/unidade/' + unidade_id)
    }

    getAlunosTurmas(turma_id) {
        return this.http.get('http://10.20.30.162:8000/api/turma/' + turma_id)
    }

    getDetalheAluno(aluno_id) {
        return this.http.get('http://10.20.30.162:8000/api/aluno/' + aluno_id)
    }

}
