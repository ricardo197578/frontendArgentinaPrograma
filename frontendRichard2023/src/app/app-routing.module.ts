import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONETES/agregar/agregar.component';
import { EditarComponent } from './COMPONETES/editar/editar.component';
import { InicioComponent } from './COMPONETES/inicio/inicio.component';
import { AgregarExperienciaRichardComponent } from './COMPONETES/experienciaRichard/agregar-experiencia-richard/agregar-experiencia-richard.component';
import { PorfolioComponent } from './COMPONETES/porfolio/porfolio.component';
import { EditarExperienciaRichardComponent } from './COMPONETES/experienciaRichard/editar-experiencia-richard/editar-experiencia-richard.component';


import {IniciarSesionComponent} from './COMPONETES/iniciar-sesion/iniciar-sesion.component';
import { GuardService as guard} from 'src/app/guards/guard.service';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';


const routes: Routes = [
        {path:'porfolio', component:PorfolioComponent},
	
	//rutas tarea (componente de prueba)
	{path:'editar/:id', component: EditarComponent,
		canActivate: [guard], data: { expectedRol: ['admin']}},
	
        {path:'agregar', component:AgregarComponent,
	 canActivate: [guard], data: { expectedRol: ['admin']}},

	//rutas experiencia
  	{path:'agregar-experiencia-richard', component:AgregarExperienciaRichardComponent,canActivate: [guard], data: { expectedRol: ['admin']}},
  	{path:'editar-experiencia-richard/:id', component:EditarExperienciaRichardComponent,canActivate: [guard], data: { expectedRol: ['admin']}},
	//rutas admin
	{path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
         {path: 'user', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['user']}},

	 //rutas login y registro 
	  {path:'iniciar-sesion',component:IniciarSesionComponent},


 	 {path: '', redirectTo: 'porfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
