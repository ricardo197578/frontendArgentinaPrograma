import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url='https://richard2022.herokuapp.com/api/experiencia';
  constructor(private http: HttpClient) { }

  getExperiencias():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaExperiencia(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveExperiencia(experiencia: Experiencia):Observable<any>
  { return this.http.post(this.url, experiencia);
  }

  editExperiencia(id:string, experiencia: Experiencia):Observable<any>
  {
    return this.http.put(this.url+'/'+id, experiencia);
  }

  deleteExperiencia(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}
 export interface Experiencia{
  id:string;
  empresa:string;
  fechaInicioExp:string;
  fechaFinExp:string;
  descripcionExp:string;
  imagenExp:string;

}

