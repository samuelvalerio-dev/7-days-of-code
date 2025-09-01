/*- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"*/

alert('Olá! Seja bem-vindo');
const nome = prompt('Insira o seu nome: ');
const idade = prompt('Insira a sua idade: ');
const linguagemEstudo = prompt('Qual linguagem de programação você está estudando?');
const gostando = prompt('Voce está gostando dessa linguagem? 1 para SIM e 2 para NÃO');

let dados = "";

if (idade >= 18 && idade <= 29){
    dados = (`Prazer em te conhecer <span class="destaque">${nome}</span>, você tem <span class="destaque">${idade}</span> anos e está estudando <span class="destaque">${linguagemEstudo}</span>, começar um estudo é sempre bom ainda mais nessa idade!`);
} else if(idade >= 30){
    dados = (`Prazer em te conhecer <span class="destaque">${nome}</span>, você tem <span class="destaque">${idade}</span> anos e está estudando <span class="destaque">${linguagemEstudo}</span>, nunca é tarde para começar a aprender!`);  
} else if(idade >= 1 && idade <= 17) {
    dados = (`Prazer em te conhecer <span class="destaque">${nome}</span>, você tem <span class="destaque">${idade}</span> anos e está estudando <span class="destaque">${linguagemEstudo}</span>, parabéns por se interessar por desenvolvimento tão cedo!`);
} else {
    dados = (`Prazer em te conhecer <span class="destaque">${nome}</span>, você não informou sua idade corretamente!`);
}

if (gostando == 1){
    dados += ` E é muito bom que está gostando de estudar <span class="destaque">${linguagemEstudo}</span> continue estudando e você terá muito sucesso.`;
} else if (gostando == 2) {
    dados += ` E que pena que não está gostando de <span class="destaque">${linguagemEstudo}</span> já tentou aprender outras linguagens?`;
} else {
    dados += ` E você não respondeu corretamente se está gostando de estudar <span class="destaque">${linguagemEstudo}</span>, mas espero que esteja!`;
}

document.getElementById("dados").innerHTML = dados;
document.getElementById("reiniciar").addEventListener("click", function() {
    location.reload();
});