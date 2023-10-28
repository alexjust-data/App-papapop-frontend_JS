import { adDetailController } from "./adDetailController.js";
import { notificationsController } from "../notifications/notificationsController.js";



document.addEventListener('DOMContentLoaded', () => {
  // window.location.search devolvería ?name=John&id=123
  const params = new URLSearchParams(window.location.search);
  const adId = params.get("id");


  const notifications = document.querySelector("#notifications"); // identifico la seccion/nodo
  const showNotification = notificationsController(notifications); // muestro notificaciones en el nodo


  const adDetail = document.querySelector('#adDetail');
  
  adDetail.addEventListener('adLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type);
  })
  
  adDetailController(adDetail, adId);
})