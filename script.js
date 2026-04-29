document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.querySelector('#inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    if (campoBusca) {
        campoBusca.addEventListener('input', () => {
            const valorBusca = campoBusca.value.toLowerCase();

            cards.forEach(card => {
                const textoCard = card.textContent.toLowerCase();
                if (textoCard.includes(valorBusca)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
