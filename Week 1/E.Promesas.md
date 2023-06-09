## 1. Creación de una promesa: Crea una promesa que se resuelva con el mensaje "¡Promesa resuelta!" después de 2 segundos.

``` js
const promesa = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("¡Promesa resuelta!");
  }, 2000);
});
```

## 2. Consumir una promesa: Consume la promesa que creaste en el ejercicio 1 usando los métodos .then() y .catch().

``` js
promesa
  .then((mensaje) => 
  {
    console.log(mensaje); // ¡Promesa resuelta!
  })
  .catch((error) => 
  {
    console.error("Error encontrado:", error);
  });
```

## 3. Encadenamiento de promesas: Crea una cadena de promesas que se resuelvan una tras otra. Cada promesa debe agregar un número a un valor inicial, y la cadena completa debe sumar un total de 10 al valor inicial.

``` js
let valorInicial = 0;
console.log(`Valor inicial: ${valorInicial}`);

const promesaSuma = (numero) => 
{
  return new Promise((resolve) => 
  {
    setTimeout(() => 
    {
      const resultado = valorInicial + numero;
      console.log(`Nuevo número: ${numero}. Suma actual: ${resultado}`);
      resolve(resultado);
    }, 1000);
  });
};

promesaSuma(2)
  .then((resultadoActual) => promesaSuma(3 + resultadoActual))
  .then((resultadoActual) => promesaSuma(5 + resultadoActual))
  .then((resultadoFinal) => 
  {
    console.log(`Total: ${resultadoFinal}`);
  });
```

## 4. Manejo de errores: Crea una promesa que se rechace con un Error. Consume la promesa y maneja el error correctamente.

``` js
const promesa = new Promise((resolve, reject) => 
{
  setTimeout(() => 
  {
    reject(new Error("Se produjo un error."));
  }, 2000);
});

promesa
  .then((resultado) => 
  {
    console.log("El test fue:", resultado);
  })
  .catch((error) => 
  {
    console.error("Error encontrado:", error.message);
  });
```

## 5. Promesa que se resuelve inmediatamente: Crea una promesa que se resuelva inmediatamente, y consume su resultado.

``` js
const promesa = Promise.resolve("¡Promesa resuelta inmediatamente!");

promesa.then((resultado) => 
{
  console.log(resultado); // ¡Promesa resuelta inmediatamente!
});

```

## 6. Promesa que se rechaza inmediatamente: Crea una promesa que se rechace inmediatamente, y maneja el error.

``` js
const promesa = Promise.reject(new Error("¡Promesa rechazada inmediatamente!"));

promesa.catch((error) => 
{
  console.error(error.message); // ¡Promesa rechazada inmediatamente!
});
```

## 7. Promesas en paralelo: Crea tres promesas que se resuelvan después de 1, 2 y 3 segundos respectivamente. Utiliza Promise.all() para esperar a que todas ellas se resuelvan.

``` js
const promesa1 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 1 resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 2 resuelta");
  }, 2000);
});

const promesa3 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 3 resuelta");
  }, 3000);
});

Promise.all([promesa1, promesa2, promesa3])
  .then((resultado) => 
  {
    console.log("Todas las promesas se han resuelto:", resultado); // Todas las promesas se han resuelto: (3) ['Promesa 1 resuelta', 'Promesa 2 resuelta', 'Promesa 3 resuelta']
  })
  .catch((error) => 
  {
    console.error("Error encontrado:", error);
  });
```

## 8. Promesas en serie: Crea tres promesas similares a las del ejercicio 7, pero en lugar de resolverlas en paralelo, encadena las promesas para que se resuelvan en serie, una tras otra.

``` js
const promesa1 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 1 resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 2 resuelta");
  }, 2000);
});

const promesa3 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 3 resuelta");
  }, 3000);
});

promesa1
  .then((resultadoPromesa1) => 
  {
    console.log(resultadoPromesa1);
    return promesa2;
  })
  .then((resultadoPromesa2) => 
  {
    console.log(resultadoPromesa2);
    return promesa3;
  })
  .then((resultadoPromesa3) => 
  {
    console.log(resultadoPromesa3);
  })
  .catch((error) => 
  {
    console.error("Error encontrado:", error);
  });
```

## 9. Promise.race(): Crea dos promesas, una que se resuelva después de 1 segundo y otra que se rechace después de 2 segundos. Utiliza Promise.race() y maneja tanto la resolución como el rechazo.

``` js
const promesa1 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 1 resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve, reject) => 
{
  setTimeout(() => 
  {
    reject(new Error("Promesa 2 rechazada"));
  }, 2000);
});

Promise.race([promesa1, promesa2])
  .then((resultado) => 
  {
    console.log("Se resolvió la primera promesa:", resultado);
  })
  .catch((error) => 
  {
    console.error("Se rechazó la segunda promesa:", error.message);
  });
```

## 10. Async/await (PARA INVESTIGAR): Reescribe el ejercicio 7 utilizando async/await en lugar de .then() y .catch().

``` js
/*const promesa1 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 1 resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 2 resuelta");
  }, 2000);
});

const promesa3 = new Promise((resolve) => 
{
  setTimeout(() => 
  {
    resolve("Promesa 3 resuelta");
  }, 3000);
});*/

async function procesosPromesas() 
{
  try 
  {
    const resultados = await Promise.all([promesa1, promesa2, promesa3]);
    console.log("Todas las promesas se han resuelto:", resultados);
  } catch (error) 
  {
    console.error("Error encontrado:", error);
  }
}

procesosPromesas(); // Todas las promesas se han resuelto: (3) ['Promesa 1 resuelta', 'Promesa 2 resuelta', 'Promesa 3 resuelta']
```