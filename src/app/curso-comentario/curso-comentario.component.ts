import { Component } from '@angular/core';

@Component({
  selector: 'app-curso-comentario',
  templateUrl: './curso-comentario.component.html',
  styleUrls: ['./curso-comentario.component.css']
})
export class CursoComentarioComponent{

  comentarios: Array<string> = [];
  comentario: string;
  salvar() {
  this.comentarios = [this.comentario, ...this.comentarios];
  this.comentario = '';
  }
}
