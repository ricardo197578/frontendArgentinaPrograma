import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaRichard, ExperienciaRichardService } from 'src/app/SERVICE/experienciaRichard.service';

@Component({
  selector: 'app-agregar-experiencia-richard',
  templateUrl: './agregar-experiencia-richard.component.html',
  styleUrls: ['./agregar-experiencia-richard.component.css']
})
export class AgregarExperienciaRichardComponent implements OnInit {


  experienciaRichardNueva: ExperienciaRichard={id:'',empresa:'',fechaInicioExp:'',fechaFinExp:'',descripcionExp:'',imagenExp:''};

  constructor(private experienciaRichardService: ExperienciaRichardService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarExperienciaRichard(){
    this.experienciaRichardService.saveExperienciaRichard(this.experienciaRichardNueva).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/experiencia-richard']);
 },
      err=>console.log(err)
    );
  }

}

