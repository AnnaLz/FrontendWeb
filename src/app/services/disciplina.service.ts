import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/addDiscip`, data);
  }

  get(id: any): Observable<any>{
    return this.http.get(`${baseUrl}/disciplina/${id}`)
  }

  getAll(): Observable<any>{
    return this.http.get(`${baseUrl}/disciplina`)
  }

  update(id: any, data: any): Observable <any>{
    return this.http.put(`${baseUrl}/editar/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/deletar/${id}`);
  }

}
