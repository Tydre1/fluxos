let area = "";

while (true) {
    area = prompt("Você quer seguir a área de 'Front-End' ou 'Back-End'? Digite o nome da área:");

    if (area.toLowerCase() === "front-end" || area.toLowerCase() === "back-end") {
        break;
    } else {
        alert("Você inseriu uma área inválida. Por favor, insira 'Front-End' ou 'Back-End'.");
    }
}

let linguagem = "";
let ferramenta = "";

if(area.toLowerCase() === "front-end") {
    linguagem = prompt("Você quer aprender React ou JavaScript?");
    ferramenta = prompt("Você também precisa aprender HTML ou CSS. Digite apenas uma delas.");
    alert(`Certo! ${linguagem} e ${ferramenta}.`);

} else if (area.toLowerCase() === "back-end") {
    linguagem = prompt("Você quer aprender C#, Java, Ruby ou Python?");
    alert(`Certo! ${linguagem}`);
    
} else {
    alert("Você não inseriu uma área valida!");
}

const especialidadeOuFullstack = parseInt(prompt ("Digite 1 para seguir se especializando na área desejada ou 2 para seguir se desenvolvendo para se tornar Fullstack"));
if(especialidadeOuFullstack === 1) {
    alert(`Continue se especializando em ${linguagem} e ${ferramenta} para dominar a área ${area}!`);
}
else if (especialidadeOuFullstack === 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Você gostaria de aprender mais uma tecnologia? Digite 'ok' para confirmar.");
while (msg.toLowerCase() === 'ok'){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Você gostaria de aprender mais uma tecnologia? Digite 'ok' para confirmar.");
}

function exibirMensagemHTML(mensagem) {
    document.getElementById("mensagem").textContent = mensagem;
}

if (linguagem.toLowerCase() === "front-end") {
    exibirMensagemHTML(`Muito bem! Você escolheu as tecnologias ${linguagem} e ${ferramenta}. Irei disponibilizar para você as documentações e os cursos. Boa Sorte na sua Jornada.`);
} else if (linguagem.toLowerCase() === "back-end") {
    exibirMensagemHTML(`Muito bem! Você escolheu a tecnologia ${linguagem}. Irei disponibilizar para você as documentações e os cursos. Boa Sorte na sua Jornada.`);
}