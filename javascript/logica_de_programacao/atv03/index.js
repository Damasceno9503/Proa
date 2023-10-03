/* 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor. */

let num_1 = parseFloat(prompt("Diga um número: "));
let num_2 = parseFloat(prompt("Diga outro número: "));

if (num_2 <= 0) {
    alert("erro");
} else {
    let resul = num_1 / num_2;
    alert(resul);
}

/* 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO". */

let conta = 30
let mensage = ""

while (conta >= 0) {
    mensage += "Contagem regressiva " + conta + "\n";
    conta--;
}
document.write(mensage);
document.write("Explosão");

/* 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */

let numeros = 10
mensagem = ""

while (numeros >= 0) {
    mensagem += numeros + " ";
    numeros--;
}
document.write(mensagem);

/* 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive). */

let num = 15
let msg = "\n"
let soma = 0

while (num <= 100) {
    soma += num;
    num++;
}

const media = soma / num;
document.write(media); 

/* 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. */

let num1 = parseInt(prompt("Diga um número"));
let num2 = parseInt(prompt("Diga outro número"));
let total = 0;

if (num1 > num2) {
    let num_media = (num1 + num2) / 2;
    document.write("A media dos 2 números são " + num_media + "<br>");
    while (num1 > num2) {
        total += num1;
        num1--;
    }
    document.write("A media dos número entre eles são " + total);
} else {
    document.write("Erro!!!");
}

/* 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados. */

let conta_alunos = 0

function aluno() {
    let nota1 = parseFloat(prompt("Diga a primeira nota."));
    let nota2 = parseFloat(prompt("Diga a segunda nota."));
    let media = (nota1 + nota2) / 2;
    alert("A media é " + media);

    if (media >= 9.5) {
        alert("Parabéns!");
        conta_alunos++;
    } else {
        alert("Tente novamente!");
    }
    verificacao();
}

function verificacao() {
    let msg = prompt("Gostaria de informar a nota de outro aluno? s/n");
    if (msg === "s") {
        aluno();
    } else if (msg === "n") {
        alert("A quantidade de alunos aprovado é " + conta_alunos);
        return;
    } else {
        alert("Escolha uma opção valida.");
        aluno()
    }
}

aluno();

/* 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. */

let nota01 = parseFloat(prompt("Diga sua primeira nota"));
let nota02 = parseFloat(prompt("Diga sua segunda nota"));
let nota03 = parseFloat(prompt("Diga sua terceira nota"));
let nota04 = parseFloat(prompt("Diga sua quarta nota"));
let nota05 = parseFloat(prompt("Diga sua quinta nota"));
let nota06 = parseFloat(prompt("Diga sua sexta nota"));

if (nota01 >= 0 && nota01 <= 10 && nota02 >= 0 && nota02 <= 10 && nota03 >= 0 && nota03 <= 10 && nota04 >= 0 && nota04 <= 10 && nota05 >= 0 && nota05 <= 10 && nota06 >= 0 && nota06 <= 10) {
    let media = (nota01 + nota02 + nota03 + nota04 + nota05 + nota06) / 6;
    alert("Sua media é " + media);
} else {
    alert("Erro, informe valores validos.")
}

/* 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N  é um valor informado pelo usuário */

let numero = parseFloat(prompt("Diga um número"));

if (numero === 0) {
    alert("Erro!")
} else {
    let i = 1;
    let mensagem = ""
    while (i <= numero) {
        mensagem += i + ", "
        i++
    }
    alert("Do número 1 até " + mensagem);
}

/* 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. */

let numero_01 = 101;

for (let i = 1; i <= 10; i++) {
    document.write(numero_01 + "<br>")
    numero_01++
}

/* 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. */

let tabuada = parseInt(prompt("Diga um número que sera informado a tabuada dele."));

for (let numerotabuada = 1; numerotabuada <= tabuada; numerotabuada++) {
    document.write("Tabuada do " + numerotabuada + ":\n")

    for (let x = 1; x <= 10; x++) {
        let resultado_tabu = numerotabuada * x;
        document.write("<br>" + numerotabuada + " X " + x + " = " + resultado_tabu);
    }
    document.write("<br>");
}

/* 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo */

let com_intervalo = 0;
let sem_intervalo = 0;

for (let i = 0; i < 10; i++) {
    let valor_00 = parseFloat(prompt("Informe o valor " + (i + 1) + ":"));

    if (valor_00 >= 24 && valor_00 <= 42) {
        com_intervalo++;
    } else {
        sem_intervalo++;
    }
}

document.write("Quantidade de valores dentro do intervalo: " + com_intervalo + "<br>");
document.write("Quantidade de valores fora do intervalo: " + sem_intervalo + "<br>");
