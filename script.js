document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.querySelector('#inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    campoBusca.addEventListener('input', () => {
        const valorBusca = campoBusca.value.toLowerCase();

        cards.forEach(card => {
            const textoCard = card.textContent.toLowerCase();

            // Se encontrou a palavra
            if (valorBusca !== "" && textoCard.includes(valorBusca)) {
                card.style.display = "block";
                card.style.backgroundColor = "#fff3cd"; // Fundo amarelo destaque
                card.style.border = "2px solid #ffc107"; // Borda amarela
                card.style.padding = "15px";
                card.style.borderRadius = "8px";
            } 
            // Se a busca estiver vazia, volta ao normal
            else if (valorBusca === "") {
                card.style.display = "block";
                card.style.backgroundColor = ""; 
                card.style.border = "";
            } 
            // Se não encontrou, esconde
            else {
                card.style.display = "none";
            }
        });
    });
});

   
