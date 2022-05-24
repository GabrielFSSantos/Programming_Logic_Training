import { uuid } from 'uuidv4';

function CriaFuncionario(nome, dataNasc, marcaFav) {

    const id = uuid();

    let nameArray = nome.split(" ");
    const email = `${nameArray[0].toLowerCase()}.${nameArray[1].toLowerCase()}@ambev.com.br`;

    let idadeArray = dataNasc.split("/");
    const idade = calcIdade(idadeArray[2],idadeArray[1],idadeArray[0]);
    
    let funcionario = { id, nome, idade, email, marcaFav};

    return funcionario;
}

function ImprimeFuncionario(funcionario) {
    console.log("\n\n");


    let frase = `O funcionário ${funcionario.nome} tem a idade de ${funcionario.idade} anos, e sua marca favorita da companhina é ${funcionario.marcaFav}.
    Seu ID é: ${funcionario.id}
    Seu Email é: ${funcionario.email}`;

    console.log(frase);

    console.log("\n\n");

}

function calcIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),

    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

export default {CriaFuncionario, ImprimeFuncionario};