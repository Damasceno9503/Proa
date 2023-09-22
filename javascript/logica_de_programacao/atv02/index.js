/* <!-- 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles. --> */

pri = prompt("Diga o primeiro valor: ");
seg = prompt("Diga o segundo valor: ");

if (parseInt(pri) >= parseInt(seg)){
    document.write(pri);
} else {
    document.write(seg);
}

/* 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. */

valor = prompt("Diga um valor: ")

if (parseFloat(valor) > 0){
    document.write("Esse valor e positivo. ")
} else if(parseFloat(valor) === 0){
    document.write("Esse valor e neutro. ")
} else{
    document.write("esse valor e negativo. ")
}

/* 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */
while (true) {
    var num1 = parseFloat(prompt("Digite um número: "))
    var num2 = parseFloat(prompt("Digite outro número: "))
    var num3 = parseFloat(prompt("Digite mais um número: "))

    if (num1 === num2) {
        alert("Você digitou números iguais. Digite números diferentes. ")
    } else if (num1 === num3){
        alert("Você digitou números iguais. Digite números diferentes. ")
    } else if (num2 === num3){
        alert("Você digitou números iguais. Digite números diferentes. ")
    }else {
        if (num1 > num2 && num1 > num3) {
            document.write(num1);
        } else if (num2 > num1 && num2 > num3) {
            document.write(num2);
        } else if (num3 > num1 && num3 > num2) {
            document.write(num3);
        } else {
            alert("Os números são iguais. ")
        }
        break;
    }
}

/* 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. */

var num1 = parseFloat(prompt("Informe um número :"))
var num2 = parseFloat(prompt("Informe mais um número: "))
var num3 = parseFloat(prompt("Informe outro número: "))

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert("Você Digitou números iguais, digite números diferentes. ")
} else {
    if (num1 > num2 && num1 > num3) {
        alert(num1 + (num2 > num3 ? num2 : num3));
    } else if (num2 > num1 && num2 > num3) {
        alert(num2 + (num1 > num3 ? num1 : num3));
    } else {
        alert(num3 + (num1 > num2 ? num1 : num2));
    }
}

/* 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos. */

let num1 = parseFloat(prompt("Diga o primeiro valor: "));
let num2 = parseFloat(prompt("Diga o segundo valor: "));
let num3 = parseFloat(prompt("Diga o terceiro valor: "));
let num4 = parseFloat(prompt("Diga o quarto valor: "));
let num5 = parseFloat(prompt("Diga o quinto valor: "));
let num6 = parseFloat(prompt("Diga o sexto valor: "));
let media = (num1 + num2 + num3 + num4 + num5 + num6) / 6;

alert("os números são: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6);
alert("Essa e a média aritmética: " + media);  

/* 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes) */

let num1 = parseFloat(prompt("Diga o primeiro número: "));
let num2 = parseFloat(prompt("Diga o segundo número: "));
let num3 = parseFloat(prompt("Diga o terceiro número: "));
let num4 = parseFloat(prompt("Diga o quarto número: "));
let maior = Math.max(num1, num2, num3, num4);

if (num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num2 || num3 === num4 || num4 === num2 || num4 === num3){
    alert("Por favor, não digite números iguais.");
} else {
    alert("O primeiro número é " + num1 + "\nO ultimo número é " + num4 + "\nO maior deles é " + maior);
}

/* 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.   */

let num1 = parseFloat(prompt("Diga o primeiro número: "));
let num2 = parseFloat(prompt("Diga o segundo número: "));
let num3 = parseFloat(prompt("Diga o terceiro número: "));
let num4 = parseFloat(prompt("Diga o quarto número: "));
let num5 = parseFloat(prompt("Diga o quinto número: "));
let num6 = parseFloat(prompt("Diga o sexto número: "));
let total = num1 + num2 + num3 + num4 + num5 + num6;

if (num1 >= 72 || num2 >= 72 || num3 >= 72 || num4 >= 72 || num5 >= 72 || num6 >= 72){
    alert("Erro!!!");
} else {
    alert("Você informou os números: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + " e " + num6 + "\nA Soma deles é " + total);
}

/* 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente" */

let num1 = parseFloat(prompt("Diga o primeiro número: "));
let num2 = parseFloat(prompt("Diga o segundo número: "));
let num3 = parseFloat(prompt("Diga o terceiro número: "));
let num4 = parseFloat(prompt("Diga o quarto número: "));

let resultado = (num1 + num2 + num3 + num4) / 4;

if (num1 > 0 && num1 < 10 && num2 > 0 && num2 < 10 && num3 > 0 && num3 < 10 && num4 > 0 && num4 < 10) {
    if (resultado > 5){
        alert("Você passou no teste!");
    } else {
        alert("Tente novamente!");
    }
} else {
    alert("Digite números maior que 0 e menor que 10");
}

/* 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu). */

let ano_usuario = parseFloat(prompt("Qual ano você nasceu? "));
let ano = 2023;
let resultado = ano - ano_usuario;

if (resultado >= 18){
    alert("Você pode votar esse ano!")
} else {
    alert("Você não pode votar nessa eleição")
} 

/* 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas: */

let mensage = parseFloat(prompt("Me diga seu sexo biologico\n1 feminino\n.2 masculino"));

if (mensage == 2){
    let homens = parseFloat(prompt("Qual sua altura homem? "));
    let peso_hom = (72.7 * homens) - 58;
    alert("Seu peso ideal masculino " + peso_hom);
} else if (mensage == 1){
    let mulher = parseFloat(prompt("Qual é sua altura mulher? "));
    let peso_mul = (62.1 * mulher) - 44.7;
    alert("Seu peso ideal feminino " + peso_mul);
} 

/* 11. Uma micro calculadora
Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações */

let num1 = parseInt(prompt("Diga um número: "));
let num2 = parseInt(prompt("Diga outro número: "));
let mensage = parseInt(prompt("1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));

switch(mensage){
    case 1:
        let adicao = num1 + num2;
        alert(adicao);
        break;
    case 2:
        let subtracao = num1 - num2;
        alert(subtracao);
        break;
    case 3:
        let divisao = num1 / num2;
        alert(divisao);
        break;
    case 4:
        let multiplicacao = num1 * num2;
        alert(multiplicacao);
        break;
}