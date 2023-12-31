/**
 * Módulo Controlador de Notificaciones.
 * 
 * Este módulo es responsable de gestionar y mostrar notificaciones
 * al usuario final utilizando una función vista del módulo `notificationView.js`.
 *
 * @module notificationController
 * @see {@link ./notificationView.js}
 */



import { buildNotification } from "./notificationView.js";


/** Crea y devuelve una función para mostrar una notificación.
 * 
 * Esta función, cuando se invoca, mostrará un mensaje de notificación
 * al usuario y lo eliminará automáticamente después de un corto período de tiempo.
 *
 * @param {HTMLElement} notifications - El nodo DOM donde se mostrará la notificación.
 * @returns {Function} - Una función que recibe un mensaje y un tipo para mostrar una notificación.
 *
 * @example
 * const notificar = notificationController(elementoDOM);
 * notificar("Datos cargados exitosamente", "exito");
 */
export const notificationsController = (notifications) => {
    
    /** Muestra un mensaje de notificación al usuario.
     * 
     * Después de mostrar la notificación, esta será eliminada automáticamente
     * tras un periodo de tiempo (por defecto son 3 segundos).
     * 
     * @param {string} message - El mensaje que se mostrará en la notificación.
     * @param {string} [type] - El tipo de notificación (por ejemplo, 'exito', 'error'). 
     *                          Esta variable puede ser usada por la función `buildNotification` 
     *                          para determinar el estilo o estructura de la notificación.
     */
    const showNotification = (message, type) => {
        notifications.innerHTML = buildNotification(message, type);
        setTimeout(() => {
            notifications.innerHTML = '';
        }, 2000);
    }

    return showNotification;
}
