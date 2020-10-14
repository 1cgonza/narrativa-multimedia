import './scss/styles.scss';

function crearMenu() {
  const menu = document.getElementById('menu');
  const paginas = document.querySelectorAll('.pagina');
  let paginaActual = paginas[0];

  for (let i = 0; i < paginas.length; i++) {
    const numPagina = i + 1;
    const boton = document.createElement('span');
    const nombre = paginas[i].dataset.nombre;
    boton.className = i === 0 ? 'boton-menu actual' : 'boton-menu';
    boton.innerText = nombre ? nombre : `Página ${numPagina}`;

    boton.addEventListener('click', function () {
      menu.querySelector('.actual').classList.remove('actual');
      boton.classList.add('actual');
      paginaActual.classList.add('esconder');
      paginas[i].classList.remove('esconder');
      paginaActual = paginas[i];

      if (numPagina === 4) {
        cargarMapa();
      } else if (numPagina === 5) {
        cargarClima();
      }
    });

    menu.appendChild(boton);
  }
}

crearMenu();
