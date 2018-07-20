import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DatabaseProvider {

    private db: SQLiteObject;
    private isOpen: boolean;
    private unidades = [];
    private turmas = [];
    private users = [];
    private disciplinas = [];
    private alunos = [];
    private aulas = [];
    private frequencias = [];
    private unidadeProfessor = [];


    constructor(public http: HttpClient, private storage: SQLite) {
        if (!this.isOpen) {
            this.storage = new SQLite();
            this.storage.create({name: "banco.db", location: "default"}).then((db: SQLiteObject) => {
                this.db = db;
                db.executeSql("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, cpf VARCHAR(255), nome VARCHAR(255),senha VARCHAR(255))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS unidade (id INTEGER PRIMARY KEY AUTOINCREMENT, nome_unidade VARCHAR(255))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS turma (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(255), turno VARCHAR(255), unidade_id INT REFERENCES unidade(id))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS aluno (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(255), turma_id INT REFERENCES turma(id))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS aula (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(255), turma_id INT REFERENCES turma(id), data DATE)", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS frequencia (id INTEGER PRIMARY KEY AUTOINCREMENT, aluno_id INT REFERENCES aluno(id), presente BOOLEAN, aula_id INT REFERENCES aula(id))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS disciplina (id INTEGER PRIMARY KEY AUTOINCREMENT, professor_id INT REFERENCES professor(id), descricao VARCHAR(255))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS unidadeprofessor (id INTEGER PRIMARY KEY AUTOINCREMENT, unidade_id INT REFERENCES unidade(id), professor_id INT REFERENCES professor(id))", []);
                db.executeSql("CREATE TABLE IF NOT EXISTS notaaluno (id INTEGER PRIMARY KEY AUTOINCREMENT, aluno_id INT REFERENCES aluno(id), nota FLOAT NOT NULL, semestre VARCHAR(255), disciplina INT REFERENCES disciplina(id))", []);
                this.isOpen = true;
            }).catch((error) => {
                console.log('error')
            })
        }
        // this.getTodosUsuariosBD();
    }


    criarUsuario(cpf, nome, senha) {
        return new Promise((resolve, reject) => {
            let sql = "insert into user (cpf, nome, senha) values (?,?,?)";
            this.db.executeSql(sql, [cpf, nome, senha]).then((data) => {
                resolve(data);
                console.log('Usuario Cadastro')
            }, (error) => {
                reject(error);
                console.log('Erro ao cadastrar usuario')
            })
        })
    }


    criarTurma(descricao, turno, unidade_id) {
        return new Promise((resolve, reject) => {
            let sql = "insert into turma (descricao, turno, unidade_id) values (?,?,?)";
            this.db.executeSql(sql, [descricao, turno, unidade_id]).then((data) => {
                resolve(data);
                console.log('Turma Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('erro -> ' + error);
                console.log('Erro ao salvar Turma')
            })
        })
    }


    getTurmasBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM turma;", []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.turmas.push({
                            id: data.rows.item(i).id,
                            descricao: data.rows.item(i).descricao,
                            turno: data.rows.item(i).turno,
                            unidade_id: data.rows.item(i).unidade_id,
                        });
                    }
                }
                resolve(this.turmas);
            }, (error) => {
                reject(error);
            })
        })
    }

    getTurmasUnidadeBD(unidade_id) {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM turma WHERE unidade_id = ?;", [unidade_id]).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.turmas.push({
                            id: data.rows.item(i).id,
                            descricao: data.rows.item(i).descricao,
                            turno: data.rows.item(i).turno,
                            unidade_id: data.rows.item(i).unidade_id,
                        });
                    }
                }
                resolve(this.turmas);
            }, (error) => {
                reject(error);
            })
        })
    }


    criarUnidade(nome_unidade) {
        return new Promise((resolve, reject) => {
            let sql = "insert into unidade (nome_unidade) values (?)";
            this.db.executeSql(sql, [nome_unidade]).then((data) => {
                resolve(data);
                console.log('Unidade Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('Erro ao salvar unidade')
            })
        })
    }


    criarAluno(nome, turma_id) {
        return new Promise((resolve, reject) => {
            let sql = "insert into aluno ( nome, turma_id ) values ( ? , ? )";
            this.db.executeSql(sql, [nome, turma_id]).then((data) => {
                resolve(data);
                console.log('Aluno Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('Erro ao salvar aluno')
            })
        })
    }

    getAlunosBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM aluno;", []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.alunos.push({
                            id: data.rows.item(i).id,
                            nome: data.rows.item(i).nome,
                            turma_id: data.rows.item(i).turma_id,
                        });
                    }
                }
                resolve(this.alunos);
            }, (error) => {
                reject(error);
            })
        })
    }

    alunosTurma(turma_id) {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM aluno WHERE turma_id = ?;", [turma_id]).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                            this.alunos.push({
                                id: data.rows.item(i).id,
                                nome: data.rows.item(i).nome,
                                turma_id: data.rows.item(i).turma_id,
                            });
                    }
                }
                resolve(this.alunos);
            }, (error) => {
                reject(error);
            })
        })
    }


    criarAula(descricao, turma_id) {
        return new Promise((resolve, reject) => {
            let sql = "insert into aula ( descricao, turma_id ) values ( ? , ? )";
            this.db.executeSql(sql, [descricao, turma_id]).then((data) => {
                resolve(data);
                console.log('Aula Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('Erro ao salvar aula')
            })
        })
    }


    getAulasBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM aula;", []).then((data) => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.aulas.push({
                            id: data.rows.item(i).id,
                            descricao: data.rows.item(i).descricao,
                            turma_id: data.rows.item(i).turma_id,
                        });
                    }
                }
                resolve(this.aulas);
            }, (error) => {
                reject(error);
            })
        })
    }


    criarFrequencia(aluno_id, presenca, aula_id) {
        return new Promise((resolve, reject) => {
            let sql = "insert into frequencia ( aluno_id, presenca, aula_id ) values ( ? , ? , ? )";
            this.db.executeSql(sql, [aluno_id, presenca, aula_id]).then((data) => {
                resolve(data);
                console.log('Frequencia Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('Erro ao salvar Frequencia')
            })
        })
    }


    getFrequenciasBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM frequencia;", []).then((data) => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.frequencias.push({
                            id: data.rows.item(i).id,
                            aluno_id: data.rows.item(i).aluno_id,
                            presenca: data.rows.item(i).presenca,
                            aula_id: data.rows.item(i).aula_id,
                        });
                    }
                }
                resolve(this.frequencias);
            }, (error) => {
                reject(error);
            })
        })
    }


    criarUnidadeProfessor(unidade_id, professor_id) {
        return new Promise((resolve, reject) => {
            let sql = "insert into unidadeprofessor ( unidade_id, professor_id ) values ( ? , ? )";
            this.db.executeSql(sql, [unidade_id, professor_id]).then((data) => {
                resolve(data);
                console.log('Frequencia Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('Erro ao salvar Frequencia')
            })
        })
    }

    getUnidadeProfessorBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM unidadeprofessor;", []).then((data) => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.unidadeProfessor.push({
                            id: data.rows.item(i).id,
                            unidade_id: data.rows.item(i).unidade_id,
                            professor_id: data.rows.item(i).professor_id,
                        });
                    }
                }
                resolve(this.unidadeProfessor);
            }, (error) => {
                reject(error);
            })
        })
    }


    criarDisciplina(professor_id, descricao) {
        return new Promise((resolve, reject) => {
            let sql = "insert into disciplina ( professor_id, descricao ) values ( ? , ? )";
            this.db.executeSql(sql, [professor_id, descricao]).then((data) => {
                resolve(data);
                console.log('Disciplina Salva Banco de Dados')
            }, (error) => {
                reject(error);
                console.log('Erro ao salvar Disciplina')
            })
        })
    }

    getDisciplinasBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM disciplina;", []).then((data) => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.disciplinas.push({
                            id: data.rows.item(i).id,
                            professor_id: data.rows.item(i).professor_id,
                            descricao: data.rows.item(i).descricao,
                        });
                    }
                }
                resolve(this.disciplinas);
            }, (error) => {
                reject(error);
            })
        })
    }


    getTodosUsuariosBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM user;", []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.users.push({
                            id: data.rows.item(i).id,
                            cpf: data.rows.item(i).cpf,
                            nome: data.rows.item(i).nome,
                            // senha: data.rows.item(i).senha,
                        });
                    }
                }
                resolve(this.users);
            }, (error) => {
                reject(error);
            })
        })
    }


    getTodasUnidadesBD() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM unidade;", []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.unidades.push({
                            id: data.rows.item(i).id,
                            nome: data.rows.item(i).nome_unidade,
                        });
                    }
                }
                resolve(this.unidades);
            }, (error) => {
                reject(error);
            })
        })
    }


    getUnidades() {
        return this.unidades;
    }

    getAulas() {
        return this.aulas;
    }

    geTurmas() {
        return this.turmas;
    }

    getDisciplinas() {
        return this.disciplinas;
    }

    getFrequencias() {
        return this.frequencias;
    }

    getUnidadeProfessor() {
        return this.unidadeProfessor;
    }

    getAlunos() {
        return this.alunos;
    }

    getUsers() {
        return this.users;
    }
}



