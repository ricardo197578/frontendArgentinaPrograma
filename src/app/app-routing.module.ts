import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PorfolioComponent} from './COMPONENTES/porfolio/porfolio.component';
import {IniciarSesionComponent} from './COMPONENTES/iniciar-sesion/iniciar-sesion.component';


import { NuevoExperienciaComponent } from './COMPONENTES/EXPERIENCIA/nuevo-experiencia/nuevo-experiencia.component';
import { NuevoEducacionComponent } from './COMPONENTES/EDUCACION/nuevo-educacion/nuevo-educacion.component'
import { EditarExperienciaComponent } from './COMPONENTES/EXPERIENCIA/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './COMPONENTES/EDUCACION/editar-educacion/editar-educacion.component';


//import { LoginComponent } from './auth/login/login.component';

import { GuardService as guard} from 'src/app/guards/guard.service';

import { AdminComponent } from './users/admin/admin.component';

import { UserComponent } from './users/user/user.component';

const routes: Routes = [
	{path:'porfolio',component:PorfolioComponent},
//	{path:'iniciar-sesion',component:IniciarSesionComponent},
	//rutas producto


//educacion
        {path:'nuevo-educacion', component:NuevoEducacionComponent,
	 canActivate: [guard], data: { expectedRol: ['admin']}},

	 {path:'editar-educacion', component:EditarEducacionComponent,
         canActivate: [guard], data: { expectedRol: ['admin']}},
//experiencia
	{path:'nuevo-experiencia', component:NuevoExperienciaComponent,
         canActivate: [guard], data: { expectedRol: ['admin']}},
        {path:'editar-experiencia', component:EditarExperienciaComponent,
	 canActivate: [guard], data: { expectedRol: ['admin']}},
//rutas admin
	{path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
         {path: 'user', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['user']}},

//rutas login y registro
       // {path:'login',component: LoginComponent},
	 {path:'iniciar-sesion',component:IniciarSesionComponent},

	{path:'',redirectTo:'porfolio',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
