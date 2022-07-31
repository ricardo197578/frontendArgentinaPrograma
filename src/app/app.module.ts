import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LogoApComponent } from './COMPONENTES/logo-ap/logo-ap.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';
import { AcercaDeComponent } from './COMPONENTES/acerca-de/acerca-de.component';
import { EducacionComponent } from './COMPONENTES/EDUCACION/educacion/educacion.component';
import { ExperienciaComponent } from './COMPONENTES/EXPERIENCIA/experiencia/experiencia.component';


import { IniciarSesionComponent } from './COMPONENTES/iniciar-sesion/iniciar-sesion.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HysComponent } from './COMPONENTES/hys/hys.component';
import { FooterComponent } from './COMPONENTES/footer/footer.component';
import { PorfolioComponent } from './COMPONENTES/porfolio/porfolio.component';
import{ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




import { NuevoExperienciaComponent } from './COMPONENTES/EXPERIENCIA/nuevo-experiencia/nuevo-experiencia.component';
import { NuevoEducacionComponent } from './COMPONENTES/EDUCACION/nuevo-educacion/nuevo-educacion.component';
import { EditarExperienciaComponent } from './COMPONENTES/EXPERIENCIA/editar-experiencia/editar-experiencia.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './users/admin/admin.component';
import { EditarEducacionComponent } from './COMPONENTES/EDUCACION/editar-educacion/editar-educacion.component';




 @NgModule({
  declarations: [
    AppComponent,
    LogoApComponent,
    BannerComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    IniciarSesionComponent,
    HysComponent,
     PorfolioComponent,
    NuevoExperienciaComponent,
    NuevoEducacionComponent,
    EditarExperienciaComponent,
    LoginComponent,
    RegistroComponent,
    UserComponent,
    AdminComponent,
    EditarEducacionComponent
  ],


 imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
