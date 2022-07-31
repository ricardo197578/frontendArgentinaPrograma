import { Component, OnInit,Input } from '@angular/core';
import { Persona} from 'src/app/model/persona';
import {PersonaService} from 'src/app/SERVICE/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

       @Input() user!: string;

	persona: Persona = new Persona(" "," "," "," "," ");

  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
          this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
