import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/SERVICE/educacion.service';

@Component({
  selector: 'app-nuevo-educacion',
  templateUrl: './nuevo-educacion.component.html',
  styleUrls: ['./nuevo-educacion.component.css']
})
export class NuevoEducacionComponent implements OnInit {

  form: any = {};
  educacion: Educacion={tituloEdu:'',fechaEdu:'',descEdu:'',imagenEdu:''};
  creado = false;
  failEducacion = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private educacionService: EducacionService) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.educacionService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failEducacion = false;
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failEducacion = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}
