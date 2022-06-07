import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';
import { AddDisciplinaComponent } from './componentes/add-disciplina/add-disciplina.component';
import { UpDelAlunoComponent } from './componentes/up-del-aluno/up-del-aluno.component';
import { UpDelDisciplinaComponent } from './componentes/up-del-disciplina/up-del-disciplina.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AddDisciplinaComponent},
  {path: 'add-aluno', component: AddAlunoComponent},
  {path: 'list-aluno', component: UpDelAlunoComponent},
  {path: 'add-disciplina', component: AddDisciplinaComponent},
  {path: 'list-disciplina', component: UpDelDisciplinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
