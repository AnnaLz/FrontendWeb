import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpModalAlunoComponent } from './up-modal-aluno/up-modal-aluno.component';

export interface dadosAluno {
  nome: string,
  nro_matricula: string,
  disciplinas: []
}

const ELEMENT_DATA: dadosAluno[] = []

@Component({
  selector: 'app-up-del-aluno',
  templateUrl: './up-del-aluno.component.html',
  styleUrls: ['./up-del-aluno.component.css']
})
export class UpDelAlunoComponent implements OnInit {
  @ViewChild('table', {static: false}) table: MatTable<dadosAluno>

  displayedColumns: string[] = ['nome', 'nro_matricula', 'disciplinas', 'acoes'];
  dataSource = ELEMENT_DATA;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.alunoService.getAll()
      .subscribe((response) =>{
        this.dataSource = response;
        console.log(this.dataSource)
      })
  }

  updateAluno(aluno: any):void{
    const dialogRef = this.dialog.open(UpModalAlunoComponent, {
      width: '550px',
      data: {contexto: "edit", id: aluno.id, nome: aluno.nome, nro_matricula: aluno.nro_matricula, disciplinas: aluno.disciplinas},
    });
  }

  deleteAluno(id: any):void{
    // const dialogRef = this.dialog.open(UpModalComponent, {
    //   width: '300px',
    //   height: '210px',
    //   data: {contexto: "delete", id: id},
    // });
  }
}
