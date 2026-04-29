// Este código é mais direto para funcionar no celular
const iniciarBusca = () => {
    const campoBusca = document.getElementById('inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    if (!campoBusca) return; // Segurança caso o campo não exista

    campoBusca.addEventListener('input', () => {
        const valorBusca = campoBusca.value.toLowerCase();

        cards.forEach(card => {
            const textoCard = card.textContent.toLowerCase();

            if (valorBusca !== "" && textoCard.includes(valorBusca)) {
                card.style.display = "block";
                card.style.backgroundColor = "#fff3cd"; // Amarelo destaque
                card.style.borderColor = "#ffc107";
            } else if (valorBusca === "") {
                card.style.display = "block";
                card.style.backgroundColor = ""; 
                card.style.borderColor = "";
            } else {
                card.style.display = "none";
            }
        });
    });
};

// Executa a função
iniciarBusca();
