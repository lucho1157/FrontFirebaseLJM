import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { HamburguesaComponent } from './hamburguesa/hamburguesa.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { EditAcercademiComponent } from './acercademi/edit-acercademi/edit-acercademi.component';
import { InicioComponent } from './inicio/inicio.component';
import { NewhabilidadComponent } from './habilidades/newhabilidad/newhabilidad.component';
import { EdithabilidadesComponent } from './habilidades/edithabilidades/edithabilidades.component';
import { EditproyectosComponent } from './proyectos/editproyectos/editproyectos.component';
import { EditeducacionComponent } from './educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './educacion/neweducacion/neweducacion.component';
import { NewproyectoComponent } from './proyectos/newproyecto/newproyecto.component';
import { EditexperienciaComponent } from './experiencia/editexperiencia/editexperiencia.component';
import { NewexperienciaComponent } from './experiencia/newexperiencia/newexperiencia.component';
import { EditPerfilComponent } from './acercademi/edit-perfil/edit-perfil.component';







const routes: Route[] = [
{ path: "login", component:LoginComponent },
{ path: "**", redirectTo: "" }];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    HamburguesaComponent,
    HabilidadesComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    EditAcercademiComponent,
    InicioComponent,
    NewhabilidadComponent,
    EdithabilidadesComponent,
    EditproyectosComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    NewproyectoComponent,
    EditexperienciaComponent,
    NewexperienciaComponent,
    EditPerfilComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
