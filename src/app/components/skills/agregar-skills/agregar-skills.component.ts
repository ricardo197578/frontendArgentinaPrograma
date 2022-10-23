import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills,SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-agregar-skills',
  templateUrl: './agregar-skills.component.html',
  styleUrls: ['./agregar-skills.component.css']
})
export class AgregarSkillsComponent implements OnInit {

  
  skillsNueva: Skills={id:'',descripcion:'',imagen:''};

  constructor(private skillsService: SkillsService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarSkills(){
    this.skillsService.saveSkills(this.skillsNueva).subscribe(
      res=>{
        console.log(res);
  this.router.navigate(['/']);

      },
      err=>console.log(err)
    );
  }

}

