import Aula1 from './aulas/aula_1';
import Aula2 from './aulas/aula_2';
import Aula3 from './aulas/aula_3';
import Aula4 from './aulas/aula_4';

// Roda aula 1
Aula1();

// Roda aula 2
Aula2();

// Roda aula 3
const funcionario = Aula3.CriaFuncionario("Fabrícia Cristina", "17/05/1984", "Corona");
Aula3.ImprimeFuncionario(funcionario);

// Roda aula 4
const funcionario1 = Aula3.CriaFuncionario("Fabrícia Cristina", "25/09/1978", "Corona");
const funcionario2 = Aula3.CriaFuncionario("Jorge Mathes", "18/03/1964", "Corona");
const funcionario3 = Aula3.CriaFuncionario("Pedrinho Xorope", "17/05/1984", "Corona");
const funcionario4 = Aula3.CriaFuncionario("Vivian Lara", "29/05/2003", "Stella Artois");
const funcionario5 = Aula3.CriaFuncionario("Daniel Lucas", "18/02/2011", "Gatorade");
const funcionario6 = Aula3.CriaFuncionario("Davi Souza", "17/07/2017", "Do Bem");

const funcionarios = [funcionario1, funcionario2, funcionario3, funcionario4,funcionario5, funcionario6];

Aula4.MaiorIdade(funcionarios); 
Aula4.MarcaFav(funcionarios, "Corona");