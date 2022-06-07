import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toAddAluno(){
    this.router.navigate(['/add-aluno']);
  }

  toAddDisciplina(){
    this.router.navigate(['/add-disciplina']);
  }

  toListAluno(){
    this.router.navigate(['/list-aluno']);
  }

  toListDisciplina(){
    this.router.navigate(['/list-disciplina']);
  }

  findAluno(){
    this.router.navigate(['/find-aluno']);
  }

  findDisciplina(){
    this.router.navigate(['/find-disciplina']);
  }

}
