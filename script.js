function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}

// Por defecto mostrar en español
document.addEventListener('DOMContentLoaded', () => switchLanguage('es'));
