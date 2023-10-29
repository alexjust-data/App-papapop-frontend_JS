
export const createAd = async (formData, image) => {
    const imageUrl = await uploadImage(image);

    const url = "http://localhost:8000/api/ads";
    const token = localStorage.getItem('token');

    const body = {
      objetivo: formData.get("transactionType"),
      titulo: formData.get("productTitle"),
      categoria: formData.get("categoria"),
      subcategoria: formData.get("subcategoria"),
      estado: formData.get("estado"),
      precio: formData.get("price"),
      descripcion: formData.get("description"),
      hashtags: formData.get("hashtags").split(',').map(tag => tag.trim()),  // Convertir a array
      updatedAt: new Date().toISOString()
    }

    if (imageUrl) {
      body.imagen = imageUrl;
    }


    let response;
    try {
        response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
}

// const uploadImage = async (image) => {
//   let imageUrl;

//   try {
//     const uploadManager = new Bytescale.UploadManager({
//       apiKey: "fd37e54f14c89d0212db3733ab6c8609"
//     });
  
//     const { fileUrl } = await uploadManager.upload({ data: image });
    
//     imageUrl = fileUrl;
//   } catch (error) {
//     imageUrl = null;
//   }

//   return imageUrl;
// }

const uploadImage = async (image) => {
  const API_KEY = 'fd37e54f14c89d0212db3733ab6c8609'; // Cambia esto por tu clave real

  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${API_KEY}`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }

    const data = await response.json();
    return data.data.url;  // Retorna la URL de la imagen subida

  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}
