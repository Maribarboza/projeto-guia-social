document.addEventListener('input', (e) => {
    if (e.target.id === 'inputBusca') {
        const termo = e.target.value.trim();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            // Salva o texto original para não perder os links e botões
            if (!card.dataset.original) {
                card.dataset.original = card.innerHTML;
            }
            const conteudoOriginal = card.dataset.original;

            if (termo !== "") {
                const expressao = new RegExp(`(${termo})`, 'gi');
                
                if (card.textContent.toLowerCase().includes(termo.toLowerCase())) {
                    card.style.display = "block";
                    card.style.backgroundColor = "#f0f7ff";
                    card.style.borderLeft = "8px solid #0056b3";
                    
                    // A MÁGICA: Coloca a tag <b> em volta da palavra encontrada
                    card.innerHTML = conteudoOriginal.replace(expressao, '<b>$1</b>');
                } else {
                    card.style.display = "none";
                }
            } else {
                // Volta tudo ao normal quando apaga a busca
                card.style.display = "block";
                card.style.backgroundColor = "white";
                card.style.borderLeft = "5px solid transparent";
                card.innerHTML = conteudoOriginal;
            }
        });
    }
});
