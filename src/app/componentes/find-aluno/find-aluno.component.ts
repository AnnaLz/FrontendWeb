import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { AlunoService } from 'src/app/services/aluno.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';

export interface Alunos {
  nome: string,
  nro_matricula: string,
  disciplinas: [],
  id: string
}

@Component({
  selector: 'app-find-aluno',
  templateUrl: './find-aluno.component.html',
  styleUrls: ['./find-aluno.component.css']
})

export class FindAlunoComponent implements OnInit {
  dadosAluno: FormGroup;
  dadosAlunoPesquisado: FormGroup;
  disciplinas = [];
  alunos: Alunos[] = [];
  disciplinasS: any = [];

  show = false;
  showWarning = false;

  constructor(private _formBuilder: FormBuilder, private alunoService: AlunoService, private disciplinaService: DisciplinaService) {}

  ngOnInit() {
    this.loadForm();

    this.alunoService.getAll()
    .subscribe((response) =>{
      this.alunos = response;
    });

    this.disciplinaService.getAll()
    .subscribe((response) =>{
      this.disciplinasS = response;
  });
    
  }

  loadForm(){
    this.dadosAluno = new FormGroup({
      nro_matricula: new FormControl(null, Validators.required),
    });
  }

  pesquisar(){
    let aluno, alunoPesquisado;
    let matricula = this.dadosAluno.value.nro_matricula;
    aluno = this.alunos.filter(a => { return a.nro_matricula == matricula});


    if(aluno[0] == undefined){
      this.showWarning = true;
      this.show = false;
    } else {
    this.alunoService.get(aluno[0].id)
    .subscribe((response) =>{
      alunoPesquisado = response;

      this.disciplinasS = alunoPesquisado.disciplinas;
      
      this.dadosAlunoPesquisado = new FormGroup({
        nro_matricula: new FormControl(alunoPesquisado.nro_matricula),
        nome: new FormControl(alunoPesquisado.nome),
        disciplinas: new FormControl('')
      });

      this.show = true;
      this.showWarning = false;
    });
  }

  }

}
