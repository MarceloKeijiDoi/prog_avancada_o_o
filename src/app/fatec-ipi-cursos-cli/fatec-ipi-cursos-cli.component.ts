import { Component} from '@angular/core';

@Component({
  selector: 'app-fatec-ipi-cursos-cli',
  templateUrl: './fatec-ipi-cursos-cli.component.html',
  styleUrls: ['./fatec-ipi-cursos-cli.component.css']
})
export class FatecIpiCursosCliComponent {

  textoBotao: string = 'Adicionar';
  esconder: boolean = false;

  cursos = [
    {nome: 'Análize e Desenvolvimento de Sistemas'},
    {nome:'Eventos'},
    {nome:'Gestão Empresarial'},
    {nome:'Recursos Humanos'},
    {nome:'Gestão Comercial'},
  ]

  adicionar(n: string){
    this.cursos.push({nome: n});
  }

  onAdicionarCurso(curso){
    this.cursos = [curso,...this.cursos];
  }
  alterarExibicao (): void{
    this.textoBotao = this.esconder ? 'Exibir':'Esconder';
    this.esconder = !this.esconder;
  }
  }


