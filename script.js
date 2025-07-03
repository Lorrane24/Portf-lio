document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animar-subir');

  function animarSubir() {
    const trigger = window.innerHeight * 0.85;

    elementos.forEach(elem => {
      const top = elem.getBoundingClientRect().top;
      if (top < trigger) {
        elem.classList.add('visible');
      } else {
        elem.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', animarSubir);
  animarSubir();
});

