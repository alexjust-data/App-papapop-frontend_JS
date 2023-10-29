


// Exporta una función que construye la estructura HTML de un ad
export const buildAd = (ad) => {

    // Define la estructura base del ad con su nombre de usuario (handler) y su mensaje
    let adTemplate = `
            <div class="row mt-4">
              <div class="col-md-8">
                <img src=${ad.image} alt="Product Image" class="img-fluid">
              </div>
              <div class="col-md-4">
                  <h4>${ad.title}</h4>
                  <p class="text-muted">State : ${ad.state}</p>
                  <h5>${ad.price} €</h5>
                  <br>
                  <p>${ad.description}</p>
                  <br>
              </div>
          </div>`;
  
    return adTemplate;
}
  