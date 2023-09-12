// Recuperar o nome do armazenamento local
const nomeSalvo = localStorage.getItem("nome");


if (nomeSalvo) {
    
    const mensagemDeBoasVindas = `Bem-vindo, ${nomeSalvo}!`;
    document.getElementById("mensagemDeBoasVindas").textContent = mensagemDeBoasVindas;
}

function exibirDataAtual() {
    var dataAtual = new Date();
    var diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var dia = dataAtual.getDate();
    var mes = dataAtual.toLocaleDateString("pt-BR", { month: "long" });
    var ano = dataAtual.getFullYear();
    var diaDaSemana = diaSemana[dataAtual.getDay()];

    var dataFormatada = "Hoje é " + diaDaSemana + " dia " + dia + " de " + mes + " de " + ano + ".";
    
    // Exiba a data no elemento <p> com id "data"
    document.getElementById("data").textContent = dataFormatada;
}

exibirDataAtual();