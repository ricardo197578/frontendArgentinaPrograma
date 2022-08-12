import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaRichard,ExperienciaRichardService } from 'src/app/SERVICE/experienciaRichard.service';

@Component({
  selector: 'app-editar-experiencia-richard',
  templateUrl: './editar-experiencia-richard.component.html',
  styleUrls: ['./editar-experiencia-richard.component.css']
})
export class EditarExperienciaRichardComponent implements OnInit {

  id:string="";
  experienciaRichardActual: ExperienciaRichard={id:'',empresa:'',fechaInicioExp:'',fechaFinExp:'',descripcionExp:'',imagenExp:''};

  constructor(
    private experienciaRichardService:ExperienciaRichardService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }
 ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params['id'];
    this.experienciaRichardService.getUnaExperienciaRichard(this.id).subscribe(
      res=>{
        this.experienciaRichardActual=res;
      },

      err=>console.log(err)
    );
  }

  guardad(){
    this.experienciaRichardService.editExperienciaRichard(this.id, this.experienciaRichardActual).subscribe(
      res=>{
        this.router.navigate(['/porfolio']);
	
      },

      err=>console.log(err)
    );
  }

}

