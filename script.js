
//Desafio Portaria

/* Desenvolva um algoritmo para uma casa de eventos. Seu algoritmo deverá solicitar ao usuário que entre com; nome, idade e verificar se está acompanhado.

Seu algoritmo deve conseguir de verificar se o acesso é permitido ou não permitido, algumas características devem ser respeitadas.

    Crie três variáveis nome, idade e estaAcompanhado

    Atribua valores a estas variáveis recorrendo ao prompt.

    estaAcompanhado é uma variável do tipo boolean, mas o usuário não vai digitar true ou false e sim "s" ou "n".

    Se o usuário digitar "n" a variável estaAcompanhado recebe false, caso contrário ela recebe true.

        Teste se a idade é igual ou acima de 18, caso não seja, deve alertar:
        entrada não está permitida para nome : Menor de idade,
        Caso contrário, deve verificar se está acompanhado, se sim deve alertar:
        Entrada permitida para nome: Conceder desconto
        Se não estiver acompanhado deve alertar:
        Entrada permitida para nome: Valor integral.
*/

//Algoritmo
let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade")
let estaAcompanhado = prompt("Esta acompanhado?")

if (estaAcompanhado != "n") {
    estaAcompanhado = true
} else {
    estaAcompanhado = false
}

console.log(estaAcompanhado)

if (idade <= 18) {
    console.log(`entrada não está permitida para ${nome}: Menor de idade`)
} else if (estaAcompanhado == true) {
    console.log(`Entrada permitida para ${nome}: Conceder desconto`)
} else {
    console.log(`Entrada permitida para ${nome}: Valor integral.`)
}







