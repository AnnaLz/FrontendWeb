import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { DisciplinaService } from 'src/app/services/disciplina.service'

@Component({
  selector: 'app-add-disciplina',
  templateUrl: './add-disciplina.component.html',
  styleUrls: ['./add-disciplina.component.css']
})
export class AddDisciplinaComponent implements OnInit {

  body = {
    nome: '',
    codigo: '',
    creditos: null
  }

  dadosDisciplinas: FormGroup

  submited = false;

  constructor(private disciplinaServive : DisciplinaService) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.dadosDisciplinas = new FormGroup({
      codigo: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      creditos: new FormControl(null, Validators.required)
    });
  }

  loadObject(){
    this.body.nome = this.dadosDisciplinas.value.nome;
    this.body.creditos = this.dadosDisciplinas.value.creditos;
    this.body.codigo = this.dadosDisciplinas.value.codigo;

    return this.body;
  }


  saveDisciplina():void{
    let data = this.loadObject();

    this.disciplinaServive.create(data)
      .subscribe(response => {
          // console.log(response)
      });
  }

  newDisciplina():void{
    this.dadosDisciplinas.patchValue({
      nome: null,
      codigo: null,
      creditos: null
    });
  }
}
