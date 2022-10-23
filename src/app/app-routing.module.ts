import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { EditarComponent } from './components/inicio/editar/editar.component';
import { AgregarComponent } from './components/inicio/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';

import { AgregarEducacionComponent } from './components/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { AgregarExperienciaComponent } from './components/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { AgregarSkillsComponent } from './components/skills/agregar-skills/agregar-skills.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'editar/:id', component: EditarComponent},
  { path:'agregar', component: AgregarComponent},
  { path:'agregar-educacion', component: AgregarEducacionComponent },
  { path:'editar-educacion/:id',component: EditarEducacionComponent},
  { path:'agregar-experiencia',component:AgregarExperienciaComponent },
  { path:'editar-experiencia/:id',component:EditarExperienciaComponent },
  { path:'editar-acerca-de/:id',component:EditarAcercaDeComponent},
  { path:'agregar-skills',component:AgregarSkillsComponent },
  { path:'', component: HomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
