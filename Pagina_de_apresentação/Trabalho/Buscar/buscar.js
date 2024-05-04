document.addEventListener("DOMContentLoaded", function() {
    const listaDados = document.getElementById('lista-dados');
    
    // Limpa a lista de dados
    listaDados.innerHTML = '';

    // Itera sobre todas as chaves do Local Storage
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const valor = localStorage.getItem(chave);
        
        // Cria um item de lista para cada chave-valor e adiciona à lista na tela
        const itemLista = document.createElement('li');
        itemLista.textContent = `${chave}: ${valor}`;
        listaDados.appendChild(itemLista);
    }
});
