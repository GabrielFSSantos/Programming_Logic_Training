export default function Start() {

    console.log("\n\n");
    
    let funcionario1 = {
        id: "99756312",
        nome: "Pedro Roberto",
        idade: "36",
        email: "pedro.roberto@ambev.com.br",
        marcaFav: "Corona"
    };

    let funcionario2 = {
        id: "99865233",
        nome: "Regina Costa",
        idade: "27",
        email: "regina.costa@ambev.com.br",
        marcaFav: "Bhrama"
    };


    let frase1 = "O funcionário " + funcionario1.nome + " tem a idade de " + funcionario1.idade + 
        " anos, e sua marca favorita da companhina é " + funcionario1.marcaFav + ".\n" +
        "Seu ID é: " + funcionario1.id + "\nSeu Email é: " + funcionario1.email
    ;

    let frase2 = `O funcionário ${funcionario2.nome} tem a idade de ${funcionario2.idade}
        anos, e sua marca favorita da companhina é ${funcionario2.marcaFav}.
        \nSeu ID é: ${funcionario2.id}
        \nSeu Email é: ${funcionario2.email}`
    ;

    console.log(frase1);
    console.log(frase2);


    funcionario1.email = "teste@gmail.com"

    console.log(funcionario1);
    console.log(frase1);

    frase1 = "O funcionário " + funcionario1.nome + " tem a idade de " + funcionario1.idade + 
        " anos, e sua marca favorita da companhina é " + funcionario1.marcaFav + ".\n" +
        "Seu ID é: " + funcionario1.id + "\nSeu Email é: " + funcionario1.email
    ;

    console.log(frase1);

    console.log("\n\n");
}