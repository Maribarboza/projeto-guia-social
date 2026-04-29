document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.querySelector('#inputBusca');
    const cards = document.querySelectorAll('.card-servico');

    campoBusca.addEventListener('input', () => {
        const valorBusca = campoBusca.value.trim(); // Pega o que foi digitado
        const termoRegExp = new RegExp(`(${valorBusca})`, 'gi'); // Cria uma regra para achar a palavra

        cards.forEach(card => {
            // 1. Primeiro, removemos marcações antigas para não bagunçar
            // Pegamos o texto puro, sem as tags de marca-texto
            if (!card.dataset.original) {
                card.dataset.original = card.innerHTML; 
            }
            let textoOriginal = card.dataset.original;

            if (valorBusca !== "" && textoOriginal.toLowerCase().includes(valorBusca.toLowerCase())) {
                card.style.display = "block";
                
                // 2. A MÁGICA: Substitui a palavra pelo texto com a tag <mark>
                card.innerHTML = textoOriginal.replace(termoRegExp, '<mark style="background-color: yellow; color: black;">$1</mark>');
                
                // Remove o fundo amarelo do card inteiro que tínhamos antes
                card.style.backgroundColor = ""; 
                card.style.border = "";
            } else if (valorBusca === "") {
                card.style.display = "block";
                card.innerHTML = textoOriginal; // Volta o texto ao normal
            } else {
                card.style.display = "none";
            }
        });
    });
});
