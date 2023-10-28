


// Exporta una función que construye la estructura HTML de un ad
export const buildAd = (ad) => {

    // Define la estructura base del ad con su nombre de usuario (handler) y su mensaje
    let adTemplate = `
            <div class="row mt-4">
              <div class="col-md-8">
                <img src=${ad.image} alt="Product Image" class="img-fluid">
              </div>
              <div class="col-md-4">
                  <h5>${ad.title}</h5>
                  <h5>${ad.precio} €</h5>
                  <p class="text-muted">${ad.state}</p>
                  <p>${ad.description}</p>
                  <button class="btn btn-success">Buy</button>
              </div>
          </div>`;
  
    return adTemplate;
}
  