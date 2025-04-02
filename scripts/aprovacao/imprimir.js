document.addEventListener('DOMContentLoaded', function () {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const tela = document.getElementById('tela');

    if (exportar && config) {
        exportar.addEventListener('click', () => {

            if (exportar.style.cursor === 'not-allowed') return;

            config.style.display = 'none';

            tela.style.height = '1110px';

            window.print();

            setTimeout(() => {
                
                config.style.display = 'block';

                tela.style.height = '860px';

            }, 100);
        });
    }
});