document.addEventListener('input', (e) => {
    if (e.target.id === 'inputBusca') {
        const termo = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            const titulo = card.querySelector('h2'); // Pega o título do card
            const textoCard = card.textContent.toLowerCase();

            if (termo !== "" && textoCard.includes(termo)) {
                card.style.display = "block";
                
                // Estilo de UX: Destaque suave e profissional
                card.style.borderLeft = "8px solid #0056b3"; // Uma barra lateral azul
                card.style.backgroundColor = "#f0f7ff";      // Fundo azul bem clarinho
                if(titulo) titulo.style.color = "#0056b3";   // Título fica azul
            } 
            else if (termo === "") {
                // Volta ao normal
                card.style.display = "block";
                card.style.borderLeft = "1px solid #ccc";
                card.style.backgroundColor = "white";
                if(titulo) titulo.style.color = "black";
            } 
            else {
                card.style.display = "none";
            }
        });
    }
});
