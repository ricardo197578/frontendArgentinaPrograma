import { Component, OnInit } from '@angular/core';
import { Tarea,TareaService } from 'src/app/service/tarea.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista:any=[];
  constructor(private tareaService: TareaService, private tokenService: TokenService) { }
 isLogged = false;

  ngOnInit(): void {
    this.listarTareas();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  listarTareas()
  {
    this.tareaService.getTareas().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.tareaService.deleteTarea(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
