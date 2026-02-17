// Animar tarjetas al hacer scroll
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.project-card');
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        if (posicion < window.innerHeight) {
            elemento.classList.add('visible');
        }
    });
});

// Validar y enviar formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email  = document.getElementById('email').value.trim();

        if (nombre && email) {
            const btn = contactForm.querySelector('.btn-submit');
            btn.textContent = '✓ Mensaje enviado';
            btn.style.background = '#28a745';

            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar mensaje';
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        }
    });
}

// Smooth scroll para el nav
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        const target = document.querySelector(enlace.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});