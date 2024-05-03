// Verifica se há dados no Local Storage
if(localStorage.getItem('dados')) {
    // Se houver dados, recupera e converte para objeto JavaScript
    const dados = JSON.parse(localStorage.getItem('dados'));
    
    // Faça o que você precisa fazer com os dados aqui
    console.log('Dados recuperados do Local Storage:', dados);
} else {
    console.log('Não há dados no Local Storage.');
}
