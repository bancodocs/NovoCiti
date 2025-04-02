document.addEventListener('DOMContentLoaded', function () {
    const exportar = document.getElementById('exportar')

    var camposSwitcher = document.getElementById('campos-switch')

    if (exportar) {
        exportar.style.backgroundColor = '#606060';
        exportar.style.cursor = 'not-allowed';
    }

    camposSwitcher.addEventListener('change', function () {
        if (this.checked) {
            if (exportar) {
                exportar.style.backgroundColor = 'var(--verde)';
                exportar.style.cursor = 'pointer';
            }
        } else {
                if (exportar) {
                exportar.style.backgroundColor = '#606060';
                exportar.style.cursor = 'not-allowed';
            }
        }
    });
});