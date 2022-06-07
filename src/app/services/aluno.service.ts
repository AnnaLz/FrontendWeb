import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor( private http: HttpClient) { }
  
  create(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/addAluno`, data);
  }

  get(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/aluno/${id}`);
  }

  getAll(): Observable<any>{
    return this.http.get(`${baseUrl}/aluno`);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/editarAluno/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/deletarAluno/${id}`);
  }
  
}
