import Aula3 from './aula_3';

function MaiorIdade(funcionarios) {

    let funcionariosMaiorIdade = [];

    for(let func of funcionarios) {
        if(func.idade >= 18){
            funcionariosMaiorIdade.push(func);
        }
    }

    console.log(funcionariosMaiorIdade);
}

function MarcaFav(funcionarios, marca) {

    console.log("\n\nFUNCIONÁRIOS QUE GOSTAM DA MESMA MARCA ->" + marca);

    let funcionariosMarcaFav = [];

    for(let func of funcionarios) {

        if(func.marcaFav == marca){
            funcionariosMarcaFav.push(func);
            Aula3.ImprimeFuncionario(func);
        }
    }
}

export default {MaiorIdade, MarcaFav};