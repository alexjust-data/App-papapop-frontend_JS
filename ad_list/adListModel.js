
// Transformamos la información que nos llega de la API
const transformAds = (ads) => {
    return ads.map(ad => {
        return {
            image: ad.imagen,
            price: ad.precio,
            title: ad.titulo,
        }
    })
}


// Función asincrónica. 'async' indica que la función maneja promesas con 'await'.
export const getAds = async () => {
    const url = "http://127.0.0.1:8000/api/ads?_expand=user";
    let parsedAds = []; 

    try {
        const response = await fetch(url);    
        const ads = await response.json(); 
        parsedAds = transformAds(ads); 
    } catch (error) {
        throw error; 
    }
    
    return parsedAds; 
}
