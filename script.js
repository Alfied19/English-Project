// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegación Suave (Smooth Scroll)
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajuste por el header sticky
                behavior: 'smooth'
            });
        });
    });

    // 2. Log de control para el Podcast (útil para pruebas)
    const podcast = document.getElementById('main-podcast');
    if (podcast) {
        podcast.onplay = () => {
            console.log("TEAM TERRA Podcast is playing...");
        };
    }
});