import { adListController } from "./ad_list/adListController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";


const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader); // nos devuleve un objeto con dos propiedades

document.addEventListener('DOMContentLoaded', () => {
    const adList = document.getElementById('ads');
    
    // escucho los eventos
    adList.addEventListener('adsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })
    adList.addEventListener('startLoadingAds', () => {
        //ejecuto el metido de carga de la ruleta
        show();
    })
    adList.addEventListener('finishLoadingAds', () => {
        // ejecuto el metodo de ocultacion
        hide();
    })

    // ejecuto el controlador
    adListController(adList);
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexion', 'error')
})