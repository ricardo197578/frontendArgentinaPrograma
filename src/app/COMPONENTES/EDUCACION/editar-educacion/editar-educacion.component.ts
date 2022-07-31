import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/SERVICE/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {


  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
  //this.educacionService.detalle(id).subscribe( data => {

 this.educacionService.detalle(id).subscribe( data => {
      this.form.tituloEdu = data.tituloEdu;
      this.form.fechaEdu = data.fechaEdu;
      this.form.descEdu = data.descEdu;
      this.form.imagenEdu = data.imagenEdu;
    },
      (err: any) => {
        this.failInit = true;
       // this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.editar(this.form, id).subscribe( data => {
      this.actualizado = true;
      this.failActualizado = false;
      this.msjOK = data.mensaje;
    },
    (err: any) => {
      this.actualizado = false;
      this.failActualizado = true;
      this.msjErr = err.error.mensaje;
    }
    );
  }

  volver(): void {
    window.history.back();
  }

}
