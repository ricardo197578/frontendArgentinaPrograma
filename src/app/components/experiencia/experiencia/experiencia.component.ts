import { Component, OnInit } from '@angular/core';
import { Experiencia,ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

	lista:any=[];
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }
 isLogged = false;

  ngOnInit(): void {
    this.listarExperiencias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }

  listarExperiencias()
  {
    this.experienciaService.getExperiencias().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.experienciaService.deleteExperiencia(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
