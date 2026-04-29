const input = document.getElementById('inputBusca');

if (input) {
    input.oninput = function() {
        const termo = input.value.toLowerCase();
        const cards = document.querySelectorAll('.card-servico');

        cards.forEach(card => {
            const texto = card.innerText.toLowerCase();

            if (termo !== "" && texto.includes(termo)) {
                card.style.display = "block";
                card.style.borderLeft = "10px solid #0056b3"; // A barra azul
                card.style.backgroundColor = "#f0f7ff";
            } else if (termo === "") {
                card.style.display = "block";
                card.style.borderLeft = "1px solid #ddd";
                card.style.backgroundColor = "white";
            } else {
                card.style.display = "none";
            }
        });
    };
}
