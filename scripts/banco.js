document.addEventListener('DOMContentLoaded', function () {
    const elementosTexto = [
        { class: 'banco-cnpj', texto: '33.479.023/0001-80' },

        { class: 'banco-nome', texto: 'Banco Citibank' },
        { class: 'banco-nome-ALT', texto: 'Banco Citibank' },

        { class: 'banco-nomeCAPS', texto: 'BANCO CITIBANK' },
        { class: 'banco-nomeCAPS-ALT', texto: 'BANCO CITIBANK' },

        { class: 'banco-razaosocial', texto: 'Banco Citibank S.A.' },
        { class: 'banco-razaosocialCAPS', texto: 'BANCO CITIBANK S.A.' },
        
        { class: 'banco-comprovante', texto: 'BC CITIBANK' },
        { class: 'banco-agencia', texto: '0001' },
        { class: 'banco-conta', texto: '9124637-8' },

        { class: 'banco-logradouro', texto: 'Avenida Paulista' },
        { class: 'banco-numero', texto: '1111 (Andar 2 Parte)' },
        { class: 'banco-bairro', texto: 'Bela Vista' },
        { class: 'banco-cidade', texto: 'São Paulo' },
        { class: 'banco-estado', texto: 'São Paulo' },
        { class: 'banco-uf', texto: 'SP' },
        { class: 'banco-cep', texto: '01311-920' },

        { class: 'banco-diretor', texto: 'Osmar de Carvalho' },
    ];

    elementosTexto.forEach(item => {
        const elementos = document.querySelectorAll(`.${item.class}`);
        elementos.forEach(el => {
            el.dataset.originalText = el.textContent;
            el.textContent = item.texto;
        });
    });
});