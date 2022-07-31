import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Educacion} from '../model/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

	educacionURL ='https://richard2022.herokuapp.com';              
	constructor(private httpClient: HttpClient) { }

     	lista():Observable<Educacion>{ 
		return this.httpClient.get<Educacion>(this.educacionURL + '/api/educacion/lista');
       	}
	
 public detalle(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.educacionURL + '/api/educacion/detalle/{id}');
  }

  public crear(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.educacionURL + '/api/educacion/nuevo', educacion);
  }

  public editar(educacion: Educacion, id: number): Observable<any> {
    return this.httpClient.put<any>(this.educacionURL + '/api/educacion/actualizar/{id}', educacion);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL + '/api/educacion/borrar/${id}');
  }
}
