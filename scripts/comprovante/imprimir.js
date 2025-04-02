document.addEventListener('DOMContentLoaded', () => {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const comprovante = document.getElementById('comprovante');

    if (exportar && config) {
        exportar.addEventListener('click', () => {

            if (exportar.style.cursor === 'not-allowed') return;

            config.style.display = 'none';

            if (comprovante) {
                comprovante.style.border = 'none';
            }   else {
                    alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                    return;
            }

            window.print();

            setTimeout(() => {
                
                config.style.display = 'block';

                comprovante.style.border = '1px solid black';

            }, 100);
        });
    }
});
