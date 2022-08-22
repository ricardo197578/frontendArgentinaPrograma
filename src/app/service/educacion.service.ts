import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url='https://richard2022.herokuapp.com/api/educacion';
  constructor(private http: HttpClient) { }

  getEducaciones():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaEducacion(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }
 saveEducacion(educacion: Educacion):Observable<any>
  {
    return this.http.post(this.url, educacion);
  }

  editEducacion(id:string, educacion: Educacion):Observable<any>
  {
    return this.http.put(this.url+'/'+id, educacion);
  }

  deleteEducacion(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}
  export interface Educacion{
  id:string;
  titulo:string;
  fecha:string;
  descripcion:string;
  imagen:string;
}
   
