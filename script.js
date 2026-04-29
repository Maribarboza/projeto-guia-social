document.addEventListener('input', (e) => {
    // Verifica se estamos digitando no campo de busca
    if (e.target.id === 'inputBusca') {
        const termo = e.target.value.trim().toLowerCase();
        
        // Selecionamos as SEÇÕES (da index) e as LINHAS da tabela (da contatos)
        // Certifique-se de que suas linhas na tabela tenham a tag <tr>
        const itensParaFiltrar = document.querySelectorAll('.card-servico, tbody tr');

        itensParaFiltrar.forEach(item => {
            const textoDoItem = item.textContent.toLowerCase();

            if (termo === "" || textoDoItem.includes(termo)) {
                // Se o termo bater ou a busca estiver vazia, mostra o item
                item.style.display = ""; 
                
                // Feedback visual: se estiver buscando, destaca a linha/card com azul claro
                if (termo !== "") {
                    item.style.backgroundColor = "#f0f7ff";
                } else {
                    item.style.backgroundColor = ""; // Reseta quando apaga
                }
            } else {
                // Se não bater, esconde a linha ou o card
                item.style.display = "none";
            }
        });
    }
});
