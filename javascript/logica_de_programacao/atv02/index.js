/* <!-- 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles. --> */
/* pri = prompt("Diga o primeiro valor: ");
seg = prompt("Diga o segundo valor: ");

if (parseInt(pri) >= parseInt(seg)){
    document.write(pri);
} else {
    document.write(seg);
}
 */

/* 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. */
/* valor = prompt("Diga um valor: ")

if (parseFloat(valor) > 0){
    document.write("Esse valor e positivo. ")
} else if(parseFloat(valor) === 0){
    document.write("Esse valor e neutro. ")
} else{
    document.write("esse valor e negativo. ")
} */

/* 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */
/* while (true) {
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
} */

/* 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. */

var num1 = parseFloat(prompt("Informe um número :"))
var num2 = parseFloat(prompt("Informe mais um número: "))
var num3 = parseFloat(prompt("Informe outro número: "))

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert("Você Digitou números iguais, digite números diferentes. ")
} else {
    if (num1 > num2 && num1 > num3) {
        document.write(num1);
    } else if (num2 > num1 && num2 > num3) {
        document.write(num2);
    } else if (num3 > num1 && num3 > num2) {
        document.write(num3);
    } else {
        
    }
}
