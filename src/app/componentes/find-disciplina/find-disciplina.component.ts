import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';

export interface Disciplinas {
  nome: string,
  creditos: number,
  codigo: string,
  id: string
}

@Component({
  selector: 'app-find-disciplina',
  templateUrl: './find-disciplina.component.html',
  styleUrls: ['./find-disciplina.component.css']
})
export class FindDisciplinaComponent implements OnInit {
  dadosDisciplina: FormGroup;
  dadosDisciplinaPesquisada: FormGroup;
  disciplinas: Disciplinas[] = [];

  show = false;
  showWarning = false;

  constructor(private _formBuilder: FormBuilder, private disciplinaService: DisciplinaService) {}

  ngOnInit() {
    this.loadForm();

    this.disciplinaService.getAll()
    .subscribe((response) =>{
      this.disciplinas = response;
  });
    
  }

  loadForm(){
    this.dadosDisciplina = new FormGroup({
      codigo: new FormControl(null, Validators.required),
    });
  }

  pesquisar(){
    let disciplina, disciplinaPesquisado;
    let codigo = this.dadosDisciplina.value.codigo;
    
    disciplina = this.disciplinas.filter(d => { return d.codigo == codigo});

    if(disciplina[0] == undefined){
      this.showWarning = true;
      this.show = false;
    } else {
      this.disciplinaService.get(disciplina[0].id)
      .subscribe((response) =>{
        disciplinaPesquisado = response;
        
        this.dadosDisciplinaPesquisada = new FormGroup({
          nome: new FormControl(disciplinaPesquisado.nome),
          codigo: new FormControl(disciplinaPesquisado.codigo),
          creditos: new FormControl(disciplinaPesquisado.creditos)
        });
  
        this.show = true;
        this.showWarning = false;
      });
    }  
  }
}
