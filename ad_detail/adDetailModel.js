import { sparrestApi } from "../utils/sparrestApi.js";


/** Transforma la estructura de un ad a un formato específico.
 * 
 * @param {Object} ad - El objeto ad original.
 * @returns {Object} - Retorna un objeto con la estructura reformateada.
 */
const parseAd = (ad) => {
    return {
      image: ad.imagen,
      title: ad.titulo,
      price: ad.precio,
      state: ad.estado,
      description: ad.descripcion,
      userId: ad.user.id,         // ID del usuario que creó el ad.
      id: ad.id                    
    }
  }
  
  /** Obtiene un ad específico desde el servidor por su ID, y expande el objeto usuario.
   * 
   * @param {number} adId - El ID del ad a recuperar.
   * @returns {Object} - Retorna el ad solicitado ya transformado.
   * @throws {Error} - Lanza un error si la respuesta no es exitosa o si hay otros problemas.
   */
  export const getAd = async (adId) => {
    const endpoint = `api/ads/${adId}?_expand=user`; // Define el endpoint incluyendo la expansión del usuario.
    
    // Usa la función sparrestApi para hacer una solicitud GET al servidor.
    const ad = await sparrestApi().get(endpoint);
    return parseAd(ad); // Retorna el ad transformado.
  }
  
  /** Elimina un ad específico del servidor usando su ID.
   * 
   * @param {number} adId - El ID del ad a eliminar.
   * @throws {Error} - Lanza un error si la respuesta no es exitosa.
   */
  export const deleteAd = async (adId) => {
    const endpoint = `api/ads/${adId}`; // Define el endpoint para eliminar el ad.
  
    await sparrestApi().delete(endpoint); // sparrestApi() para hacer una solicitud DELETE al servidor.
  }