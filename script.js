// 1. Selecionamos o campo de busca e todos os cartões de ONGs
const campoBusca = document.querySelector('#inputBusca');
const cards = document.querySelectorAll('.card-ong'); // Use a classe que você deu aos seus cards

// 2. Adicionamos um "ouvinte" que percebe quando você digita
campoBusca.addEventListener('input', () => {
    const valorBusca = campoBusca.value.toLowerCase(); // Pegamos o que foi digitado em minúsculo

    cards.forEach(card => {
        // 3. Pegamos o texto dentro do card (nome da ONG ou descrição)
        const conteudoCard = card.textContent.toLowerCase();

        // 4. Se o que foi digitado estiver no texto do card, ele aparece. Se não, some.
        if (conteudoCard.includes(valorBusca)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
