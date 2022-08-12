import { Component, OnInit,Input } from '@angular/core';
import { ExperienciaRichardService } from 'src/app/SERVICE/experienciaRichard.service';

@Component({
  selector: 'app-experiencia-richard',
  templateUrl: './experiencia-richard.component.html',
  styleUrls: ['./experiencia-richard.component.css']
})
export class ExperienciaRichardComponent implements OnInit {

	@Input() user!: string;

 experiencia:any=[];
  constructor(private experienciaRichardService: ExperienciaRichardService) { }

  ngOnInit(): void {
    this.listarExperienciasRichard();
  }

  listarExperienciasRichard()
  {
    this.experienciaRichardService.getExperienciasRichard().subscribe(
      res=>{
        this.experiencia=res;
        console.log(res);
      },
      err=>console.log(err)
    );
}

  eliminar(id:string)
  {
    this.experienciaRichardService.deleteExperienciaRichard(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
