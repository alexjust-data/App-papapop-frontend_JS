
import { getAds } from "./adListModel.js"; 
import { buildAd, emptyAds } from "./adListView.js"; 


/**Controlador principal para gestionar y mostrar la lista de anuncios (ads).
 *
 * @async
 * @param {HTMLElement} adList - Elemento del DOM donde se mostrarán los anuncios.
 */
export const adListController = async (adList) => {
    adList.innerHTML = ""; 
    let ads = []; 

    try{
        dispatchEvent('startLoadingAds', null, adList); 
        ads = await getAds(); 
    } catch (error) {
        const event = createCustomEvent('error', 'Error loading ads');
        adList.dispatchEvent(event);
    } finally {
        dispatchEvent('finishLoadingAds', null, adList);
      } 


    if (ads.length === 0){
        adList.innerHTML = emptyAds();
    } else {
        renderAds(ads, adList);
        const event = createCustomEvent('success', 'Ads loaded correctly');
        adList.dispatchEvent(event);
    } 
}

/** Renderiza una lista de anuncios en un contenedor del DOM.
 *
 * @param {Array} ads - Lista de anuncios a renderizar.
 * @param {HTMLElement} adList - Elemento del DOM donde se mostrarán los anuncios.
 */
const renderAds = (ads, adList) => {
    ads.forEach(ad => {
        adList.innerHTML += buildAd(ad);  // Construimos la representación HTML del anuncio.
    })
}

/** Crea un evento personalizado para la gestión de anuncios.
 *
 * @param {string} type - Tipo de evento (p. ej., 'error', 'success').
 * @param {string} message - Mensaje detallado del evento.
 * @returns {CustomEvent} - Evento personalizado.
 */
const createCustomEvent = (type, message) => {
    const event = new CustomEvent("adsLoaded", {
        detail: {
            type: type,
            message: message
        }
    });
    return event;
}

/** 
 * Función para despachar un evento personalizado en un formulario.
 * 
 * @param {string} eventName - Nombre del evento personalizado a despachar.
 * @param {*} data - Datos o detalles que se quieran pasar con el evento.
 * @param {HTMLElement} element - Elemento del formulario al que se le despachará el evento.
 */
const dispatchEvent = (eventName, data, element) => {
    
    // Creación de un evento personalizado con el nombre y detalles proporcionados.
    const event = new CustomEvent(eventName, {
      detail: data
    });
  
    // Despachando (emitiendo) el evento personalizado en el formulario especificado.
    element.dispatchEvent(event);
}





