import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-up-modal',
  templateUrl: './up-modal.component.html',
  styleUrls: ['./up-modal.component.css']
})
export class UpModalComponent implements OnInit {
  dadosDisciplinas: FormGroup;
  body = {
    nome: '',
    codigo: '',
    creditos: null
  }

  show = false;

  constructor(private disciplinaService : DisciplinaService, public dialogRef: MatDialogRef<UpModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadForm();
    if(this.data.contexto === 'edit'){
      this.show = true;
      
      this.dadosDisciplinas.patchValue({
        codigo: this.data.codigo,
        nome: this.data.nome,
        creditos: this.data.creditos
      });
    } else {
      this.show = false;
    }
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

    this.disciplinaService.update(this.data.id, data)
      .subscribe(response => {
          this.dialogRef.close();
          location.reload();
      });
  }

  deleteDisciplina():void{

    this.disciplinaService.delete(this.data.id)
      .subscribe(response => {
          this.dialogRef.close();
          location.reload();
      });
  }

  dismiss(){
    this.dialogRef.close();
  }
}
