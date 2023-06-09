## 1. Declaración de variables: Declara tres variables usando var, let y const. Asigna a cada una un valor de un tipo de dato diferente.

``` js
var variable1 = 1;
let variable2 = 'uno';
const variable3 = true;    
console.log(variable1, variable2, variable3);
```

## 2. Reasignación de variables: Intenta reasignar las variables declaradas en el ejercicio 1. ¿Qué sucede con cada tipo de variable?

``` js
variable1 = 2; // Se reasigna correctamente
variable2 = "dos"; // Se reasigna correctamente
variable3 = false; // Uncaught TypeError: Assignment to constant variable.
```

## 3. Alcance de las variables: Crea una función e intenta acceder a una variable let definida dentro de la función desde fuera de la función. ¿Qué sucede?

``` js
function test() 
{
  let x = 10;
  console.log(x);
}

test(); // 10
console.log(x); // Uncaught ReferenceError: x is not defined
```

## 4. Alcance de las variables (parte 2): Ahora declara una variable var dentro de la función. ¿Puedes acceder a ella desde fuera de la función?

``` js
function test() 
{
  var x = 10;
  console.log(x);
}

test(); // 10
console.log(x); // 10
```

## 5. Hoisting: Declara una variable con var después de un bloque de código que intenta acceder a esa variable. ¿Qué valor se obtiene al acceder a la variable antes de su declaración?

``` js
console.log(x); // undefined
var x = 10;
```

## 6. Hoisting (parte 2): Repite el ejercicio 5, pero esta vez con una variable let. ¿Qué sucede?

``` js
console.log(x); // Uncaught ReferenceError: x is not defined
let x = 10;
```

## 7. Hoisting de funciones: Declara una función después de un bloque de código que intenta llamar a esa función. ¿Se puede ejecutar la función antes de su declaración?

``` js
test(); // "¡Hola, mundo!"

function test() 
{
  console.log("¡Hola, mundo!");
}
```

## 8. Tipos de datos: Declara variables y asigna a cada una un valor de un tipo de datos diferente. Luego, utiliza typeof para verificar el tipo de cada variable.

``` js
var variable1 = 1;
let variable2 = 'uno';
const variable3 = true;

console.log(typeof variable1); // number
console.log(typeof variable2); // string
console.log(typeof variable3); // boolean
```

## 9. Conversión de tipos: Declara una variable con un número como una cadena (por ejemplo, "123"). Luego, intenta convertirlo en un número usando el objeto Number.

``` js
let string = "123";
let number = Number(string);

console.log(number); // 123              
```

## 10. Objetos y arrays: Declara una variable como un objeto con algunas propiedades y un array con algunos elementos. Luego, intenta agregar, modificar y eliminar propiedades y elementos.

``` js
let persona = 
{
  nombre: "Oscar",
  edad: 22,
  hobbies: ["videojuegos", "música", "programar"]
};

persona.ciudad = "Mérida";
console.log(persona); // {nombre: 'Oscar', edad: 22, hobbies: Array(3), ciudad: 'Mérida'}

persona.hobbies[2] = "deportes";
console.log(persona); // ...hobbies: (3) ['videojuegos', 'música', 'deportes']...

delete persona.edad;
console.log(persona); // {nombre: 'Oscar', hobbies: Array(3), ciudad: 'Mérida'}

persona.hobbies.pop();
console.log(persona); // ...hobbies: (2) ['videojuegos', 'música']...
```