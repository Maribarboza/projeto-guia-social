document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.querySelector('#inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    if (campoBusca) {
        campoBusca.addEventListener('input', () => {
            const valorBusca = campoBusca.value.toLowerCase();

            cards.forEach(card => {
                const textoCard = card.textContent.toLowerCase();
                
                // Se a pessoa digitou algo E a palavra está no card
                if (valorBusca !== "" && textoCard.includes(valorBusca)) {
                    card.style.display = "block";
                    card.style.backgroundColor = "#e7f3ff"; // Um azul bem clarinho
                    card.style.border = "2px solid #0056b3"; // Borda azul mais forte
                    card.style.transform = "scale(1.02)"; // Dá um leve zoom
                    card.style.transition = "all 0.3s"; // Faz a mudança ser suave
                } 
                // Se o card apenas "existe" na busca normal ou se a busca está vazia
                else if (textoCard.includes(valorBusca)) {
                    card.style.display = "block";
                    card.style.backgroundColor = "white"; // Cor original
                    card.style.border = "1px solid #ccc"; // Borda original
                    card.style.transform = "scale(1.0)";
                } 
                // Se não tem nada a ver com a busca, esconde
                else {
                    card.style.display = "none";
                }
            });
        });
    }
});
