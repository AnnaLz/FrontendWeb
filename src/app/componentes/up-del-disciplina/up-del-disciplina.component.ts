import { Component, OnInit, ViewChild } from '@angular/core';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpModalComponent } from './up-modal/up-modal.component';

export interface dadosDisciplina {
  nome: string,
  codigo: string,
  creditos: number
}

const ELEMENT_DATA: dadosDisciplina[] = []

@Component({
  selector: 'app-up-del-disciplina',
  templateUrl: './up-del-disciplina.component.html',
  styleUrls: ['./up-del-disciplina.component.css']
})
export class UpDelDisciplinaComponent implements OnInit {
  @ViewChild('table', {static: false}) table: MatTable<dadosDisciplina>

  displayedColumns: string[] = ['nome', 'codigo', 'creditos', 'acoes'];
  dataSource = ELEMENT_DATA;

  constructor(
    private disciplinaService: DisciplinaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.disciplinaService.getAll()
      .subscribe((response) =>{
        this.dataSource = response;
      })
  }

  updateDisciplina(disciplina: any):void{
    const dialogRef = this.dialog.open(UpModalComponent, {
      width: '550px',
      data: {contexto: "edit", id: disciplina.id, nome: disciplina.nome, codigo: disciplina.codigo, creditos: disciplina.creditos},
    });
  }

  deleteDisciplina(id: any):void{
    const dialogRef = this.dialog.open(UpModalComponent, {
      width: '300px',
      height: '210px',
      data: {contexto: "delete", id: id},
    });
  }

}
