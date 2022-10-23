import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url='https://richard2022.herokuapp.com/api/habilidades';
  constructor(private http: HttpClient) { }

  getSkillss():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaSkills(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveSkills(skills: Skills):Observable<any>
  {
    return this.http.post(this.url, skills);
  }

  editSkills(id:string, skills: Skills):Observable<any>
  {
    return this.http.put(this.url+'/'+id, skills);
  }

  deleteSkills(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Skills{
  id:string;
  imagen:string;
  descripcion:string;
}

