// Função para exibir os dados do Local Storage
function exibirDadosLocalStorage() {
    // Seleciona o elemento select para adicionar as opções de projeto
    const selecionaProjeto = document.getElementById('selecionaProjeto');

    // Limpa qualquer conteúdo existente no select
    selecionaProjeto.innerHTML = '<option value="">Selecione um projeto</option>';

    // Itera sobre os itens do Local Storage
    for (let i = 0; i < localStorage.length; i++) {
        // Obtém o nome do arquivo (chave) e os dados (valor) do Local Storage
        const nomeArquivo = localStorage.key(i);

        // Cria uma nova opção no select com o nome do arquivo como valor
        const option = document.createElement('option');
        option.value = nomeArquivo;
        option.textContent = nomeArquivo;

        // Adiciona a nova opção ao select
        selecionaProjeto.appendChild(option);
    }
}

// Função para exibir os detalhes do projeto selecionado
function exibirDetalhesProjetoSelecionado() {
    const selecionaProjeto = document.getElementById('selecionaProjeto');
    const detalhesProjeto = document.getElementById('detalhesProjeto');

    // Limpa qualquer conteúdo existente na área de detalhes do projeto
    detalhesProjeto.innerHTML = '';

    // Verifica se o usuário selecionou um projeto
    if (selecionaProjeto.value !== '') {
        // Obtém o nome do arquivo (chave) selecionado
        const nomeArquivoSelecionado = selecionaProjeto.value;

        // Obtém os dados do projeto correspondente no Local Storage
        const dadosJSON = localStorage.getItem(nomeArquivoSelecionado);
        const dados = JSON.parse(dadosJSON);

        // Cria um elemento para exibir os detalhes do projeto
        const detalhesTexto = document.createElement('p');
        detalhesTexto.textContent = `Categoria: ${dados.categoria}, Resumo: ${dados.resumo}, Prazo: ${dados.prazo}`;

        // Adiciona o elemento de detalhes à área de detalhes do projeto
        detalhesProjeto.appendChild(detalhesTexto);
    }
}

// Chama a função para exibir os dados do Local Storage quando a página carrega
window.addEventListener('load', function () {
    exibirDadosLocalStorage();
    document.getElementById('selecionaProjeto').addEventListener('change', exibirDetalhesProjetoSelecionado);
});
