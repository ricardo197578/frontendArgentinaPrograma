import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion,EducacionService } from 'src/app/service/educacion.service';
@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  id:string="";
  educacionActual: Educacion={id:'',titulo:'',fecha:'',descripcion:'',imagen:''};
  constructor(
    private educacionService:EducacionService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params['id'];
    this.educacionService.getUnaEducacion(this.id).subscribe(
      res=>{
        this.educacionActual=res;
      },

      err=>console.log(err)
    );
  }
  guardad(){
    this.educacionService.editEducacion(this.id, this.educacionActual).subscribe(
      res=>{
        this.router.navigate(['/home']);
      },

      err=>console.log(err)
    );
  }

}

