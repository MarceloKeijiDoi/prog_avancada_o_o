import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FatecLogoComponent } from './fatec-logo/fatec-logo.component';
import { FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CursoComentarioComponent } from './curso-comentario/curso-comentario.component';
import { SombraNaTabelaDirective } from './sombra-na-tabela/sombra-na-tabela.component';
import { SombraNoLogoDirective } from './sombra-no-logo.directive';



@NgModule({
  declarations: [
    AppComponent,
    FatecLogoComponent,
    FatecCursosComponent,
    CursoCartaoComponent,
    CursoCadastroComponent,
    FormularioComponent,
    CursoComentarioComponent,
    SombraNaTabelaDirective,
    SombraNoLogoDirective

     ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
