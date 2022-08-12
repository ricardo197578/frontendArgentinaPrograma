import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/SERVICE/auth.service';
import { TokenService } from 'src/app/SERVICE/token.service';
import { Router } from '@angular/router';

@Component({

	selector: 'app-iniciar-sesion', 
   	templateUrl: './iniciar-sesion.component.html', 
	styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form: any = {};
 
  usuario!:LoginUsuario;
  
  isLogged = false;
  isLogginFail = false;
  roles: string[] = [];
  errorMsg!:string;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit():void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password);

    this.authService.login(this.usuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);

      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      window.location.reload();
    },
      (err: any) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMsg = err.error.message;
      }
    );
  }
}

