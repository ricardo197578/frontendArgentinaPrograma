import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion, EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  educacionNueva: Educacion={id:'',titulo:'',fecha:'',descripcion:'',imagen:''};

  constructor(private educacionService: EducacionService,
	      private antivateRouter: ActivatedRoute,
	      private router:Router) { }

  ngOnInit(): void {

  }

  agregarEducacion(){
    this.educacionService.saveEducacion(this.educacionNueva).subscribe(
      res=>{
        console.log(res);
  this.router.navigate(['/']);


      },
      err=>console.log(err)
    );
  }

}

