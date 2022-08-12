import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONETES/inicio/inicio.component';
import { EditarComponent } from './COMPONETES/editar/editar.component';
import { AgregarComponent } from './COMPONETES/agregar/agregar.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ExperienciaRichardComponent } from './COMPONETES/experienciaRichard/experiencia-richard/experiencia-richard.component';
import { AgregarExperienciaRichardComponent } from './COMPONETES/experienciaRichard/agregar-experiencia-richard/agregar-experiencia-richard.component';
import { PorfolioComponent } from './COMPONETES/porfolio/porfolio.component';
import { EditarExperienciaRichardComponent } from './COMPONETES/experienciaRichard/editar-experiencia-richard/editar-experiencia-richard.component';
import { BannerComponent } from './COMPONETES/banner/banner.component';
import { LogoApComponent } from './COMPONETES/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './COMPONETES/acerca-de/acerca-de.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { IniciarSesionComponent } from './COMPONETES/iniciar-sesion/iniciar-sesion.component';
import { HeaderComponent } from './COMPONETES/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    ExperienciaRichardComponent,
    AgregarExperienciaRichardComponent,
    PorfolioComponent,
    EditarExperienciaRichardComponent,
    BannerComponent,
    LogoApComponent,
    AcercaDeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    RegistroComponent,
    IniciarSesionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
