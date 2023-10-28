
import { deleteAd, getAd } from "./adDetailModel.js"
import { buildAd } from "./adDetailView.js"; 
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js"


export const adDetailController = async (adDetail, adId) => {

    try {
        const ad = await getAd(adId);
        adDetail.innerHTML = buildAd(ad); // ahora quiero pintar el ad
        handleDeleteAd(ad, adDetail); // Evalúa si el usuario tiene permiso para eliminar un ad
    } catch (error) {
        // alert(error)
        // datos que quiero que viajen en el evento
        dispatchEvent('adLoaded', 
                      { type: "error", message: "El ad no existe" }, 
                      adDetail);
        setTimeout(() => {
            window.location = './index.html'; // si el ad no existe ?id=5656 rediccionamos
          }, 3000);
    }
}

/** Evalúa si el usuario tiene permiso para eliminar un ad y, si es así, añade el botón de eliminación.
 * 
 * @param {Object} ad - El objeto ad.
 * @param {HTMLElement} addDetail - El elemento DOM que representa el ad.
 */
const handleDeleteAd = (ad, adDetail) => {
    // Obtiene el token JWT del almacenamiento local.
    const token = localStorage.getItem('token');
  
    if (token) {
      // Decodifica el token para obtener el ID del usuario.
      const { userId } = decodeToken(token);
  
      // Si el ID del usuario coincide con el autor del ad, agrega el botón de eliminación.
      if (userId === ad.userId) {
        addDeleteAdButton(ad, adDetail);
      }
    }
}

/** Añade un botón de eliminación al Ad.
 * 
 * @param {Object} Ad - El objeto ad.
 * @param {HTMLElement} adDetail - El elemento DOM que representa el ad.
 */
const addDeleteAdButton = (ad, adDetail) => {
    // Crea un nuevo botón.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete ad';

    // Añade un evento al botón para manejar la eliminación del ad.
    deleteButton.addEventListener('click', async () => {
      if (confirm('Are you sure do you want delete ad?')) {
        await deleteAd(ad.id);
        window.location = 'index.html';
      }
    })

    // Añade el botón al elemento DOM del ad.
    adDetail.appendChild(deleteButton);
}
