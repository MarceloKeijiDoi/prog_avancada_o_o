import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Input() matricula;

  salvar(alunoForm){

    const nome = alunoForm.value.nome;
    const idade = alunoForm.value.idade;
    const email = alunoForm.value.email;
    const curso = alunoForm.value.curso;
    console.log(`Nome:${nome}, Idade:${idade}, Email:${email}, Curso:${curso}`);
  }


  cursos = [
    'Análize e Desenvolvimento de Sistemas',
    'Eventos',
    'Gestão Comercial',
    'Gestão Empresarial',
    'Recursos Humanos'
  ];

  adicionarMatricula(nome,idade,email,curso){
    this.matriculas = [{nome:nome,idade:idade,email:email,curso:curso}];
    console.log(`Nome:${nome}, Idade:${idade}, Email:${email}, Curso:${curso}`);
  }
  matriculas = [
    {nome:"",
      idade:"",
        email:"",
          curso: ""}
  ];
}



