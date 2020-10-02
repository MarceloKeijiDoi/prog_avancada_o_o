import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

@Output() cursoAdicionado = new EventEmitter();

valor;
gerarValor (){
  this.valor = Math.round(Math.random()*100)+1;
   if(this.valor%2 == 0)
      return 0;

  else
      return 1;
}

adicionar (nome){
  const curso = {nome:nome};
  this.cursoAdicionado.emit(curso);
}
/*
metodo (){
  return{
    'par': this.valor == 0,
    'impar': this.valor == 1
   }
  }*/
  obterEstilosParaOBotao() {
    return {
    backgroundColor: '#805acb',
    padding: '8px',
    width: '100%',
    border: 'none',
    borderRadius: '20px'
    }
    }
    obterClassesRodape(){
      return{
        'rodape_par':this.valor %2 ==0,
        'rodape_impar':this.valor %2 ==1
      }

    }
}
