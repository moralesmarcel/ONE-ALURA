// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo para sortear.");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${sorteado}</strong>`;
}

// Função para limpar tudo
function limparTudo() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
