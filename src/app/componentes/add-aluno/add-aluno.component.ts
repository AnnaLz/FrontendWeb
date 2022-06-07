import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css']
})
export class AddAlunoComponent implements OnInit {
  submited = false;
  dadosAlunos: FormGroup;
  disciplinas = [];

  body = {
    nome: '',
    nro_matricula: '',
    disciplinas: []
  }

  disciplinasS: any = [];

  constructor(private alunoService : AlunoService, private disciplinaService: DisciplinaService, public http: HttpClient) { }

  ngOnInit(): void {
    this.loadForm();
    this.disciplinaService.getAll()
      .subscribe((response) =>{
        this.disciplinasS = response;
    });
  }

  loadForm(){
    this.dadosAlunos = new FormGroup({
      nro_matricula: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      disciplinas: new FormControl(this.disciplinas, Validators.required)
    });
  }

  loadObject(){
    this.body.nome = this.dadosAlunos.value.nome;
    this.body.nro_matricula = this.dadosAlunos.value.nro_matricula;
    this.body.disciplinas = this.dadosAlunos.value.disciplinas;

    return this.body;
  }

  saveAluno():void{
    let data = this.loadObject()

    this.alunoService.create(data)
      .subscribe(response => {
          // console.log(response)
      });
  }

  newAluno():void{
    this.dadosAlunos.patchValue({
      nro_matricula: null,
      nome: null,
      disciplinas: []
    });
  }
}
