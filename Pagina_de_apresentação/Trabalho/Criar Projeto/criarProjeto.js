const formCategoria = document.getElementById('formProjeto');
const opcoes = document.getElementById('opcoes');
let cat = '';
const enviarBotao = document.getElementById('enviarProjeto');
const resumoProjeto = document.getElementById('resumoProjeto');
const prazoProjeto = document.getElementById('prazoProjeto');
const contatoProjeto = document.getElementById('contato');

enviarBotao.addEventListener('click', function (){
    prazo = prazoProjeto.value
    cat = opcoes.value
    resumo = resumoProjeto.value
    cont = contatoProjeto.value

    console.log('Categoria selecionada: ', cat);
    console.log(prazo)
    console.log(cont)
    if (cat === ''){
        alert("Preencha o campo categoria");
    }
    if (resumo === ''){
        alert("Existem campos vazios, Por Favor preencher todos os campos");
        console.log("Existem campos vazios, Por Favor preencher todos os campos");
    }    
    if (prazo < 3){
        alert("O prazo deve ser no mínimo 3 dias!!")
    }
    else{
        const dados = {
            categoria: cat,
            resumo: resumo,
            prazo: prazo,
            contato: cont
        };
        const dadosJSON = JSON.stringify(dados);
        const  idTimesTamp = Date.now();
        const nomeArquivo = 'projeto_'+ cat + idTimesTamp + '.json';
        localStorage.setItem(nomeArquivo, dadosJSON);

        alert("Projeto salvo no Local Storage com sucesso! Projeto Enviado para os nossos Designers!");
    }
});
