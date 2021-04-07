export const aboutme = () => {
  const divAboutMe = document.createElement('div');

  const viewAboutMe = `
  <div class="proyects" id="proyects-screen">
  <header>
    <nav>
      <ul>
        <a href="">Inicio</a>
        <a href="#proyects">Proyectos</a>
        <a href="#aboutme" class='current-menu'>Sobre mi</a>
        <a href="#contact">Contacto</a>
      </ul>
    </nav>
  </header>
  <article class="aboutme-screen">
    <section class="display-aboutme">
    <div class='aboutme-container'>
      <h2 class="aboutme-title"><span>Sobre mi</span></h2>
      <p class="aboutme-description">
      Soy <span class='span-aboutme'>Javiera Troncoso</span>, desarrolladora front-end. 
      </p>
      <p class="aboutme-description">
      Egresé del bootcamp de
      Laboratoria, donde aprendí a programar páginas web en sólo <span class='span-aboutme'>6 meses</span>, siendo
      éste el 2do mayor reto en mi vida, después de ser <span class='span-aboutme'>mamá</span>.
      </p>
      <p class="aboutme-description">
      Me gusta estar en constante <span class='span-aboutme'>aprendizaje</span>, probando cosas nuevas y comprendiendo el
      funcionamiento de éstas.
      </p>
      <p class="aboutme-description">
        Anteriormente trabajé en el área de la gastronomía, y <span class='span-aboutme'>cocinar</span> sigue siendo uno de mis 
        pasatiempos favoritos. También me gusta mucho leer, ir a la biblioteca, pasear en
        bicicleta y ver series. Soy fanática del <span class='span-aboutme'>café</span> y de las plantitas.
      </p>
      </div>
      <div>
        <img src="img/aboutme.png" alt="" />
      </div>
    </section>
  </article>
</div>
      `;
  divAboutMe.innerHTML = viewAboutMe;
  return divAboutMe;
};
