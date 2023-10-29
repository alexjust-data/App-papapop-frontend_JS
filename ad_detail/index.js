import { adDetailController } from "./adDetailController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { sessionController } from "../session/sessionController.js";



document.addEventListener('DOMContentLoaded', () => {
  // window.location.search devolvería ?id=2
  const params = new URLSearchParams(window.location.search);
  const adId = params.get("id");


  const notifications = document.querySelector("#notifications"); // identifico la seccion/nodo
  const showNotification = notificationsController(notifications); // muestro notificaciones en el nodo


  const adDetail = document.querySelector('#adDetail');
  
  adDetail.addEventListener('adLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type);
  })

  const session = document.getElementById('session');
  const buy = document.getElementById('buy');
  sessionController(session, buy);
  
  adDetailController(adDetail, adId);
})