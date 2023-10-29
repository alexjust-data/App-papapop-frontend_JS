import { createAd } from "./adCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";


export const adCreationController = (adCreation) => {

  adCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(adCreation);
    const fileInput = adCreation.querySelector('#image');

    try {
        await createAd(formData, fileInput.files[0]);
        dispatchEvent('adCreated',
                      { type: "success", message: "Anuncio creado correctamente" },
                      adCreation);
        setTimeout(() => {
          window.location = "index.html";
        }, 2000);
      } catch (error) {
        dispatchEvent('adCreated', 
                      { type: "error", message: "Error creando el anuncio" }, 
                      adCreation);      
      }
  })
}
