import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/SERVICE/experiencia.service';


@Component({
  selector: 'app-nuevo-experiencia',
  templateUrl: './nuevo-experiencia.component.html',
  styleUrls: ['./nuevo-experiencia.component.css']
})
export class NuevoExperienciaComponent implements OnInit {

  form: any = {};
  experiencia: Experiencia= {tituloExp:'',fechaExp:'',descExp:'',imagenExp:''};
  creado = false;
  failExperiencia = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.experienciaService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failExperiencia = false;
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failExperiencia = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}
