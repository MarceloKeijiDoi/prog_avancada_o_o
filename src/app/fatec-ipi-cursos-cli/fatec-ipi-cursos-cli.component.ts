import { Component} from '@angular/core';

@Component({
  selector: 'app-fatec-ipi-cursos-cli',
  templateUrl: './fatec-ipi-cursos-cli.component.html',
  styleUrls: ['./fatec-ipi-cursos-cli.component.css']
})
export class FatecIpiCursosCliComponent {


  cursos = [
    {nome: 'Análize e Desenvolvimento de Sistemas'},
    {nome:'Eventos'},
    {nome:'Gestão Empresarial'},
    {nome:'Recursos Humanos'},
    {nome:'Gestão Comercial'},
    {nome:'Fisica'}
  ];

 // adicionar(n: string){
   // this.cursos.push({nome: n});
  //}

  onAdicionarCurso(curso){
    this.cursos = [curso,...this.cursos];
    console.log(curso);

  }

  }


