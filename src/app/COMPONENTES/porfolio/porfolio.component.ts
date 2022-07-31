import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/SERVICE/token.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

	info:any={};
  constructor(private tokenService: TokenService) { }

  ngOnInit() {

	   this.info = {
      token: this.tokenService.getToken(),
      nombreUsuario: this.tokenService.getUserName(),
      authorities: this.tokenService.getAuthorities()
    };
  }

}
