// Script principal do site Hypos, SA

// Exemplo: adicionar efeito de fade-in ao carregar secções
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('.section');
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

// Efeito suave no menu ao clicar
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log("Script Hypos, SA carregado com sucesso.");
