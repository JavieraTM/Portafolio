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
              <a href="#aboutme">Sobre mi</a>
              <a href="#contact">Contacto</a>
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
                      <a href='https://javieratm.github.io/SCL015-data-lovers/src/index.html' target="_blank"><img class='ver-pag-button' type='button' src="img/ver-pagina-button.png" alt="" /></a>
                      <a href='https://github.com/JavieraTM/SCL015-data-lovers' target="_blank"><img type='button' class='ver-repo-button' src="img/ver-repo-button.png" alt=""/></a>
                    </div>
                  </div>
                </div>
              </section>
              
              <section class="flip-card">
                <div class="flip-card-inner">
                  <div class="frontCard">
                    <img id="photo" class="photo" src="img/cipher-portfolio.png" />
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
                      <a href='https://javieratm.github.io/SCL015-cipher/src/' target="_blank"><img class='ver-pag-button' type='button' src="img/ver-pagina-button.png" alt="" /></a>
                      <a href='https://github.com/JavieraTM/SCL015-cipher' target="_blank"><img type='button' class='ver-repo-button' src="img/ver-repo-button.png" alt=""/></a>
                    </div>
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
