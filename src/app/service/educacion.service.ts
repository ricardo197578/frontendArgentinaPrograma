import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url='http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getEducaciones():Observable<any>
  {
    return this.http.get(this.url+'/educacion');
  }

  getUnaEducacion(id: string):Observable<any>
  {
    return this.http.get(this.url+'/educacion'+id);
  }
 saveEducacion(educacion: Educacion):Observable<any>
  {
    return this.http.post(this.url+'/guardar', educacion);
  }

  editEducacion(id:string, educacion: Educacion):Observable<any>
  {
    return this.http.put(this.url+'/'+id, educacion);
  }

  deleteEducacion(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/eliminar/'+id);
  }
}
  export interface Educacion{
  id:string;
  titulo:string;
  fecha:string;
  descripcion:string;
  imagen:string;
}
   
