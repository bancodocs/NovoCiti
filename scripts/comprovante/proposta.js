function formatValue(value) {
    return value.replace(/[^\d,]/g, '').replace(',', '.');
}

function formatToBRL(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatPercentage(value) {
    return value.toFixed(2).replace('.', ',') + '%';
}

function calcular() {
    const iValor = document.getElementById('i-valor').value;

    if (iValor > 0) {
        document.getElementById('valor').innerText = formatToBRL(m2);
    } else {
        document.getElementById('valor').innerText = '';
    }
		
    document.getElementById('i-valor').addEventListener('input', calcular);
}