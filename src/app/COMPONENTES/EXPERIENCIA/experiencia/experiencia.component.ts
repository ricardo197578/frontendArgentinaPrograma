import { Component, OnInit,Input } from '@angular/core';
import { ExperienciaService } from 'src/app/SERVICE/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() user!: string;	
  experiencias:any = [];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit() {
   this.cargarExperiencias();
  }

  cargarExperiencias(): void {
    this.experienciaService.lista().subscribe(data => {
      this.experiencias= data;
    },
(err: any) => {
        console.log(err);
      }
    );
  }
  onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.experienciaService.borrar(id).subscribe(data => {
        this.cargarExperiencias();
      });
    }
  }
}

