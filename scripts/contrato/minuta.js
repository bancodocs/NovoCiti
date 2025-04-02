document.addEventListener('DOMContentLoaded', function () {
    const minuta = document.getElementById('minuta');
    const config = document.getElementById('config');
    const config2 = document.getElementById('config2');
    const documento = document.getElementById('documento');
    const capa = document.getElementById('capa');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const contracapa = document.getElementById('contracapa');

    const inputsItem = document.querySelectorAll('.item');
    const inputsRequeridos = ['i-razaosocial', 'i-cnpj', 'i-gerente'].map(id => document.getElementById(id));

    const elementosTexto = [
        { id: 'valor', texto: 'VALOR DO CRÉDITO' },
        { id: 'parcelas', texto: 'PARCELAS' },
        { id: 'proposta-parcelas', texto: 'VALOR DAS PARCELAS' },
        { id: 'prazo-carencia', texto: 'DIAS DE CARÊNCIA' },
        { id: 'proposta-juros', texto: 'VALOR TOTAL DE JUROS' },
        { id: 'proposta-devido', texto: 'VALOR TOTAL DEVIDO' },
        { id: 'taxa-juros', texto: 'TAXA DE JUROS' },
        { id: 'banco', texto: '' },
        { id: 'agencia', texto: '' },
        { id: 'conta', texto: '' },
        { id: 'dia', texto: 'DIA' },
        { id: 'mes', texto: 'MÊS' },
        { id: 'ano', texto: 'ANO' }
    ];

    const elementosOcultar = ['a-gerente', 'a-diretor', 'selo'].map(id => document.getElementById(id));

    const verificarInputsPreenchidos = () => inputsRequeridos.every(input => input.value);

    const validarInputs = () => {
        if (!verificarInputsPreenchidos()) {
            minuta.style.backgroundColor = '#606060';
            minuta.style.cursor = 'not-allowed';
        } else {
            minuta.style.backgroundColor = 'var(--abc-principal)';
            minuta.style.cursor = 'pointer';
        }
    };

    inputsItem.forEach(input => input.addEventListener('input', validarInputs));

    if (minuta && config) {
        minuta.addEventListener('click', () => {
            if (!verificarInputsPreenchidos()) {
                alert('Você precisa preencher os campos de Gerente, CNPJ e Razão Social para baixar a Minuta de Contrato.');
                return;
            }

            config.style.display = 'none';
            if (config2) {
                config2.style.display = 'none'
            } else {
                console.log('Config2: Não existe.');
            }
            
            documento.style.gap = '3px';

            if (capa && contracapa) {
                capa.style.display = 'block';
                capa.style.border = 'none';

                contracapa.style.display = 'flex';
                contracapa.style.border = 'none';
            }

            pagina1.style.display = 'block';
            pagina1.style.border = 'none';

            pagina2.style.display = 'block';
            pagina2.style.border = 'none';

            pagina3.style.border = 'none';

            elementosTexto.forEach(item => {
                const el = document.getElementById(item.id);
                if (el) {
                    el.dataset.originalText = el.textContent;
                    el.textContent = item.texto;
                }
            });

            elementosOcultar.forEach(el => {
                if (el) {
                    el.dataset.originalDisplay = el.style.display;
                    el.style.display = 'none';
                }
            });

            window.print();

            setTimeout(() => {
                config.style.display = 'block';
                if (config2) {
                    config2.style.display = 'block'
                } else {
                    console.log('Config2: Não existe.');
                }

                documento.style.gap = '10px';

                function capaEcontracapaBASE() {
                    capa.style.display = 'none';
                    contracapa.style.display = 'none';
                }
            
                if (capa && contracapa) {
                    capaEcontracapaBASE();
                }
            
                function contratoBASE() {
                    pagina1.style.display = 'none';
            
                    pagina2.style.display = 'none';
                    
                    pagina3.style.display = 'block';
                    pagina3.style.border = '1px solid black';
                }
            
                if (contrato) {
                    contratoBASE();
                }
                
                elementosTexto.forEach(item => {
                    const el = document.getElementById(item.id);
                    if (el && el.dataset.originalText !== undefined) {
                        el.textContent = el.dataset.originalText;
                    }
                });

                elementosOcultar.forEach(el => {
                    if (el && el.dataset.originalDisplay !== undefined) {
                        el.style.display = el.dataset.originalDisplay;
                    }
                });
            }, 100);
        });

        validarInputs();
    }
});
