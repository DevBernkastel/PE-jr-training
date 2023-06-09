import fetch from 'node-fetch';

const urls = [
    'https://goaxil.com/collections/ear-buds/products/gs-electronic.js',
    'https://therollingstonesshop.com/products/americana-tongue-unisex-black-t-shirt.js',
    'https://offhours.co/collections/shop-all/products/affogato-1.js',
    'https://www.danskin.com/products/calming-slip-on-sneaker.js',
    'https://www.url.fail/expected-error.js',
  ];
  
  function llamarData(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  async function obtenerResultados() {
    try {
      const resultados = await Promise.all(urls.map(async (url) => {
        try {
          const data = await llamarData(url);
          return data;
        } catch (error) {
          return error;
        }
      }));
  
      const resultadoFinal = resultados.map((data, index) => {
        if (data instanceof Error) {
          return {
            url: urls[index],
            error: data.message
          };
        } else {
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
    } catch (error) {
      console.error('Ocurrió un error al obtener los datos:', error);
    }
  }
  
  obtenerResultados();