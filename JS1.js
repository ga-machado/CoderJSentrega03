let numero = parseInt (prompt("Seja bem vindo à atividade 03 do grupo do Gabriel e Warlen! Digite um número:"))
let soma
let multiplicacao

for (let i = 1; i <= 3; i++) {
    if (i<3){
        soma = parseInt (numero + 5);
        numero = parseInt (prompt("Usando um ciclo de 'for', vamos somar seu número com 5 unidades, por 3 vezes. Essa é a " + i + "ª soma. O seu número (" + numero + ") somado a 5 resulta em: " + soma + ". Digite mais um número:"));
    }

    else {
        numero = parseInt (prompt("Usando um ciclo de 'for', vamos somar seu número com 5 unidades, por 3 vezes. Essa é a 3ª e última soma. O seu número (" + numero + ") somado a 5 resulta em: " + soma + ". Agora, vamos trabalhar um ciclo de 'while'. Enquanto você digitar um número entre 1 e 10, multiplicaremos esse número a 2. Se digitar um número fora desse intervalo, mostraremos uma mensagem final. Digite seu número:"));
    }
}

while (numero >= 1 && numero <= 10 ) {
    multiplicacao = parseInt (numero * 2);
    numero = parseInt (prompt("Você digitou um número entre 1 e 10. O seu número (" + numero + ") multiplicado por 2 resulta em: " + multiplicacao + ". Digite mais um número:"))
}

alert ("Obrigado por chegar até aqui! Até a próxima atividade.")