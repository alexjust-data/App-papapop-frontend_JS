



export const buildAd = (ad) => {
    return `
    <div class="col-md-3 mb-4">
        <div class="card">
            <img src="${ad.image}" alt="Producto" class="card-img-top">
            <div class="card-body">
                <p class="card-price"><strong>${ad.price} €</strong></p>
                <h5 class="card-title">${ad.title}</h5>
            </div>
        </div>
    </div>`;
}

export const emptyAds = () => {
    return `<h3>There are no ads available</h3>`;
}
