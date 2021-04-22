export const home = () => {
  const divHome = document.createElement('div');

  const viewHome = `
  <div class='home' id='home-screen'>
    <header>
      <nav>
        <ul>
          <a href="" class='current-menu'>Inicio</a>
          <a href="#proyects">Proyectos</a>
          <a href="#aboutme">Sobre mi</a>
          <a href="#contact">Contacto</a>
        </ul>
      </nav>
    </header>
    <article>
      <section class='presentation'>
        <h1>Hola, soy <span>Javiera
        Front-end</span> developer</h1>
        <p class='home-description'>Egresada del bootcamp Laboratoria, donde aprendí a hacer algo que me encanta: programar páginas web. 
        Quédate para conocer sobre mi trabajo.</p>
        <img href="#proyects" class='home-button' src="img/view-proyect-button.png" alt="" type='button' id='viewProyectsButton'>
      </section>
      <section >
        <img class='home-img' src='img/pic-portada.png'>
      </section>
    </article>
  </div>
      `;
  divHome.innerHTML = viewHome;

  // -------------Cambio a template aboutme--------------------
  const viewProyectsButton = divHome.querySelector('#viewProyectsButton');
  viewProyectsButton.addEventListener('click', () => {
    window.location.hash = 'proyects';
  });
  return divHome;
};
