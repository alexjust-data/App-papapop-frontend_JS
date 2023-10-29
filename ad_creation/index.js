import { adCreationController } from "./adCreationController.js";
import { notificationsController } from "../notifications/notificationsController.js";

const token = localStorage.getItem('token');
if (!token) {
  window.location = './index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const adCreation = document.querySelector('#adCreation');

  const notifications = document.querySelector('#notifications');
  const showNotification = notificationsController(notifications);

  adCreation.addEventListener('adCreated', (event) => { // `nombre propio del evento dispatchEvent('adCreated')` 
    showNotification(event.detail.message, event.detail.type); // función manejadora del evento
  });

  adCreationController(adCreation);

})