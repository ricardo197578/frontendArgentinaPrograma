import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../model/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../model/jwt-model';
import { NuevoUsuario } from '../model/nuevo-usuario';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL ='https://richard2022.herokuapp.com/api/auth'; 
	  

  constructor(private httpClient: HttpClient) { }

 public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL +'/login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL+'nuevo', usuario, cabecera);
  }
}
