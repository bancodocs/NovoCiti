// JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
        const statusSelect = document.getElementById('status');
        const inputStatus = document.getElementById('input-status');

        // Define o valor padrão do campo de entrada para "12x"
        inputStatus.value = "Concluída";
        inputStatus.readOnly = true;

        // Adiciona um ouvinte de evento para monitorar a mudança na seleção
        statusSelect.addEventListener('change', function() {
            const selectedOption = statusSelect.value; // Obtém o valor da opção selecionada

            if (selectedOption === 'Outro') {
                // Se "Outro" for selecionado, permite a edição e limpa o valor e o placeholder
                inputStatus.readOnly = false;
                inputStatus.value = "";
                inputStatus.placeholder = "Insira aqui o STATUS";
            } else {
                // Se outra opção for selecionada, atualiza o valor do campo de entrada e o torna somente leitura
                inputStatus.value = selectedOption;
                inputStatus.readOnly = true;
                inputStatus.placeholder = ""; // Remove o placeholder se não for "Outro"
                }
            });
        });

document.addEventListener('DOMContentLoaded', function() {
        const pixSelect = document.getElementById('pix');
        const inputPix = document.getElementById('input-pix');

        // Define o valor padrão do campo de entrada para "12x"
        inputPix.value = "Não utilizada";
        inputPix.readOnly = true;

        // Adiciona um ouvinte de evento para monitorar a mudança na seleção
        pixSelect.addEventListener('change', function() {
            const selectedOption = pixSelect.value; // Obtém o valor da opção selecionada

            if (selectedOption === 'Outro') {
                // Se "Outro" for selecionado, permite a edição e limpa o valor e o placeholder
                inputPix.readOnly = false;
                inputPix.value = "";
                inputPix.placeholder = "Insira aqui a CHAVE PIX";
            } else {
                // Se outra opção for selecionada, atualiza o valor do campo de entrada e o torna somente leitura
                inputPix.value = selectedOption;
                inputPix.readOnly = true;
                inputPix.placeholder = ""; // Remove o placeholder se não for "Outro"
                }
            });
        });