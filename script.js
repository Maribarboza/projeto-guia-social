document.addEventListener('input', (e) => {
    if (e.target.id === 'inputBusca') {
        const valorBusca = e.target.value.trim();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            // Salva o texto original na primeira vez para não perder as informações
            if (!card.getAttribute('data-original')) {
                card.setAttribute('data-original', card.innerHTML);
            }

            const textoOriginal = card.getAttribute('data-original');

            if (valorBusca !== "") {
                const expressao = new RegExp(`(${valorBusca})`, 'gi');
                
                // Se a palavra existe no texto
                if (textoOriginal.toLowerCase().includes(valorBusca.toLowerCase())) {
                    card.style.display = "block";
                    // Troca a palavra pela palavra envolvida na tag <mark>
                    card.innerHTML = textoOriginal.replace(expressao, '<mark style="background-color: yellow; color: black; padding: 2px; border-radius: 3px;">$1</mark>');
                } else {
                    card.style.display = "none";
                }
            } else {
                // Se a busca estiver vazia, volta tudo ao normal
                card.style.display = "block";
                card.innerHTML = textoOriginal;
            }
        });
    }
});
