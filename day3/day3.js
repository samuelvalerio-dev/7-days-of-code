const areaEstudo = prompt('Quer seguir para área de Front-End ou seguir para a área de Back-End?');

let baseEstudo;
if (areaEstudo.toLowerCase() === 'frontend'){
    baseEstudo = prompt("Você quer aprender React ou Vue?");
} else if (areaEstudo.toLowerCase() === 'backend'){
    baseEstudo = prompt("Você quer aprender C# ou Java?");
} else {
    console.log("Opção inválida");
}

let caminhoArea = prompt("Você quer se especializar ou virar Fullstack?");
if (caminhoArea.toLowerCase() === 'especializar'){
    console.log(`Continue se especializando em ${baseEstudo} para ficar fera em ${areaEstudo}`);
} else if (caminhoArea.toLowerCase() === 'fullstack'){
    console.log(`Chegou a hora de começar a aprender outras linguagens além de ${baseEstudo} se você quer se tornar Fullstack!`);
} else {
    console.log("Opção inválida");
}

let tecnologiaEstudo = prompt('Tem alguma tecnologia que você gostaria de se aprender?');
while(tecnologiaEstudo.toLocaleLowerCase() !== 'nao'){
    console.log(`${tecnologiaEstudo} é uma tecnologia muito interessante`);
    tecnologiaEstudo = prompt(`Tem mais alguma tecnologia que você gostaria de aprender? (digite 'nao' para sair)`);
    if (tecnologiaEstudo.toLocaleLowerCase() === 'nao') {
        console.log(`Que bom que voce quer ser ${areaEstudo}, quer aprender ${baseEstudo} e quer seguir o caminho de ${caminhoArea}!`);
    }
}