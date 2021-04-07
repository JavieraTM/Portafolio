import { home } from './view/templateHome.js';
import { aboutme } from './view/templateAboutMe.js';
import { proyects } from './view/templateProyects.js';
import { contact } from './view/templateContact.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#':
      containerRoot.appendChild(home());
      break;
    case '#aboutme':
      containerRoot.appendChild(aboutme());
      break;
    case '#proyects':
      containerRoot.appendChild(proyects());
      break;
    case '#contact':
      containerRoot.appendChild(contact());
      break;
    default:
      containerRoot.innerHTML = `
      <h2>No se han encontrado resultados:(</h2>
          `;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#') {
    return showTemplate(hash);
  }
  if (hash === '#proyects') {
    return showTemplate(hash);
  }
  if (hash === '#aboutme') {
    return showTemplate(hash);
  }
  if (hash === '#contact') {
    return showTemplate(hash);
  }
};
