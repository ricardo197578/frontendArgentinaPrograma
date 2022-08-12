import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaRichardService {

  url='https://richard2022.herokuapp.com/api/experiencia';
  constructor(private http: HttpClient) { }

  getExperienciasRichard():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaExperienciaRichard(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveExperienciaRichard(experienciaRichard: ExperienciaRichard):Observable<any>
  {
    return this.http.post(this.url, experienciaRichard);
  }

 editExperienciaRichard(id:string, experienciaRichard: ExperienciaRichard):Observable<any>
  {
    return this.http.put(this.url+'/'+id, experienciaRichard);
  }

  deleteExperienciaRichard(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface ExperienciaRichard{
  id?:string;
  empresa:string;
  fechaInicioExp:string;
  fechaFinExp:string;
  descripcionExp: string;
  imagenExp: string;
}

