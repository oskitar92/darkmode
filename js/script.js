document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleDarkMode');
    const body = document.body;

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
