import { Component, OnInit } from '@angular/core';
import { Persona,PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

	lista:any=[];
  constructor(private personaService: PersonaService, private tokenService: TokenService) { }
 isLogged = false;

  ngOnInit(): void {
    this.listarPersonas();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }


  listarPersonas()
  {
    this.personaService.getPersonas().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

}

