document.addEventListener('input', (e) => {
    if (e.target.id === 'inputBusca') {
        const termo = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            const textoDoCard = card.textContent.toLowerCase();
            const titulo = card.querySelector('h2');

            if (termo !== "" && textoDoCard.includes(termo)) {
                card.style.display = "block";
                
                // Estilo Profissional (UX)
                card.style.backgroundColor = "#f0f7ff"; // Azul bem suave
                card.style.borderLeft = "10px solid #0056b3"; // Barra lateral forte
                if(titulo) {
                    titulo.style.color = "#0056b3";
                    titulo.style.fontWeight = "bold";
                }
            } else if (termo === "") {
                // Reset Total
                card.style.display = "block";
                card.style.backgroundColor = "white";
                card.style.borderLeft = "1px solid #ddd";
                if(titulo) {
                    titulo.style.color = "#333";
                    titulo.style.fontWeight = "normal";
                }
            } else {
                card.style.display = "none";
            }
        });
    }
});
