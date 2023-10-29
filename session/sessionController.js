import { 
  buildUnauthorizedSession, 
  buildAuthenticatedSession, 
  buildAuthenticatedBuyButton,
  buildUnauthenticatedBuyButton  } from "./sessionView.js";

export const sessionController = (nav, buyButtonElement) => {

  if (isUserLoggedIn()) {

    nav.innerHTML = buildAuthenticatedSession();      // aquí inyectamos el botón/nodo
    buyButtonElement.innerHTML = buildAuthenticatedBuyButton();

    const logoutButton = nav.querySelector('button'); // capturo el nodo añadido dinámicamente
    const buyButton = buyButtonElement.querySelector('button'); // capturo el nodo añadido dinámicament


    logoutButton.addEventListener('click', () => {    // agrego escuchador de evento al boton/nodo
      localStorage.removeItem('token');               // elimino el token
      sessionController(nav, buyButtonElement);       // recargo página para ver cambios y ya no entrará al if
    })
    
    buyButton.addEventListener('click', () => {    // agrego escuchador de evento al boton/nodo
      localStorage.removeItem('token');               // elimino el token
      sessionController(nav, buyButtonElement);       // recargo página para ver cambios y ya no entrará al if
    })
  } else {
    nav.innerHTML = buildUnauthorizedSession();
    buyButtonElement.innerHTML = buildUnauthenticatedBuyButton();
  }
}

// nos devuelve el token del usuario, si lo tiene
const isUserLoggedIn = () => {
  return localStorage.getItem('token');
}