document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí, asumimos que el backend espera un JSON con username y password.
        const userData = {
            username: username,
            password: password
        };

        // Cambiamos el estado a "cargando"
        statusMessage.textContent = 'Registrando...';

        // Enviamos la petición al servidor (usando json-server o tu backend simulado)
        fetch('your_backend_endpoint_for_registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        })
        .then(data => {
            statusMessage.textContent = 'Registro exitoso!';
            // Aquí puedes redirigir al usuario a la página de inicio de sesión o hacer lo que necesites
        })
        .catch(error => {
            statusMessage.textContent = 'Error en el registro. Por favor, intenta nuevamente.';
        });
    });
});
