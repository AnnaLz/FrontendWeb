import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlunoService } from 'src/app/services/aluno.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { UpModalComponent } from '../../up-del-disciplina/up-modal/up-modal.component';

@Component({
  selector: 'app-up-modal-aluno',
  templateUrl: './up-modal-aluno.component.html',
  styleUrls: ['./up-modal-aluno.component.css']
})
export class UpModalAlunoComponent implements OnInit {
  dadosAlunos: FormGroup;
  body = {
    nome: '',
    nro_matricula: '',
    disciplinas: []
  }

  show = false;
  
  disciplinasS: any = [];

  constructor(private alunoService : AlunoService, private disciplinaService : DisciplinaService, public dialogRef: MatDialogRef<UpModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadForm();
    console.log(this.data)
    if(this.data.contexto === 'edit'){
      this.show = true;

      this.disciplinaService.getAll()
      .subscribe((response) =>{
        this.disciplinasS = response;
      });

      this.dadosAlunos.patchValue({
        nome: this.data.nome,
        nro_matricula: this.data.nro_matricula,
        // disciplinas: this.selecionadas
      });

    } else {
      this.show = false;
    }
  }

  loadForm(){
    this.dadosAlunos = new FormGroup({
      nro_matricula: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      disciplinas: new FormControl(this.data.disciplinas, Validators.required)
    });
  }

  loadObject(){
    this.body.nome = this.dadosAlunos.value.nome;
    this.body.nro_matricula = this.dadosAlunos.value.nro_matricula;
    this.body.disciplinas = this.dadosAlunos.value.disciplinas;

    return this.body;
  }


  saveAluno():void{
    let data = this.loadObject();

    this.alunoService.update(this.data.id, data)
      .subscribe(response => {
          // console.log(response)
          this.dialogRef.close();
          location.reload();
      });
  }

  deleteAluno():void{

    this.alunoService.delete(this.data.id)
      .subscribe(response => {
          // console.log(response)
          this.dialogRef.close();
          location.reload();
      });
  }

  dismiss(){
    this.dialogRef.close();
  }

}
