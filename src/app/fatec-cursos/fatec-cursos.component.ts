import { Component} from '@angular/core';

@Component({
  selector: 'app-fatec-cursos',
  templateUrl: './fatec-cursos.component.html',
  styleUrls: ['./fatec-cursos.component.css']
})
export class FatecCursosComponent {


  cursos = [
    {nome: 'Análize e Desenvolvimento de Sistemas'},
    {nome:'Eventos'},
    {nome:'Gestão Empresarial'},
    {nome:'Recursos Humanos'},
    {nome:'Gestão Comercial'},
    {nome:'Fisica'}
  ];

 /* adicionar(n: string){
    this.cursos.push({nome: n});
  }*/

  onAdicionarCurso(curso){
    this.cursos = [curso,...this.cursos];
    console.log(curso);
}
}
