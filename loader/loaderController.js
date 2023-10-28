
import { buildLoader } from './loaderView.js'


export const loaderController = (loader) => {

  const showLoader = () => {                  // Método para mostrar el loader
    loader.classList.add('active');           // Añade la clase 'active' al elemento loader para hacerlo visible
    loader.innerHTML = buildLoader();         // Inserta el HTML del loader en el elemento
  }

  // Método para ocultar el loader
  const hideLoader = () => {
    loader.classList.remove('active');        // Elimina la clase 'active' del elemento loader para ocultarlo
    loader.innerHTML = '';                    // Limpia el contenido interno del elemento loader
  }

  // Retorna un objeto con dos métodos: show y hide para controlar el loader
  return {
    show: showLoader,                        // Propiedad show: contiene el método showLoader
    hide: hideLoader                         // Propiedad hide: contiene el método hideLoader
  }

}
