document.addEventListener('input', function (e) {
    if (e.target.id === 'inputBusca') {
        const termo = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            // Se ainda não salvamos o texto original, salvamos agora
            if (!card.dataset.original) {
                card.dataset.original = card.innerHTML;
            }

            const conteudoOriginal = card.dataset.original;

            if (termo === "") {
                card.style.display = "block";
                card.innerHTML = conteudoOriginal;
                return;
            }

            if (card.textContent.toLowerCase().includes(termo)) {
                card.style.display = "block";
                
                // Cria uma versão do texto com a palavra destacada
                const regex = new RegExp(`(${termo})`, 'gi');
                card.innerHTML = conteudoOriginal.replace(regex, '<span style="background-color: yellow; font-weight: bold;">$1</span>');
            } else {
                card.style.display = "none";
            }
        });
    }
});
