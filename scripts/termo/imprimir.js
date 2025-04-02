document.addEventListener('DOMContentLoaded', () => {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const pagina1 = document.getElementById('pagina1');

    if (exportar && config) {
        exportar.addEventListener('click', () => {

            if (exportar.style.cursor === 'not-allowed') return;

            config.style.display = 'none';

            if (pagina1) {
                pagina1.style.border = 'none';
            }   else {
                    alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                    return;
            }

            window.print();

            setTimeout(() => {
                
                config.style.display = 'block';

                pagina1.style.border = '1px solid black';

            }, 100);
        });
    }
});