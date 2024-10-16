
document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const textInput = document.getElementById('textInput');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            textInput.value += key.textContent;
        });
    });
});