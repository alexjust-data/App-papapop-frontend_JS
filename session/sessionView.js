
// vista usuario NO ha iniciado sesion
export const buildUnauthorizedSession = () => {
    return `            
    <img class="logo" src="./images/logo_papapop.png" alt="papapop Logo" href="./index.html">
            <div class="iconos-header">
                <a href="/index_login.html">
                    <button class="btn btn-outline-secondary" type="button">Register or log in</button>
                </a>
    </div>
    
    
    `;
}

// vista usuario SI ha iniciado sesion, botones de uso
// se lo estamos añadiendo DINAMICAMENTE
export const buildAuthenticatedSession = () => {
return `
        <a href="/index.html">
            <img class="logo" src="images/logo_papapop.png" alt="papapop Logo">
        </a>

        <input class="busqueda" type="search" placeholder="Buscar en todas las categorías">

        <div class="iconos-header">
            <a href="URL_DEL_ICONO_FAVORITOS">
                <img src="./icons/tb-favorites.svg" alt="Icono Favoritos">
            </a>
            <span>Favoritos</span>

            <a href="URL_DEL_ICONO_USUARIO">
                <img src="./icons/tb-you.svg" alt="Icono Usuario">
            </a>
            <span>Tu</span>

            <a href="/index.html">
                <button class="btn btn-outline-secondary" type="button">Sign off</button>
            </a>

            <a href="/adCreation.html">
                <button class="btn btn-success btn-subir" href="URL_DEL_ICONO_FAVORITOS">
                    <img src="./icons/mas.png" alt="Icono +"> Subir Producto
                </button>
            </a>
        </div>`;
}


export const buildUnauthenticatedBuyButton = () => {
    return `
    <a href="/index_login.html">
        <div id="buy" class="contenedor-grid">
            <button class="btn btn-success buy">Buy</button>
        </div>
    </a>
    `;
}

export const buildAuthenticatedBuyButton = () => {
    return `
    <a href="/pasareladepago.html">
        <div id="buy" class="contenedor-grid">
            <button class="btn btn-success buy">Buy</button>
        </div>
    </a>
    `;
}

