function calcular_circulo(){
    let raio = parseFloat(document.getElementById("raio").value);
    let valor_tela = document.getElementById("tela");

    let area = Math.PI * (raio * raio);

    let resultado = area.toFixed(2);
    valor_tela.innerHTML = resultado;

    const button = document.getElementById('id-do-botao')
    button.addEventListener('click', calcular_circulo)
}

function calcular_troncoPiramide(){
    let base_maior = parseFloat(document.getElementById("base_maior").value);
    let base_menor = parseFloat(document.getElementById("base_menor").value);
    let base_lado = parseFloat(document.getElementById("base_lado").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let valor_tela = document.getElementById("tela");

    let area = ((base_maior + base_menor) / 2) * Math.sqrt((base_lado * base_lado) + (altura * altura));

    let resultado = area.toFixed(2);
    valor_tela.innerHTML = resultado;
}

function calcular_retangulo(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let valor_tela = document.getElementById("tela");

    let resultado = base * altura;

    valor_tela.innerHTML = resultado;
}

function calcular_coroaCirculo(){
    let circuferencia_maior = parseFloat(document.getElementById("circuferencia_maior").value);
    let circuferencia_menor = parseFloat(document.getElementById("circuferencia_menor").value);
    let valor_tela = document.getElementById("tela");

    let area = Math.PI * (Math.sqrt(circuferencia_maior) - Math.sqrt(circuferencia_menor)); 

    let resultado = area.toFixed(2);
    valor_tela.innerHTML = resultado;
}

function calcular_trapezoideIrregular(){
    let base_maior = parseFloat(document.getElementById("base_maior").value);
    let base_menor = parseFloat(document.getElementById("base_menor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let valor_tela = document.getElementById("tela");

    let area = (base_menor + base_maior) * altura / 2;

    let resultado = area.toFixed(2);
    valor_tela.innerHTML = resultado;
}

function calcular_poligonoRegularComNLados(){
    let lado = parseFloat(document.getElementById("lado").value);
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let apotema = parseFloat(document.getElementById("apotema").value);
    let valor_tela = document.getElementById("tela");

    let resultado = (lado * comprimento * apotema) / 2;

    valor_tela.innerHTML = resultado;
}

function calcular_quadrado(){
    let lado = parseFloat(document.getElementById("lado").value);
    let valor_tela = document.getElementById("tela");

    resultado = lado * lado;

    valor_tela.innerHTML = resultado;
}

function calcular_setorCircularEmCirculosAninhado(){
    let angulo = parseFloat(document.getElementById("angulo").value);
    let raio = parseFloat(document.getElementById("raio").value);
    let valor_tela = document.getElementById("tela");

    resultado = (angulo / 360) * Math.PI * Math.pow(raio, 2);

    valor_tela.innerHTML = resultado.toFixed(2);
}