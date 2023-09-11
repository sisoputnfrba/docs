# Introducción a Golang

Go es un lenguaje de progración, desarrllado por Google, concurrente y compilado con tipado estático inspirado en la sintaxis de C pero con memory security y garbage collector. Es un lenguaje creado en 2009 que actualmente se usa en muchos ambitos laborales y que nos pertirá realizar nuestro trabajo práctico y entender los conceptos de la materia.

## Arrancando - Hola Mundo Go

Inicialmente para empezar a usar un ambiente estable en Go vamos a necesitar descargarlo. Para eso podemos hacerlo desde su [pagina oficial](https://go.dev/doc/install). Una vez realizado, podremos con un editor de texto comenzar a realizar nuestro primer "programa". Cabe destacar que la misma página de Go nos da toda una [spec](https://go.dev/ref/spec) de su lenguaje que podemos ver y encontrar todo lo que necesitemos.

Iniciaremos creando un archivo simple para mostrar un Hola Mundo en Go. crearemos el archivo `hello-world.go` con lo siguiente

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Este es (aproximadamente) uno de los programas más chicos que podamos hacer en GO. `main()` es la función que se ejecuta al ejecutar un programa. En este caso, el prototipo de la función es `func main(void)`: nuestro programa no recibirá parámetros (`void`).

Nuestro programa tiene una única instrucción: fmt.Println, que nos permitirá imprimir en pantalla el contenido del parametro pasado..

Guardémoslo en un archivo `hello-world.go` y compilemos nuestro programa:

```bash
$ go run hello-world.go
Hello, World!
```

`go` es el comando que nos permitirá ejecutar acciones sobre el lenguaje. Para verificar todas las opciones que podemos usar con el comando go podemos usar `go help` que nos permitira ver todas las alternativas de como ejecutar nuestro programa.

El comando `go run` nos permite ejecutar el código que le pasaremos como segundo parámetro, en este caso nuestro código `hello-world.go`. Lo que recibiremos por pantalla será lo que imprime por pantalla la funcion `fmt.Println`.

## Próximos Pasos...

Para no expandir mucha esta sección decidimos crear una [sección](https://docs.utnso.com.ar/guias/programacion/introduction) dentro de esta web exclusiva para el lenguaje Go donde explicaremos varias cosas de su funcionamiento y como manejarnos de una manera efectiva y productiva dentro de el.