export const contact = () => {
  const divContact = document.createElement('div');

  const viewContact = `
  <div class="proyects" id="proyects-screen">
      <header>
        <nav>
          <ul>
            <a href="">Inicio</a>
            <a href="#proyects">Proyectos</a>
            <a href="#aboutme">Sobre mi</a>
            <a href="#contact" class='current-menu'>Contacto</a>
          </ul>
        </nav>
      </header>
      <article class="contact-screen">
        <h2 class="contact-title">Contacto</h2>
        <section class="contact-data">
          
          <div class="data">
            <img class='contact-img' src="img/linkedin.png" alt="" />
            <p class="margin-contact">/javieratroncosom</p>
          </div>
          <div class="data">
            <img class='contact-img' src="img/email.png" alt="" />
            <a href='mailto:javieratm13@gmail.com' class="margin-contact">javieratm13@gmail.com</a>
          </div>
          <div class="data">
            <img class='contact-img' src="img/github.png" alt="" />
            <p class="margin-contact">/JavieraTM</p>
          </div>
        </section>
        <section class="contact-bottom-img">
          <img src="img/contact.png" alt="" />
        </section>
      </article>
    </div>
      `;
  divContact.innerHTML = viewContact;
  return divContact;
};
