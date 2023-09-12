// Função para exibir o modal
function exibirModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function salvarNome() {
    const nome = document.getElementById("inputNome").value;
    if (nome.trim() !== "") {
        localStorage.setItem("nome", nome);
        fecharModal();

        // Redirecionar para a página principal após salvar o nome
        window.location.href = "home.html";
    } else {
        alert("Por favor, informe seu nome.");
    }
}


// Verificar se o nome já foi salvo
const nomeSalvo = localStorage.getItem("nome");
if (!nomeSalvo) {
    exibirModal();
}

// Configurar o evento de clique para o botão "Enviar" no modal
document.getElementById("btnNome").addEventListener("click", salvarNome);
