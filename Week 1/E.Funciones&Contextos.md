## 1. Definición de funciones: Define una función utilizando tanto una declaración de función como una expresión de función.

``` js
function saludoDeclaracion(nombre) 
{
  console.log(`¡Hola, ${nombre}!`);
}

const saludoExpresion = function(nombre) 
{
  console.log(`¡Hola, ${nombre}!`);
};

saludoDeclaracion("Oscar"); // ¡Hola, Oscar!
saludoExpresion("Programador"); // ¡Hola, Programador!
```

## 2. Parámetros y argumentos: Define una función que tome dos parámetros y los sume. Llama a la función con dos argumentos y registra el resultado.

``` js
function sumar(a, b) 
{
  return a + b;
}

const resultado = sumar(3, 5);
console.log(resultado); // 8
```

## 3. Funciones anónimas: Crea una función anónima que retorne la longitud de una cadena dada. Asigna esta función a una variable y luego usa esta variable para llamar a la función.

``` js
const funcionLength = function(cadena) 
{
  return cadena.length;
};

const cadena = "Hola, mundo!";
const longitud = funcionLength(cadena);

console.log(longitud); // 12
```

## 4. Funciones de flecha: Convierte la función anónima del ejercicio 3 en una función de flecha.

``` js
const funcionLength = (cadena) => 
{
  return cadena.length;
};

const cadena = "Hola, mundo!";
const longitud = funcionLength(cadena);

console.log(longitud); // 12
```

## 5. Funciones como valores: Crea una función que acepte otra función como parámetro. Llama a esta función con una función de flecha como argumento.

``` js
function ejecutarFuncion(funcion) 
{
  funcion();
}

const funcionFlecha = () => 
{
  console.log("¡Función dentro de función!");
};

ejecutarFuncion(funcionFlecha); // ¡Función dentro de función!
```

## 6. El objeto this en funciones globales: Crea una función en el ámbito global que imprima el valor de this. ¿Qué valor obtienes?

``` js
function valorThis() 
{
  console.log(this);
}

valorThis(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
```

## 7. El objeto this en métodos de objetos: Crea un objeto con un método que imprima el valor de this. ¿Qué valor obtienes cuando llamas a este método?

``` js
const obj = 
{
  valorThis: function() 
  {
    console.log(this);
  }
};

obj.valorThis(); // {valorThis: ƒ}
```

## 8. Uso de funciones dentro de otras funciones: Crea una función que defina una segunda función interna. Esta segunda función deberá acceder a una variable de la función externa. Luego, llama a la función externa y observa el resultado.

``` js
function funcionExterna() 
{
  const variableExterna = "Hola, ¡estoy afuera!";

  function funcionInterna() 
  {
    console.log(variableExterna);
  }

  funcionInterna();
}

funcionExterna(); // Hola, estoy afuera!
```

## 9. El objeto this en funciones de flecha: Crea una función de flecha en el ámbito global y otra como método de un objeto. En cada caso, imprime el valor de this. ¿Qué valor obtienes?

``` js
const funcionGlobal = () => 
{
  console.log(this);
};

funcionGlobal(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

const obj = 
{
  funcionMetodo: () => 
  {
    console.log(this);
  }
};

obj.funcionMetodo(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
```

## 10. El objeto this y el método call: Crea un objeto con un método que use this. Usa el método call para cambiar el contexto de this cuando llames a este método.

``` js
const obj = 
{
  nombre: "Oscar",
  saludar: function() 
  {
    console.log(`Hola, soy ${this.nombre}!`);
  }
};

const otroObj = 
{
  nombre: "Programador"
};

obj.saludar(); // Hola, soy Oscar!
obj.saludar.call(otroObj); // Hola, soy Programador!
```