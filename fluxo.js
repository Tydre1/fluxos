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

if (area.toLowerCase() === "front-end") {
    linguagem = prompt("Você quer aprender React ou JavaScript?");
    ferramenta = prompt("Você também precisa aprender HTML ou CSS. Digite apenas uma delas.");
    alert(`Certo! ${linguagem} e ${ferramenta}.`);
} else if (area.toLowerCase() === "back-end") {
    linguagem = prompt("Você quer aprender C#, Java, Ruby ou Python?");
    alert(`Certo! ${linguagem}`);
} else {
    alert("Você não inseriu uma área válida!");
}

let msg = prompt("Você gostaria de aprender mais uma tecnologia? Digite 'ok' para confirmar.");

let novaTecnologia

while (msg.toLowerCase() === 'ok'){
    novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Você gostaria de aprender mais uma tecnologia? Digite 'ok' para confirmar.");
}

let mensagemFinal = "";

if (area.toLowerCase() === "front-end") {
    mensagemFinal = `Muito bem! Você escolheu as tecnologias ${linguagem} e ${ferramenta}. Irei disponibilizar para você as documentações e os cursos. Boa Sorte na sua Jornada.`;
} else if (area.toLowerCase() === "back-end") {
    mensagemFinal = `Muito bem! Você escolheu a tecnologia ${linguagem} e ${novaTecnologia}. Irei disponibilizar para você as documentações e os cursos. Boa sorte na sua Jornada!`;
}

document.getElementById("mensagem").innerHTML = mensagemFinal;
