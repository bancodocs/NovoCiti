document.addEventListener('DOMContentLoaded', function () {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const config2 = document.getElementById('config2');
    const documento = document.getElementById('documento');
    const capa = document.getElementById('capa');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const contracapa = document.getElementById('contracapa');

    var contrato = document.getElementById('contrato');

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

    if (exportar && config) {
        exportar.addEventListener('click', () => {

            if (exportar.style.cursor === 'not-allowed') return;

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

            if (contrato) {
                pagina1.style.display = 'block';
                pagina1.style.border = 'none';

                pagina2.style.display = 'block';
                pagina2.style.border = 'none';

                pagina3.style.border = 'none';
            }   else {
                alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                return;
            }

            window.print();

            setTimeout(() => {
                config.style.display = 'block';
                if (config2) {
                    config2.style.display = 'block'
                } else {
                    console.log('Config2: Não existe.');
                }

                documento.style.gap = '10px';

                if (capa && contracapa) {
                    capaEcontracapaBASE();
                }

                if (contrato) {
                    contratoBASE();
                }   else {
                    alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                    return;
                }

            }, 100);
        })
    };
});