import { Component, OnInit } from '@angular/core';
import { Educacion,EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  lista:any=[];
  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }
 isLogged = false;

  ngOnInit(): void {
    this.listarEducaciones();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }

  listarEducaciones()
  {
    this.educacionService.getEducaciones().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.educacionService.deleteEducacion(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
   );
  }

}
       
