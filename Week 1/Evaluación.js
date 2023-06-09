import fetch from 'node-fetch';

// Array de URLs
const urls = [
  'https://goaxil.com/collections/ear-buds/products/gs-electronic.js',
  'https://therollingstonesshop.com/products/americana-tongue-unisex-black-t-shirt.js',
  'https://offhours.co/collections/shop-all/products/affogato-1.js',
  'https://www.danskin.com/products/calming-slip-on-sneaker.js',
  //'https://www.url.fail/expected-error.js'
];

// Funcion para traer los datos utilizando API Fetch
function llamarData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  Promise.all(urls.map(url => llamarData(url)))
    .then(resultados => {
      const resultadoFinal = resultados.map((data, index) => {
        if (data instanceof Error) {
          // En caso de error, rellenar con la información de error
          return {
            url: urls[index],
            error: data.message
          };
        } else {
          // Extraer las propiedades necesarias
          const { title, brand, images, url, id, groupId, price } = data;
          return {
            title,
            brand,
            images,
            url,
            id,
            groupId,
            price
          };
        }
      });
  
      console.log('Resultado:', resultadoFinal);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });