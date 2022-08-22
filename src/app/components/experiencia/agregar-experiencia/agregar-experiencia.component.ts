import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia, ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  experienciaNueva: Experiencia={id:'',empresa:'',fechaInicioExp:'',fechaFinExp:'',descripcionExp:'',imagenExp:''};

  constructor(private experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {

  }
 
   agregarExperiencia(){
    this.experienciaService.saveExperiencia(this.experienciaNueva).subscribe(
      res=>{
        console.log(res);
  this.router.navigate(['/']);

      },
      err=>console.log(err)
    );
  }

}

