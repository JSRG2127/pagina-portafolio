document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.contador');

    const animarContador = (el) => {
        const valorFinal = parseInt(el.innerText);
        let valorActual = 0;
        const pasos = 200; 
        const incremento = valorFinal / pasos;

        const actualizar = () => {
            valorActual += incremento;

            if (valorActual < valorFinal) {
                el.innerText = Math.ceil(valorActual);
                setTimeout(actualizar, 50);
            } else {
                el.innerText = valorFinal;
            }
        };
        actualizar();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContador(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach(el => observer.observe(el));
});