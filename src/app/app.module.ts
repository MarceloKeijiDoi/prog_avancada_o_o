import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FatecIpiCursosComponent} from './fatec-ipi-cursos/fatec-ipi-cursos.component';
import { FatecIpiCursosCliComponent } from './fatec-ipi-cursos-cli/fatec-ipi-cursos-cli.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecIpiCursosComponent,
    FatecIpiCursosCliComponent,
    CursoCartaoComponent,
    CursoCadastroComponent
     ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
