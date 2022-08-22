import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia,ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  id:string="";
  experienciaActual: Experiencia={id:'',empresa:'',fechaInicioExp:'',fechaFinExp:'',descripcionExp:'',imagenExp:''};
  constructor(
    private experienciaService:ExperienciaService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params['id'];
    this.experienciaService.getUnaExperiencia(this.id).subscribe(
      res=>{
        this.experienciaActual=res;
      },

      err=>console.log(err)
    );
  }
  guardad(){
    this.experienciaService.editExperiencia(this.id, this.experienciaActual).subscribe(
      res=>{
        this.router.navigate(['']);
      },

      err=>console.log(err)
    );
  }

}
               
