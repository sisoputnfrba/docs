# Variables y Funciones

Ya tanemos Go instalado y listo para empezar. Escribimos unas cosas y de golpe aparecio en pantalla pero... ¿Qué fue lo que escribimos? Para explicar esto vamos a volver 3 pasos hacia atras y vamos a empezar a desmembrar ese código y hablar de las estructuras básicas que maneja Go y, claramente, como se usan.

Para esto empezaremos a definir dos terminos muy simples y complejos de todo lenguaje de programación ¿Qué es una Variable? y ¿Qué es un Función?

Una variable es una representación simbolica de un espacio de memoria que nosotros estamos reservando. Pero, ¿Qué significa esto?... Cuando nosotros necesitamos hacer operaciones, ya sea declarar un entero, una cadena de caracteres debemos reservar un espacio de memoria en nuestra computadora para poderla guardar y poderla utilizar. Una variable representa esto, un espacio de memoria en el sistema con un nombre simbolico que utilizaremos que normalmente es representativo.

Por otro lado, una función es una "subrutina" o "procedimiento" que contiene un segmento de código separado de otros bloques de código que puede ser invocado en cualquier momento desde la rutina principal u otra subrutina. Toda función tiene parametros de entrada y parametros de salida. Cuando se invoca o ejecuta su segmento de código dicha subrutina solo tendrá acceso a sus parametros de entrada y variables globales.

Bueno... Hasta aca creo que venimos bien... Pero si quedaron dudas, vamos a empezar a hablar de Golang y como interpreta todo esto el lenguaje.

## Variables

Golang es un lenguaje de bajo tipado. ¿Qué significa esto? El lenguaje nos permite definir una variable sin indicarle el tipo de dato que va a tener. Por otro lado, tambien podemos definir una variable indicandole su tipado asignamdole valor o no. De esta manera tenemos tres formas distintas de definir una variable:

```go
package main

import "fmt"

func main() {
	noTipado := 123456
    var tipadoSinValor int
	var tipadoConValor int = 456789
	fmt.Println("Valor no tipado: ", noTipado)
	fmt.Println("Valor tipado sin valor: ", tipadoSinValor)
	fmt.Println("Valor tipado con valor: ", tipadoConValor)
}
```

```Output
Valor no tipado:  123456
Valor tipado sin valor:  0
Valor tipado con valor:  456789
```

Cabe resaltar que cuando nosotros declaramos una variable tipada sin valor Golang predeterminadamente le asigna uno dependiendo el tipo de dato. Cada valor varia del tipo de dato y lo veremos a continuación. 

Golang posee tipos de datos básicos y tipos de datos compuestos. Vamos a ver.

## Variables - Tipos de datos básicos

Dentro de Golang existen cinco tipos de datos basicos:

```go
// Tipos de datos basicos
var soyUnBooleano bool;
var soyUnMensaje string;
var soyUnEntero int;
var soyUnFlotante float32;
var soyUnByte byte;

```

### Bool

`bool` Representa un valor verdadero o falso. Si no se especifica ningun valor, Golang asigna predeterminadamente el valor "0". A continuación un ejemplo:

```go
package main

import "fmt"

func main() {
    var booleanSinValor bool
	var booleanConValor bool = true
	fmt.Println("Boolean sin valor: ", booleanSinValor)
	fmt.Println("Boolean con valor: ", booleanConValor)
}
```

```Output
Boolean sin valor:  false
Boolean con valor:  true
```

### String

`string` Representa una secuencia de caracteres. Un tipo de cadena por defecto es "". A continuación un ejemplo:

```go
package main

import "fmt"

func main() {
    var stringSinValor string
	var stringConValor string = "Soy una cadena"
	fmt.Println("String sin valor: ", stringSinValor)
	fmt.Println("String con valor: ", stringConValor)
}
```

```Output
String sin valor:  
String con valor:  Soy una cadena
```

### Integer

`int` Representa un valor numérico entero. Su valor por defecto es cero. A continuación un ejemplo:

```go
package main

import "fmt"

func main() {
    var intSinValor int
	var intConValor int = 123
	fmt.Println("Entero sin valor: ", intSinValor)
	fmt.Println("Entero con valor: ", intConValor)
}
```

```Output
Entero sin valor:  0
Entero con valor:  123
```

### Float

`float32` y `float64` Representan numéros de punto flotante. La diferencia entre uno y el otro es el tamaño máximo que puede alcanzar siendo el primero de 32 de bits y el segundo de 64. Su valor por defecto es 0. A continuación un ejemplo:

```go
package main

import "fmt"

func main() {
    var floatSinValor float32
	var floatConValor float32 = 17.23
	fmt.Println("Flotante sin valor: ", floatSinValor)
	fmt.Println("Flotante con valor: ", floatConValor)
}
```

```Output
Flotante sin valor:  0
Flotante con valor:  17.23
```

### Byte

`byte` Representa un entero de 8 bits sin signo. Su dato por defecto es 0. Este tipo de dato normalmente sirve para guardar datos que no sabemos que tipo tendran y luego trnasformarlos de uno a otro lado. A continuación un ejemplo:

```go
package main

import "fmt"

func main() {
    var byteSinValor byte
	var byteConValor byte = 1
	fmt.Println("Byte sin valor: ", byteSinValor)
	fmt.Println("Byte con valor: ", byteConValor)
}
```

```Output
Byte sin valor:  0
Byte con valor:  1
```

## Variables - Tipos de datos compuestos

Los tipos de datos compuestos son aquellos que poseen una iteracción entre los anteriores. Dentro de Go existen cuatro tipos:

- `array`: representa una colección de elementos del mismo tipo.
- `slice`: es similar a un array, pero su tamaño puede ser modificado dinámicamente.
- `map`: representa una colección de pares clave-valor.
- `struct`: representa un conjunto de campos con diferentes tipos de datos.

Vamos a ver mas en detalle cada uno...

### Array

El tipo de dato Array representa una coleccion de datos del mismo tipo. Los arrays en Go tiene una longitud fija que se define al momento de la creacion del array. Las posiciones dentro del array comienzan desde 0, osea el primer valor de la colección es el indice 0. El valor por default de un array es el valor default del tipo de dato básico que se este utilizando en cada una de sus posiciones. A continuación un ejemplo

```go
package main

import "fmt"

func main() {
	var arraySinValor [5]int
	var arrayConValor [5]int = [5]int{1, 2, 3, 4, 5}

	fmt.Println("Array sin valor: ", arraySinValor)
	fmt.Println("Array con valor: ", arrayConValor)

	// El indice comienza desde la posicion 0, por lo que el 
	// valor 3 es la posición 2 del array
	fmt.Println("Valor 3 del array: ", arrayConValor[2])
}
```

```Output
Array sin valor:  [0 0 0 0 0]
Array con valor:  [1 2 3 4 5]
Valor 3 del array:  3
```

### Slice

El tipo de datos Slice es similar a un array, pero su tamaño puede ser modificar dinámicamente. Un slice se crea a partir de un array y se puede acceder a sus elementos utilizando la mismas sintaxis que en un array. El valor predeterminado de un slice es la coleccion sin elementos (colección vacia). A continuación un ejemplo:

```go
package main

import "fmt"

func main() {
	var sliceSinValor []int
	var sliceConValor []int = []int{1, 2, 3, 4, 5}

	fmt.Println("Slice sin valor: ", sliceSinValor)
	fmt.Println("Slice con valor: ", sliceConValor)

	// Imprimo el tamaño del slice con valor
	var tamañoSliceConValor = len(sliceConValor)
	fmt.Println("Tamaño del slice con valor: ", tamañoSliceConValor)

	// Agrego un elemento al slice
	sliceConValor = append(sliceConValor, 6)

	// Imprimo el nuevo tamaño del slice con valor
	tamañoSliceConValor = len(sliceConValor)
	fmt.Println("Nuevo tamaño del slice con valor: ", tamañoSliceConValor)

	// Imprimo el nuevo Slice
	fmt.Println("Nuevo slice con valor: ", sliceConValor)

	// El indice comienza desde la posicion 0, por lo que el
	// valor 3 es la posición 2 del slice
	fmt.Println("Valor 3 del slice: ", sliceConValor[2])
}

```

```Output
Slice sin valor:  []
Slice con valor:  [1 2 3 4 5]
Tamaño del slice con valor:  5
Nuevo tamaño del slice con valor:  6
Nuevo slice con valor:  [1 2 3 4 5 6]
Valor 3 del slice:  3
```

Por otro lado, Golang no posee la función de eliminar un índice en particular de un slice sino que debe hacerse a través de hacer sub slice (osea quedarse con una parte del slice original). Para esto, les dejamos un ejemplo de su funcionamiento.

```go
package main

import "fmt"

func main() {
	var mySlice []int = []int{1, 2, 3, 4, 5}

	// Para obtener los primeros dos elementos del array
	fmt.Println("Primeros dos elementos:", mySlice[:2])

	// Para quedarme con todos los elementos posterior al indice 2 (inclusive)
	fmt.Println("Ultimos elementos:", mySlice[2:])

	// Para quitar el elemento de indice 2
	fmt.Println("Slice sin el elemento 3:", append(mySlice[:2], mySlice[2+1:]...))
}
```

```Output
Primeros dos elementos: [1 2]
Ultimos elementos: [3 4 5]
Slice sin el elemento 3: [1 2 4 5]
```

### Map

El Map representa una colección de pares clave-valor. Cada clave en el mapa debe ser única y el valor asociado puede ser cualquier tipo de datos. El valor por defecto es la colección sin elementos (colección vacia). Una vez generado el mapa se pueden acceder a sus valores indicando como "indice" el valor de la Key buscada. Cabe destacar que si la Key no existe el valor que retornará será el valor predefinido del tipo de dato que se encuentre como "valor". A continuación un ejemplo con todas las acciones posibles sobre un mapa:

```go
package main

import "fmt"

func main() {
	var mapSinValor map[string]int
	// Declarar un map con claves de tipo cadena y valores de tipo entero
	var mapConValor map[string]int = map[string]int{"Juan": 28, "Ana": 30}

	fmt.Println("Map sin valor: ", mapSinValor)
	fmt.Println("Map con valor: ", mapConValor)

	// Verificamos la edad de Juan
	fmt.Println("Valor para Juan: ", mapConValor["Juan"])
	// Verificamos la edad de NoExiste
	fmt.Println("Valor para NoExiste: ", mapConValor["NoExiste"])

	// Agregamos el dato Nahuel y lo imprimimos
	mapConValor["Nahuel"] = 32
	fmt.Println("Valor para Nahuel: ", mapConValor["Nahuel"])

	// Eliminamos a Ana e imprimimos el mapa
	delete(mapConValor, "Ana")
	fmt.Println("Map con valor: ", mapConValor)
}
```

```Output
Map sin valor:  map[]
Map con valor:  map[Ana:30 Juan:28]
Valor para Juan:  28
Valor para NoExiste:  0
Valor para Nahuel:  32
Map con valor:  map[Juan:28 Nahuel:32]
```

### Struct

El `struct` representa un conjunto de campos con diferentes tipos de datos. Se utlizan para agrupar diferentes tipos de datos en un única variable. Para esto, debe ser definido previamente. El valor predeterminado es la estructura con sus datos con valor predeterminado dependiendo cada uno de sus tipos. A continuación un ejemplo:

```go
package main

import "fmt"

// Declarar una estructura con diferentes campos
type Persona struct {
	nombre string
	edad   int
	altura float32
}

func main() {
	var structSinValor Persona
	var structConValor Persona = Persona{"Nahuel", 32, 1.77}

	fmt.Println("Struct sin valor:", structSinValor)
	fmt.Println("Struct con valor:", structConValor)

	// Para acceder a una única propiedad
	fmt.Println("Nombre del struct:", structConValor.nombre)

	// Para redefinir una propiedad
	structConValor.edad = 33
	fmt.Println("Edad del struct:", structConValor.edad)
}
```

```Output
Struct sin valor: { 0 0}
Struct con valor: {Nahuel 32 1.77}
Nombre del struct: Nahuel
Edad del struct: 33
```

## Variables - Transformación cadena <-> byte

Bueno, ya conocemos todos los tipos de datos que usaremos a lo largo de nuestra cursada pero falta un poquito mas... A lo largo de nuestro trabajo práctico por diferentes razones seguro tengamos que transformar una cadena (`string`) en un array de bytes. Sin indagar mucho en el porque vamos a explicar el como se hace y lo que pasa al hacerlo.

```go
package main

import "fmt"

func main() {
	//Definimos las variables
	var cadena string = "Hola"
	var arrayBytes []byte

	// Transformamos nuestra cadena en un array de bytes
	arrayBytes = []byte(cadena)

	// Imprimimos el array
	fmt.Println("Array de bytes:", arrayBytes)

	// Convertimos el array de bytes en una cadena
	var nuevaCadena string = string(arrayBytes)

	// Imprimimos la nueva cadena
	fmt.Println("Nueva cadena:", nuevaCadena)
}
```

```Output
Array de bytes: [72 111 108 97]
Nueva cadena: Hola
```

Nuestro código posee una transformación de una cadena con el valor "Hola" a través de la sentencia ``[]byte(cadena)``. Esta sentencia lo que hace es "descomprimir" la cadena original definiendo el valor de cada uno de sus caracteres a su interpretación en UTF-8. De esta manera el resultado nos queda un array de 4 caracteres que representan las cuatro letras de nuestra cadena.

Luego para volver a obtener la cadena a partir del array de bytes se ejecuta la operación `string(arrayBytes)` obteniendo nuevamente la palabra "Hola".

Hasta aca todo es muy lindo y color de rosas peeero... La interpretacón de UTF-8 no administra todos los "simbolos" de nuestro lenguaje. Vayamos con un nuevo ejemplo:

```go
package main

import "fmt"

func main() {
	//Definimos las variables
	var cadena string = "ABC€"
	var arrayBytes []byte

	// Transformamos nuestra cadena en un array de bytes
	arrayBytes = []byte(cadena)

	// Imprimimos el array
	fmt.Println("Array de bytes:", arrayBytes)

	// Convertimos el array de bytes en una cadena
	var nuevaCadena string = string(arrayBytes)

	// Imprimimos la nueva cadena
	fmt.Println("Nueva cadena:", nuevaCadena)
}
```

```Output
Array de bytes: [65 66 67 226 130 172]
Nueva cadena: ABC€
```

En este ejemplo estamos usando el simbolo "€" que en codigo UTF-8 se representa por 3 bytes!! Así tenemos que nuestra cadena en vez de ocupar cuatro bytes como en el primero ejemplo acá ocupa 6. 

La pregunta es, ¿Cual es el objetivo de esto? Si en algún momento (SPOILER ALERT!!) deben guardar cosas en un `[]byte` tienen que saber que no siempre una secuencia de N caracteres va a ocupar N bytes. Y como deberán manejar esto, con sabiduria, inteligencia (y spoiler, las operaciones que antes vimos de slices como por ejemplo `len()`).

## Funciones

Golang maneja funciones a través de su palabra reservada `func`. Las funciones de Golang deben ser declaradas por medio de una firma en la cual se especifiquen que valores reciben y que valores retornan. Para esto, haremos unos ejemplos:

```go
package main

import "fmt"

func main() {
	var valor1 int = 1;
	var valor2 int = 2;

	var suma int = sumar(valor1, valor2)

	fmt.Println("Resultado:", suma)
}

// Definición de función
func sumar(a int, b int) int {
	return a + b
}
```

```Output
Resultado: 3
```

Acá vemos que declaramos dos variables e invocamos a la función suma pasandole dichos valores como argumentos. Nuestra función `sumar` recibe dos parametros `a` y `b` y realiza un retorno con valor `int` expresado en la linea `return a + b`

Cabe aclarar que el orden de los parametros puede no ser arbitrario y el resultado de una función no siempre puede corresponder con el de sus parametros de entrada. Veamos un ejemplo:

```go
package main

import "fmt"

func main() {
	var valor1 int = 20
	var valor2 int = 8

	fmt.Println("Dividir Enteros 20/8:", divideInts(valor1, valor2))

	fmt.Println("Dividir 20/8:", divideFloat(valor1, valor2))
	fmt.Println("Dividir 8/20:", divideFloat(valor2, valor1))
}

func divideInts(a int, b int) int {
	return a / b
}

func divideFloat(a int, b int) float32 {
	return float32(a) / float32(b)
}
```

```Output
Dividir Enteros 20/8: 2
Dividir 20/8: 2.5
Dividir 8/20: 0.4
```

Primero vemos que aca tenemos dos funciones. `divideInts` se encarga de dividir dos enteros y retornar su valor mientras que `divideFloat` se encarga de dividir dos enteros pero antes los transforma en `float32`. Golang cuando opera sobre dos tipos de dato del mismo tipo retorna un valor del MISMO tipo de dato. Esto significa que al dividir dos enteros se obtendra otro ENTERO y no la "división" que todos esperabamos. De esta manera, vemos que `divideFloat` recibe dos enteros y retorna un flotante.

Ahora, podemos tener una función que no tenga un valor de retorno. Veamos un ejemplo:

```go
package main

import "fmt"

func main() {
	var valor1 int = 20
	var valor2 int = 8

	imprimir(valor1)
	imprimir(valor2)
}

func imprimir(a int) {
	fmt.Println("El valor es:", a)
}
```

```Output
El valor es: 20
El valor es: 8
```

En esta función vemos que tenemos una función `imprimir` que se encarga solamente de imprimir en pantalla el argumentos que le llega sin tener retorno alguno.

## Scopes - Variables y Funciones globales

Hemos visto que es una variable y que es una función. Ahora empecemos a hablar de `scope`. Utilizamos la palabra `scope` para definir la reguion en la que existe una variable o función dentro de nuestro código, osea desde "donde se puede acceder a ellos". De esta manera, podemos empezar a definir variables o funciones que sean accesibles por todos o solo dentro de determinado fragmento de codigo. Analicemos un poco mas:

```go
package main

import "fmt"

func main() {
	var valor1 int = 1
	var valor2 int = 2

	var suma int = sumar(valor1, valor2)

	fmt.Println("Resultado:", suma)
}

func sumar(a int, b int) int {
	return a + b
}
```

```Output
Resultado: 3
```

En este ejemplo que vimos antes, tenemos dos variables `valor1` y `valor2` que se encuentran dentro del scope de la función `main` indicando que SOLO pueden ser usadas dentro de dicha función. Ahora podemos mover la variable `valor1` a un scope global

```go
package main

import "fmt"

var valor1 int = 3

func main() {
	var valor2 int = 2

	fmt.Println("Resultado sumar2:", sumar2(valor2))
}

func sumar2(b int) int {
	return valor1 + b
}
```

```Output
Resultado sumar2: 5
```

En este ejemplo, vemos que tenemos una variable declarada de forma GLOBAL pudiendo acceder la funcion sumar2 directamente al valor de la variable `valor1`. Pero, que pasa si empiezo a jugar descaradamente con los scopes...

```go
package main

import "fmt"

var valor1 int = 3

func main() {
	var valor1 int = 1
	var valor2 int = 2

	fmt.Println("Resultado sumar:", sumar(valor1, valor2))
	fmt.Println("Resultado sumar2:", sumar2(valor2))
}

func sumar(a int, b int) int {
	return a + b
}

func sumar2(b int) int {
	return valor1 + b
}
```

```Output
Resultado sumar: 3
Resultado sumar2: 5
```

Viendo este ejemplo tenemos una variable global llamada `valor1` que es accesible por todas las funciones. Dentro de nuestra función `main` vemos que declaramos una nueva variable con el mismo nombre pero asignando otro valor. Golang primero va a buscar la variable desde el scope actual hasta el mas externo. Dentro del scope de main cuando llamemos a `valor1` estaremos hablando de la variable que tiene el valor 1 resultando que el valor de `sumar` de 3 mientras que cuando invocamos a `sumar2` se utilice el valor de la variable declarada globalmente resultando el valor 5 ya que dentro del scope de dicha función no existe una variable declarada con dicho valor.

El objetivo de esto es "CUIDAR" como se nombran a las variables en nuestro código. Golang va a ser exclusivamente lo que nosotros le indiquemos y va a tomar el valor de la variable en el scope en el que este en ese momento.

Por ultimo y de manera semejante se pueden declarar funciones dentro de funciones. Osea podemos declarar una función con distinto scope. Veamos un ejemplo rapido.

```go
package main

import "fmt"

func main() {
	var valor1 int = 1
	var valor2 int = 2

	var sumar = func(a int, b int) int {
		return a + a + b
	}

	fmt.Println("Resultado sumar:", sumar(valor1, valor2))
}

func sumar(a int, b int) int {
	return a + b
}
```

```Output
Resultado sumar: 4
```

En este ejemplo vemos que declaramos dentro de la funcion main una nueva variable `sumar` que representa una funcion que recibe dos parametros (de igual manera a la que esta de manera global). Al igual que con las variables, Golang va a ir buscando la funcion `sumar` desde el scope actual hasta el mas externo. Al tener tanto una funcion global como una particular definida dentro del scope de la función `main` terminará ejecutando la interna.

A donde queremos llegar con esto... Golang nos permite la construcción de nuestro código de manera Imperativa (código lineal con funciones e instrucciones paso a paso) o nos permite si somos muy cuidadoso trabajar nuestro código orientado a Objetos. Esto lo veremos cuando estemos mas avanzados en este tutorial.

