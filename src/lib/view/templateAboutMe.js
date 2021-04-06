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
    <h2 class="aboutme-title">Conoce un poco <span>Sobre mi</span></h2>
    <section class="display-aboutme">
    <div>
        <h3 class="aboutme-subtitle">¿Quién soy?</h3>
        <p class="aboutme-description">
          Me llamo <span>Javiera Troncoso</span>, tengo 20 años y soy una apasionada por
          la programación y la tecnología, me encanta estar en constante
          aprendizaje, probando cosas nuevas y comprendiendo el
          funcionamiento de éstas. Disfruto jugando con el código,
          intentando plasmar la idea del prototipo en la web y haciendo que
          la experiencia del usuario sea única. Anteriormente trabajé en el
          área de la gastronomía, y cocinar sigue siendo uno de mis
          pasatiempos favoritos. Tambien me gusta mucho leer, ver series y
          andar en bicicleta. Me encantan las plantas, en especial los
          cactus y las suculentas.
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
