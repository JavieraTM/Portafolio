export const proyects = () => {
  const divProyects = document.createElement('div');

  const viewProyects = `
      <section class='proyectsCards'>
        <div class="proyects" id="proyects-screen">
          <header>
            <nav>
              <ul>
                <a href="">Inicio</a>
                <a href="#proyects" class='current-menu'>Proyectos</a>
                <a href="#contact">Contacto</a>
                <a href="#aboutme">Sobre mi</a>
              </ul>
            </nav>
          </header>
          <article class='proyects-screen'>
            <h2 class='proyects-title' >Proyectos</h2>
            <div class='flex-cards'>
              <section class="flip-card">
                <div class="flip-card-inner">
                  <div class="frontCard">
                    <img id="photo" class="photo" src="img/rickandmorty.png" />
                    <div class="card-description">
                      <p class="name-frontcard">Rick and Morty Wiki</p>
                      <p class="description-frontcard">Javascript Vanilla - HTML5 - CSS3 <br> Git | Github - Github Pages- Node.js - Jest</p>
                      <img src="img/collab.png" alt="" />
                    </div>
                  </div>
                  <div class="backCard">
                    <p class="name-backcard">Rick and Morty Wiki</p>
                    <img class='back-img' src="img/rickandmortyback.png" alt="" />
                    <p class="backcard-description">
                      Una página web donde podrás visualizar datos de los personajes
                      de la serie de televisión “Rick and Morty”. Los cuales se pueden
                      filtrar según sus características, ordenar alfabéticamente y
                      buscar por nombre.
                    </p>
                    <div class='backcard-buttons'>
                      <a href='https://javieratm.github.io/SCL015-data-lovers/src/index.html'><img class='ver-pag-button' type='button' src="img/ver-pagina-button.png" alt="" /></a>
                      <a href='https://github.com/JavieraTM/SCL015-data-lovers'><img type='button' class='ver-repo-button' src="img/ver-repo-button.png" alt=""/></a>
                    </div>
                  </div>
                </div>
              </section>
              <section class="flip-card">
                <div class="flip-card-inner">
                  <div class="frontCard">
                    <img id="photo" class="photo" src="img/urbexworld.png" />
                    <div class="card-description">
                      <p class="name-frontcard">Urbex world Social Network</p>
                      <p class="description-frontcard">Javascript Vanilla - HTML5 - CSS3 <br> Git | Github - Github Pages- Node.js - Jest</p>
                      <img src="img/collab.png" alt="" />
                    </div>
                  </div>
                  <div class="backCard">
                    <p class="name-backcard">Urbex world Social Network</p>
                    <img class='back-img' src="img/urbexworldback.png" alt="" />
                    <p class="backcard-description">
                    Una red social enfocada en la exploración urbana. En esta app podrás registrarte e iniciar sesión con tu cuenta de Google, o con tu correo electrónico, para interactuar con otros usuarios mediante publicaciones.
                    </p>
                    <div class='backcard-buttons'>
                      <a href='https://javieratm.github.io/SCL015-social-network/src/index.html'><img class='ver-pag-button' type='button' src="img/ver-pagina-button.png" alt="" /></a>
                      <a href='https://github.com/JavieraTM/SCL015-social-network'><img type='button' class='ver-repo-button' src="img/ver-repo-button.png" alt=""/></a>
                    </div>
                  </div>
                </div>
              </section>
              <section class="flip-card">
                <div class="flip-card-inner">
                  <div class="frontCard">
                    <img id="photo" class="photo" src="img/privapp.png" />
                    <div class="card-description">
                      <p class="name-frontcard">Privapp mensajería cifrada</p>
                      <p class="description-frontcard">Javascript Vanilla - HTML5 - CSS3 <br> Git | Github - Github Pages- Node.js - Jest</p>
                      <img src="img/collab.png" alt="" />
                    </div>
                  </div>
                  <div class="backCard">
                    <p class="name-backcard">Privapp mensajería cifrada</p>
                    <img class='back-img' src="img/privappback.png" alt="" />
                    <p class="backcard-description">
                    Una aplicación sencilla, donde podrás cifrar y descifrar mensajes utilizando el metodo del “Cifrado Cesar”, el cual con un número fijo de desplazamiento reemplaza las letras en el abecedario codificando el mensaje.
                    </p>
                    <div class='backcard-buttons'>
                      <a href=''><img class='ver-pag-button' type='button' src="img/ver-pagina-button.png" alt="" /></a>
                      <a href=''><img type='button' class='ver-repo-button' src="img/ver-repo-button.png" alt=""/></a>
                    </div>
                  </div>
                </div>
              </section>
              <section class="flip-card">
                <div class="flip-card-inner">
                  <div class="frontCard">
                    <img id="photo" class="photo" src="img/trivia.png" />
                    <div class="card-description">
                      <p class="name-frontcard">Trivia de Videojuegos</p>
                      <p class="description-frontcard">Javascript Vanilla - HTML5 - CSS3 <br> Git | Github - Github Pages- Node.js - Jest</p>
                      <img src="img/collab.png" alt="" />
                    </div>
                  </div>
                  <div class="backCard">
                    <p class="name-backcard">Trivia de Videojuegos</p>
                    <img class='back-img' src="img/triviaback.png" alt="" />
                    <p class="backcard-description">
                    Una web app divertida, donde podrás poner a prueba tu nivel de ñoñez mediante preguntas sobre juegos clásicos y actuales.
                    </p>
                    <div class='backcard-buttons'>
                      <a href=''><img class='ver-pag-button' type='button' src="img/ver-pagina-button.png" alt="" /></a>
                      <a href=''><img type='button' class='ver-repo-button' src="img/ver-repo-button.png" alt=""/></a>
                    </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </article>
  </div>
      `;
  divProyects.innerHTML = viewProyects;

  return divProyects;
};
