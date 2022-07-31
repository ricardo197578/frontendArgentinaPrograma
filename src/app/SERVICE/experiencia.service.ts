import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL ='https://richard2022.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  lista():Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + '/api/experiencia/lista');
  }

   public detalle(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + '/api/experiencia/detalle/{id}');
  }

   public crear(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + '/api/experiencia/nuevo', experiencia);
  }

  public editar(experiencia: Experiencia, id:number): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + '/api/experiencia/actualizar/{id}', experiencia);
  }

  public borrar(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + '/api/experiencia/borrar/${id}');
  } 
}

