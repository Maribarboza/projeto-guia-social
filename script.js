document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.querySelector('#inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    if (campoBusca) {
        campoBusca.addEventListener('input', () => {
            const valorBusca = campoBusca.value.toLowerCase();

            cards.forEach(card => {
                const textoCard = card.textContent.toLowerCase();
                card.style.display = textoCard.includes(valorBusca) ? "block" : "none";
            });
        });
    }
});

// Aguarda a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.querySelector('#inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    // Escuta o que o usuário digita
    campoBusca.addEventListener('input', () => {
        const valorBusca = campoBusca.value.toLowerCase();

        cards.forEach(card => {
            const textoDoCard = card.textContent.toLowerCase();
            
            // Se o texto digitado estiver no card, mostra. Se não, esconde.
            if (textoDoCard.includes(valorBusca)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
