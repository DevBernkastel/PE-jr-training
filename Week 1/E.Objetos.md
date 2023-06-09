## 1. Creación de objetos: Crea un objeto para representar un libro, que incluya propiedades para el título, el autor y el año de publicación.

``` js
let libro = 
{
  titulo: "Harry Potter y la piedra filosofal",
  autor: "J. K. Rowling",
  publicacion: 1997
};
```

## 2. Acceso a las propiedades de un objeto: Accede a cada una de las propiedades del objeto que creaste en el ejercicio 1 e imprímelas.

``` js
console.log(libro.titulo); // Harry Potter y la piedra filosofal
console.log(libro.autor); // J. K. Rowling
console.log(libro.publicacion); // 1997

console.log(libro); // {titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', publicacion: 1997}
```

## 3. Modificar propiedades de un objeto: Cambia el valor de la propiedad "año de publicación" en el objeto del ejercicio 1.

``` js
libro.publicacion = 2023;

console.log(libro); // {titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', publicacion: 2023}
```

## 4. Agregar propiedades a un objeto: Agrega una nueva propiedad al objeto del ejercicio 1, como la cantidad de páginas del libro.

``` js
libro.cantidadPaginas = 256;

console.log(libro); // {titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', publicacion: 1997, cantidadPaginas: 256}
```

## 5. Eliminar propiedades de un objeto: Utiliza el operador delete para eliminar la propiedad que agregaste en el ejercicio 4.

``` js
delete libro.cantidadPaginas;

console.log(libro); // {titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', publicacion: 1997}
```

## 6. Recorrer las propiedades de un objeto: Utiliza un bucle for...in para recorrer todas las propiedades del objeto del ejercicio 1 e imprimir su nombre y valor.

``` js
for (let elemento in libro) 
{
  console.log(elemento + ": " + libro[elemento]); // titulo: Harry Potter y la piedra filosofal     autor: J. K. Rowling    publicacion: 2023
}
```

## 7. Uso de métodos en objetos: Añade un método al objeto del ejercicio 1 que retorne una cadena con una descripción completa del libro.

``` js
libro.descripcion = function() 
{
  return "Descripción: " + libro.titulo + " de " + libro.autor + ", publicado en " + libro.publicacion;
};

console.log(libro.descripcion());
```

## 8. El operador this en métodos de objetos: Modifica el método del ejercicio 7 para que utilice this para acceder a las propiedades del objeto.

``` js
libro.descripcion = function() 
{
  return "Descripción: " this.titulo + " de " + this.autor + ", publicado en " + this.publicacion;
};

console.log(libro.descripcion());
```

## 9. Optional chaining: Crea un objeto con propiedades anidadas y utiliza el operador optional chaining (?.) para acceder a una propiedad que puede no existir.

``` js
let obj = 
{
  elemento1: "valor1",
  elemento2: 
  {
    elemento3: "valor3",
    elemento4: 
    {
      elemento5: "valor5"
    }
  }
};

console.log(obj.elemento2?.elemento4?.elemento5); // valor5
console.log(obj.elemento2?.elemento4?.elemento6); // undefined
```

## 10. Nullish coalescing operator: Crea un objeto con una propiedad que puede ser null o undefined y utiliza el operador Nullish coalescing (??) para proporcionar un valor por defecto.

``` js
let obj = 
{
  elemento1: null,
  elemento2: undefined
};

let valorPorDefecto = "Valor por defecto";

console.log(obj.elemento1 ?? valorPorDefecto); // Valor por defecto
console.log(obj.elemento2 ?? valorPorDefecto); // Valor por defecto
```