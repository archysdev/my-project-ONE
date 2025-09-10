let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nome = amigoInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        amigoInput.value = '';
        return;
    }

    amigos.push(nome);
    atualizarLista();
    amigoInput.value = '';
    amigoInput.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.textContent = amigos.join(', ');
}