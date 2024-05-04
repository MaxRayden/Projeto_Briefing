const enviarBotao = document.getElementById('enviarProjeto');
const opcoes = document.getElementById('opcoes');
const resumoProjeto = document.getElementById('resumoProjeto');
const prazoProjeto = document.getElementById('prazoProjeto');
const contatoProjeto = document.getElementById('contatoProjeto');

enviarBotao.addEventListener('click', function () {
    const prazo = prazoProjeto.value;
    const cat = opcoes.value;
    const resumo = resumoProjeto.value;
    const contato = contatoProjeto.value;

    if (cat === '') {
        alert("Preencha o campo categoria");
    } else if (resumo === '') {
        alert("Existem campos vazios, Por Favor preencher todos os campos");
    } else if (prazo < 3) {
        alert("O prazo deve ser no mínimo 3 dias!!");
    } else {
        const dados = {
            categoria: cat,
            resumo: resumo,
            prazo: prazo,
            contato: contato
        };
        const dadosJSON = JSON.stringify(dados);
        const idTimesTamp = Date.now();
        const nomeArquivo = 'projeto_' + cat + idTimesTamp + '.json';
        localStorage.setItem(nomeArquivo, dadosJSON);

        alert("Projeto salvo no Local Storage com sucesso!");
    }
});
