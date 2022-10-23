import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { EditarComponent } from './components/inicio/editar/editar.component';
import { AgregarComponent } from './components/inicio/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { EducacionComponent } from './components/educacion/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer/footer.component';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AgregarEducacionComponent } from './components/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { AgregarExperienciaComponent } from './components/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { SkillsComponent } from './components/skills/skills/skills.component';
import { AgregarSkillsComponent } from './components/skills/agregar-skills/agregar-skills.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    HomeComponent,
    HeaderComponent,
    LogoApComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    AcercaDeComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    BannerComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    EditarAcercaDeComponent,
    SkillsComponent,
    AgregarSkillsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
