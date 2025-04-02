document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll('.segmented-control input[type="radio"]');
    const conclusaoDescricao = document.getElementById('conclusao-descricao');
    const iConclusao = document.getElementById('i-conclusao');
    const conclusao = document.getElementById('conclusao'); // Considerando que este elemento existe em outra parte do HTML

    if (!radios.length || !conclusaoDescricao || !iConclusao) return;

    function toggleElementDisplay() {
        const displayStyle = radios[0].checked ? 'none' : 'block';
        conclusaoDescricao.style.display = displayStyle;
        iConclusao.style.display = displayStyle;
        
        // Só altera o display se o elemento existir
        if (conclusao) {
            conclusao.style.display = displayStyle;
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', toggleElementDisplay);
    });

    toggleElementDisplay();
});