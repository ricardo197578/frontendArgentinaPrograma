import { Component, OnInit } from '@angular/core';
import { Skills,SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  lista:any=[];
  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }
 isLogged = false;

  ngOnInit(): void {
    this.listarSkillss();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }

  listarSkillss()
  {
    this.skillsService.getSkillss().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.skillsService.deleteSkills(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
   );
  }

}

