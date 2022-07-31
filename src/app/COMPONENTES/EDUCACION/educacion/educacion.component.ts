import { Component, OnInit,Input } from '@angular/core';
import {Educacion} from 'src/app/model/educacion'
import {EducacionService} from 'src/app/SERVICE/educacion.service';
//import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() user!: string;		
  educaciones:any = [];
  constructor(private educacionService: EducacionService) { }

  ngOnInit() {
    this.cargarEducaciones();
  }

 cargarEducaciones():void{
	this.educacionService.lista().subscribe(data => {
      this.educaciones= data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.educacionService.borrar(id).subscribe(data => {
        this.cargarEducaciones();
      });
    }
  }

}
