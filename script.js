document.addEventListener('input', (e) => {
    if (e.target.id === 'inputBusca') {
        const termo = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            const textoCard = card.textContent.toLowerCase();

            if (termo !== "" && textoCard.includes(termo)) {
                card.style.display = "block";
                card.style.backgroundColor = "#f0f7ff"; // Fundo azul claro
                card.style.borderLeft = "8px solid #0056b3"; // Barra lateral azul
            } else if (termo === "") {
                card.style.display = "block";
                card.style.backgroundColor = "white";
                card.style.borderLeft = "5px solid transparent";
            } else {
                card.style.display = "none";
            }
        });
    }
});
