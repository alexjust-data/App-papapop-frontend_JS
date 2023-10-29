
import { signupController } from "./registerController.js";
import { notificationsController } from "../notifications/notificationsController.js";

// abrimos las cajas del DOM
const signupForm = document.querySelector('#signup'); // <form id="signup">
const notificationsSection = document.querySelector('#notifications'); // <section id="notifications"></section>

const showNotification = notificationsController(notificationsSection); // con esto ya tenemos las notificaciones en la página de signup


signupController(signupForm); // ejecutamos el controlador con los datos de nuestro nodo <form id="signup">

// yo estoy escuchando un evento de qué nodo? signupForm
signupForm.addEventListener('userCreated', (event) => {
    showNotification(
        event.detail.message,  // viene de signupController.js / dispatchEvent --> detail: data
        event.detail.type
    )
});
