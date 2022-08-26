import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona,PersonaService } from 'src/app/service/persona.service';
@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  id:string="";
  personaActual: Persona={id:'',nombre:'',apellido:'',titulo:'',descripcion:'',imagen:''};
  constructor(
    private personaService:PersonaService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params['id'];
    this.personaService.getUnaPersona(this.id).subscribe(
      res=>{
        this.personaActual=res;
      },

      err=>console.log(err)
    );
  }
  guardad(){
    this.personaService.editPersona(this.id, this.personaActual).subscribe(
      res=>{
        this.router.navigate(['/']);
      },

      err=>console.log(err)
    );
  }


}
