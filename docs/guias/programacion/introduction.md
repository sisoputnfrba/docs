# Introducción a Golang

Go es un lenguaje de progración, desarrllado por Google, concurrente y compilado con tipado estático inspirado en la sintaxis de C pero con memory security y garbage collector. Es un lenguaje creado en 2009 que actualmente se usa en muchos ambitos laborales y que nos pertirá realizar nuestro trabajo práctico y entender los conceptos de la materia.

A lo largo de esta web vamos a ir mostrando y explicando su funcionamiento con las principales caracteristicas y como hacer las cosas basicas que necesitaremos para nuestro trabajo práctico. Cabe destacar que la explicación que daremos en este sitio esta enfocada en las cosas necesarias y requeridas para la materia pero toda la información expuesta y más se encuentra en la [spec](https://go.dev/ref/spec) oficial del lenguaje.

## Instalando Golang

### Descargar e instalar

El primer paso para arrancar es tener un ambiente estable de desarrollo, cualquier sistema operativo nos será util. Para esto, necesitamos obtener y descargar Golang que lo podremos hacer desde su [pagina oficial](https://go.dev/doc/install). Una vez descargado, deberemos instalarlo siguiendo los pasos del instalador.

#### Linux

En caso que usen un sistema con una distribución de Linux deberemos a su vez agregar al PATH del sistema la carpeta en la cual se encuentra el bin de go. Esto nos permitirá empezar a usar el comando `go`. Para esto, debemos escribir en la terminal:

```bash
$ export PATH=$PATH:/usr/local/go/bin
```

### Verificar la instalación

El comando `go` nos permitirá ejecutar acciones sobre el lenguaje. En este caso usaremos `go version` para verificar que todo hasta acá viene bien. Abriremos una consola y escribiremos:

```bash
$ go version
```

Esto nos debería arrojar la versión de Go instalada. Para verificar todas las opciones que podemos usar con el comando go podemos usar `go help` que nos mostrará todas las opciones del mismo.

## Configuración de IDE - Entorno de desarrollo

En la catedrá recomendamos el uso de [Visual Code](https://code.visualstudio.com/Download) que es de uso libre y gratuito. Por otro lado, en caso de no querer usar esta alternativa, recomendamos el uso de cualquier editor o IDE que permita interpretar el lenguaje Go y posea un minimo lint del mismo.

En caso de optar por Visual Code recomendamos instalar el [plugin de go](https://marketplace.visualstudio.com/items?itemName=golang.Go) para Visual Code que nos permitirá funciones como autocompletado y detección de errores de compilación. Cabe aclarar que al instalar el mismo puede solicitar instalar algunos tools extras para el correcto funcionamiento.

## Creando nuestro primer proceso

Iniciaremos creando un archivo simple para mostrar un Hola Mundo en Go. crearemos el archivo `hello-world.go` con lo siguiente

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Este es (aproximadamente) uno de los programas más chicos que podamos hacer en GO. `main()` es la función que se ejecuta al ejecutar un programa. En este caso, el prototipo de la función es `func main(void)`: nuestro programa no recibirá parámetros (`void`).

Por otro lado estamos usando la sentencia `import` que nos permite incorporar bibliotecas tanto propias como de terceros. En este caso, importamos la biblioteca `fmt` que nos permite imprimir por pantalla.

Nuestro programa tiene una única instrucción: fmt.Println, que nos permitirá imprimir en pantalla el contenido del parametro pasado. Guardémoslo en un archivo `hello-world.go`.

### Ejecutando nuestro programa

Para ejecutar nuestro programa deberemos usar la instrucción `go run` que nos permite ejecutar el código que le pasaremos como segundo parámetro. En este caso usaremos el archivo recién generado `hello-world.go`

```bash
$ go run hello-world.go
Hello, World!
```

Lo que recibiremos por pantalla será lo que imprime por pantalla la funcion `fmt.Println`. 

### Compilando nuestro programa

Bien, hasta aca creamos un programa base y lo ejecutamos, pero ¡Cuidado!, no hemos compilado nuestro programa.

El comando `go run` se encarga de ejecutar nuestro programa sobre los archivos de texto plano pero no estamos ejecutando el mismo desde el código compilado sino que go lo compila y lo ejecuta al mismo tiempo.

Para nuestro trabajo práctico debemos primero compilar el codigo y luego ejecutar el compilado para tener control de que el programa no cambie de prueba a prueba. Para compilar nuestro código debemos ejecutar el comando `go build` de la siguiente manera

```bash
$ go build hello-world.go
```

En este comando lo que estamos diciendo es que compile nuestro archivo `hello-world.go` creando un nuevo archivo ejecutable con el mismo nombre en nuestra carpeta. Para esto, debemos tener en cuenta que el archivo que le pasemos debe tener la función `main()` para que pueda ser compilado de forma que si nuestro programa posee varios archivos aquí solo debemos poner el que tenga dicha función.

Por otro lado, podemos extender un poco este comando para personalizar el ejecutable final que nos retornará usando el parametro `-o`. De esta manera podremos llamar a nuestro producto compilado de otra manera que no sea igual a nuestro archivo de codigo.

#### Compilando en Windows

Para compilar en windows utilizaremos el siguiente comando

```bash
$ go build -o compilado-hello-world.exe hello-world.go
```

#### Compilando en MacOs/Linux

Para compilar en windows utilizaremos el siguiente comando

```bash
$ go build -o compilado-hello-world hello-world.go
```

### Ejecutando nuestro codigo compilado

Por último para ejecutar nuestro código compilado deberemos usar el comando `./`.

```bash
$ ./compilado-hello-world
Hello, World!
```