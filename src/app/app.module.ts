import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDisciplinaComponent } from './componentes/add-disciplina/add-disciplina.component';
import { FindDisciplinaComponent } from './componentes/find-disciplina/find-disciplina.component';
import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';
import { FindAlunoComponent } from './componentes/find-aluno/find-aluno.component';
import { UpDelAlunoComponent } from './componentes/up-del-aluno/up-del-aluno.component';
import { UpDelDisciplinaComponent } from './componentes/up-del-disciplina/up-del-disciplina.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { UpModalComponent } from './componentes/up-del-disciplina/up-modal/up-modal.component';
import { UpModalAlunoComponent } from './componentes/up-del-aluno/up-modal-aluno/up-modal-aluno.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    AddDisciplinaComponent,
    FindDisciplinaComponent,
    AddAlunoComponent,
    FindAlunoComponent,
    UpDelAlunoComponent,
    UpDelDisciplinaComponent,
    UpModalComponent,
    UpModalAlunoComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [AddAlunoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
