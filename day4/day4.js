let numero = Math.floor(Math.random()*(10 + 1));
let tentativas = 2;

let chute = prompt('Qual o valor do numero?');
if (chute == numero){
    alert(`Parabens voce acertou! O número é ${numero}`);
}

while(chute != numero){
    chute = prompt(`Voce errou, tem mais ${tentativas} tentativas, chute novamente:`);
    tentativas--
    if (chute == numero){
        alert(`Parabens voce acertou! O número é ${numero}`);
    }
    else if (tentativas == 0){
        alert(`Que pena acabaram suas tentativas, o número era ${numero}`);
        break
    }
}