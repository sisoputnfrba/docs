# Operadores

Un operador representa un símbolo (o conjunto de ellos) que permite realizar operaciones aritméticas, relacionar elementos o hacer preguntas donde se involucra más de una condición. Todos los lenguajes de programación poseen una lista de ellos y dependiendo el mismo cambia su sintaxis. En esta sección explicaremos los distintos operadores que posee Golang

## Operadores Aritméticos

### Operador Postfix

Son operadores de incremento y decremento que permiten agregar el valor de uno o eliminar el valor de uno. A continuación un ejemplo:

Incremento:

```go
package main

import "fmt"

func main() {
	var i int = 10
	i++
	fmt.Println("Resultado", i)
}
```

```Output
Resultado 11
```

Decremento:

```go
package main

import "fmt"

func main() {
	var i int = 10
	i--
	fmt.Println("Resultado", i)
}
```

```Output
Resultado 9
```

### Operadores Signo

Permiten el cambio de signo de una variable. A continuación un ejemplo

```go
package main

import "fmt"

func main() {
	var i int = 10
	fmt.Println("+i =", +i)
	fmt.Println("-i =", -i)
}
```

```Output
+i = 10
-i = -10
```

### Operadores de complemento

Permiten realizar el complemento de una variable. El operador `^` realiza el complemento de una variable bit a bit y el complemento `!` permite la negación. A continuación dos ejemplos:

Complemento:

```go
package main

import "fmt"

func main() {
	var i int = 2
	fmt.Println("^i = ", ^i)
}
```

```Output
^i =  -3
```

Negación:

```go
package main

import "fmt"

func main() {
	var i bool = true
	fmt.Println("!i =", !i)
}
```

```Output
!i = false
```

### Operador Suma/Resta

### Operador Multiplicación/División/Resto

### Otros operadores

Golang posee otros operadores como son los de Exponente, y desplazamiento que a fines de nuestra materia no vamos a utilizar. Para mas información, pueden consultarse en la documentación del lenguaje.

## Operadores Relacionales


## Operadores Condicionales


## Operadores de Asignación