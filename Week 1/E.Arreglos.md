## 1. Creación de arreglos: Crea un arreglo con cinco elementos y registra su longitud.

``` js
const array = [1, 2, 3, 4, 5];
const longitud = array.length;

console.log(array); // (5) [1, 2, 3, 4, 5]
```

## 2. Acceso a los elementos del arreglo: Accede al primer y al último elemento del arreglo que creaste en el ejercicio 1.

``` js
// const array = [1, 2, 3, 4, 5];
const primerElemento = array[0];
const ultimoElemento = array[array.length - 1];

console.log(primerElemento); // 1
console.log(ultimoElemento); // 5
```

## 3. Modificar elementos de un arreglo: Cambia el valor del tercer elemento en el arreglo que creaste en el ejercicio 1.

``` js
// const array = [1, 2, 3, 4, 5];
array[2] = "tres";

console.log(array); // (5) [1, 2, 'tres', 4, 5]
```

## 4. Agregar elementos a un arreglo: Utiliza el método push para agregar un elemento al final del arreglo del ejercicio 1.

``` js
// const array = [1, 2, 3, 4, 5];
array.push(6);

console.log(array); // (6) [1, 2, 3, 4, 5, 6]
```

## 5. Remover elementos de un arreglo: Utiliza el método pop para eliminar el último elemento del arreglo del ejercicio 1.

``` js
// const array = [1, 2, 3, 4, 5];
array.pop();

console.log(array); // (4) [1, 2, 3, 4]
```

## 6. Recorrer un arreglo con un bucle for: Escribe un bucle for que recorra todos los elementos del arreglo del ejercicio 1 y los imprima.

``` js
// const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) 
{
  console.log(array[i]); // 1 2 3 4 5
}
```

## 7. Recorrer un arreglo con el método forEach: Ahora utiliza el método forEach para hacer lo mismo que en el ejercicio 6.

``` js
// const array = [1, 2, 3, 4, 5];

array.forEach(elemento => 
{
  console.log(elemento); // 1 2 3 4 5
});
```

## 8. Filtrar elementos de un arreglo: Crea un arreglo de números y utiliza el método filter para obtener un nuevo arreglo con solo los números que son mayores que 10.

``` js
const array = [3, 6, 9, 12, 15, 18];
const mayores10 = array.filter(numero => numero > 10);

console.log(mayores10); // (3) [12, 15, 18]
```

## 9. Transformar elementos de un arreglo: A partir del arreglo de números del ejercicio 8, utiliza el método map para obtener un nuevo arreglo donde cada número se haya multiplicado por 10.

``` js
// const array = [3, 6, 9, 12, 15, 18];
const multiplicados10 = array.map(numero => numero * 10);

console.log(multiplicados10); // (6) [30, 60, 90, 120, 150, 180]
```

## 10. Reducir un arreglo a un único valor: A partir del arreglo de números del ejercicio 9, utiliza el método reduce para obtener la suma de todos los números en el arreglo.

``` js
// const array = [3, 6, 9, 12, 15, 18];
const sumador = array.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumador); // 63
```