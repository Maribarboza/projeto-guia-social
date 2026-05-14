// AGUARDA O CARREGAMENTO DO DOM
document.addEventListener('DOMContentLoaded', () => {
    initSearchFilter();
    initAccordions();
    initScrollToTop();
});

/**
 * 1. FILTRO INTELIGENTE DE UNIDADES (Página Contatos)
 * Filtra cards e atualiza um contador de resultados
 */
function initSearchFilter() {
    const searchInput = document.querySelector('#searchInput');
    const cards = document.querySelectorAll('.card-unidade');
    const counter = document.querySelector('#resultCounter');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        let foundCount = 0;

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const isMatch = text.includes(term);
            
            // Transição suave de exibição
            card.style.display = isMatch ? 'block' : 'none';
            if (isMatch) foundCount++;
        });

        // Atualiza o contador se ele existir no HTML
        if (counter) {
            counter.textContent = `${foundCount} unidade(s) encontrada(s)`;
        }
    });
}

/**
 * 2. ACORDIONS INTERATIVOS (Página Benefícios)
 * Garante que apenas um item abra por vez (UX focado)
 */
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isOpen = body.style.maxHeight;

            // Fecha todos os outros antes de abrir o atual
            document.querySelectorAll('.accordion-body').forEach(el => {
                el.style.maxHeight = null;
                el.parentElement.classList.remove('active');
            });

            // Abre o selecionado
            if (!isOpen) {
                body.style.maxHeight = body.scrollHeight + "px";
                header.parentElement.classList.add('active');
            }
        });
    });
}

/**
 * 3. BOTÃO VOLTAR AO TOPO
 * Aparece apenas quando o usuário rola a página para baixo
 */
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'btn-scroll-top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
