# Introducción a la Shell de Linux

A continuación, vas a poder aprender para qué sirven una serie de comandos seleccionados que van a serte útiles.

Para poder comprender mejor lo que acá se muestra, podés abrir una terminal e ir siguiendo el uso de los comandos en el orden en que se establecen.

## Comandos básicos

### `pwd`

Este comando nos permite **conocer la ruta absoluta del directorio en el que nos encontramos** en un momento dado.

::: tip

Contamos con una guía que explica en detalle
[qué son las rutas absolutas y relativas](rutas.md).

:::

### `mkdir`

Nos permite **crear un nuevo directorio** (carpeta). Toma un parámetro: el nombre del directorio nuevo a generar.

Ej. `mkdir comandos-basicos` nos va a crear una carpeta "hija" del directorio en el que estemos actualmente.


### `ls`

Se utiliza para poder **ver el contenido de un directorio**. Utilizando el comando sin ningún argumento, nos mostrará el contenido del directorio sobre el que nos encontramos, pero podríamos ver el contenido de cualquier otro pasando como argumento la ruta del mismo.

Ej. `ls` nos mostrará el contenido de nuestro directorio actual. Deberíamos dentro ver el nombre "comandos-basicos" de la carpeta que recién creamos.

### `cd`

Este comando nos permite **navegar entre directorios**. Pasándole como argumento la ruta de un directorio, `cd` nos va a dejar ingresar en él.

Ej. como vimos antes con `ls`, existe nuestro directorio `comandos-basicos`, pero aún no estamos dentro de él. Para accederlo, podemos hacer `cd comandos-basicos`.
Si utilizamos de nuevo `ls`, veremos que nada nos es devuelto, poque el directorio todavía está vacío.

Es importante saber que pudimos simplemente invocar el nombre de la carpeta (`cd comandos-basicos`) porque estamos dentro del directorio en el que se encuentra.

Si quisiéramos acceder a un directorio que no se encuentra dentro del actual, debemos pasarle la ruta absoluta:

Ej.
- Creemos dos carpetas dentro de comandos-basicos haciendo `mkdir un-directorio` y luego `mkdir otro-directorio`.
- Corriendo `ls` veremos que dentro de nuestro directorio comandos-basicos se encuentran los dos recientemente creados.
- Si corremos `cd un-directorio`, nos moveremos dentro de una de las nuevas carpetas.
- Ahora bien, si intentamos correr `cd otro-directorio`, veremos que esto nos da un error, debido a que no se reconoce una carpeta dentro de la actual con dicho nombre.
- Podemos, en cambio, utilizar el comando de la siguiente manera: `cd ~/comandos-basicos/otro-directorio`. Veremos que ahora sí nos reconoce el directorio, debido a que pasamos su ruta absoluta y pudo encontrarlo.

#### Para tener en cuenta

- `cd ..` nos permite movernos un directorio hacia arriba (es decir, al padre de donde nos encontramos actualmente).
- `cd` nos permite ir directamente a la carpeta `home`.
- `cd -` nos permite movernos al directorio en el que estabamos anteriormente.

### `touch`

Se utiliza para **crear nuevos archivos en blanco**. Como argumento, debemos pasarle el nombre y la extensión del nuevo archivo a crear.

Ej. dentro de `comandos-basicos` correr `touch unArchivo.txt`.
Con `ls`, podemos ver que ahora nuestro directorio contiene otros dos directorios y el archivo que acabamos de crear.


### `cat`

Este comando nos permite **imprimir en pantalla el contenido de un archivo**.

Ej. si encontrándonos en `comandos-basicos` hacemos `cat unArchivo.txt`, veremos que no nos devuelve nada, ya que el archivo que creamos recién no tiene contenido.

Probemos escribiendo algo en él:
- Vamos a utilizar un editor de texto llamado *nano*. Para hacer uso, corramos `nano unArchivo.txt`. Este comando va a abrir un editor de texto dentro de la misma consola y nos va a permitir agregar contenido a nuestro archivo.
- Copiemos el siguiente texto dentro: "*Hola, soy un archivo :)*" y luego salgamos del editor (primero, ctrl + x ; segundo, y; tercero, enter).
- Corramos nuevamente el comando `cat unArchivo.txt`. Esta vez, veremos que la salida es la oración que acabamos de escribir.


### `mv`

Este comando nos permite **mover archivos de un lugar a otro**, aunque también se le da uso para **renombrar archivos**. Toma como primer argumento el origen y como segundo, el destino.

Ej. dentro de comandos-basicos:
- Corremos `mv unArchivo.txt /un-directorio/unArchivo.txt`.
- Haciendo `ls`, vemos que `unArchivo.txt` ya no se encuentra listado en el directorio comandos-basicos.
- Haciendo `cd un-directorio` y luego `ls`, vemos que el archivo se encuentra ahora dentro de esta carpeta.

Ahora bien, decidamos que ya no nos gusta el nombre que le pusimos a nuestro archivo y queremos cambiarlo.
- Dentro de comandos-basicos/un-directorio, corremos `mv unArchivo.txt chocolate.txt`.
- Haciendo `ls`, vemos que ya no tenemos ningún "unArchivo.txt" sino mas bien un "chocolate.txt".
- Haciendo `cat chocolate.txt`, vemos que el contenido se mantuvo.

### `rm`

Este comando nos permite **borrar directorios o archivos**.

Para borrar un archivo, simplemente corremos `rm nombreArchivo.extension`.

Ej.
- Dentro de la carpeta un-directorio, correr `rm chocolate.txt`. Veremos que el archivo fue eliminado.

Para borrar una directorio, lo hacemos corriendo `rm -r directorio`.

> Es importante tener en cuenta que si corremos ese comando para un directorio con contenido, el mismo también será eliminado.

Ej.
- Dentro de la carpeta comandos-basicos, correr `rm -r un-directorio`. Veremos que el mismo fue eliminado.
(Puede probarse también agregando un nuevo archivo con `touch nuevoArchivo.txt` y comprobando que el comando elimina el directorio con todo lo que hay dentro.)


### `head` & `tail`

`head` se utiliza para **ver las primeras líneas de un archivo** de texto.

Ej.
- Crear algún archivo usando `touch unArchivo.txt` y completar con `nano unArchivo.txt` poniendo los números del 1 al 15 en cada línea (salto de línea de por medio).
- Ejecutar `head unArchivo.txt` y luego ejecutar `head -n 5 unArchivo.txt`.
- Vemos que, sin indicaciones extra, el comando nos trae las primeras 10 líneas de cualquier archivo, pero también podemos explicitar cuántas líneas queremos que nos muestre utilizando el flag `-n` junto con el número deseado.

`tail`, por el otro lado, realiza lo inverso al comando anterior: nos **trae las últimas líneas de un archivo** de texto. Por defecto traerá las últimas 10 líneas, pero utilizando el mismo flag mencionado anteriormente, podemos explicitar la cantidad de líneas deseadas.

Se puede repetir el ejemplo anterior utilizando `tail unArchivo.txt` y `tail -n 5 unArchivo.txt`, en los lugares correspondientes.

> Una de las grandes utilidades de `tail` es que junto con el flag `-f` nos permite visualizar las líneas que se van agregando a un archivo en tiempo real. Esto te puede ser útil para monitorear archivos de logs, por ejemplo, haciendo `tail -f miArchivo.log`.

### `man`

Nos permite ver la función de cualquier comando de Linux. Sirve para invocar el *manual* que nos dice qué hace un comando y cómo se utiliza.

Ej. `man tail` nos explicará cómo funciona el comando `tail`.


### Redirecciones (`>`)

Las redirecciones nos permiten tanto convertir la salida de un comando en un archivo (`>`) como utilizar un archivo como entrada para un comando (`<`).

Ej.
- Si corremos `echo "aguante sistemas operativos" > redireccion.txt`, vemos que no nos devuelve ninguna salida (o *output*). El comando `echo` sirve para imprimir lo que pasemos por argumento en pantalla. Si hacemos `ls`, podemos ver que ahora existe un nuevo archivo llamado "redireccion.txt", creado por nosotros recién.
- Si ahora hacemos `cat < redireccion.txt`, estaremos pasando el archivo como parámetro del `cat`, por lo que su contenido será impreso en pantalla y coincidirá con la salida del comando `echo` utilizado anteriormente.

Es importante saber que el llamar a `>`, siempre generará un nuevo archivo con el nombre que indiquemos, incluso si eso implica pisar el contenido de alguno existente. Si quisiéramos, por el contrario, agregar el nuevo contenido al que ya había previamente en un archivo existente, debemos utilizar `>>`.

Ej.
- Teniendo en cuenta nuestro archivo creado previamente, si volvemos a llamar el comando `echo "aguante sistemas operativos" > redireccion.txt` y luego imprimimos el contenido del archivo por pantalla, veremos que la frase está sólo una vez y no dos veces aunque hayamos utilizado el comando en dos ocasiones.
- Si, en vez, corremos `echo "una nueva linea" >> redireccion.txt`, haciendo `cat redireccion.txt`, ahora veremos que el contenido del archivo es el previo concatenado con el nuevo.

### Pipes (`|`)

El símbolo `|` nos permite utilizar la salida (output) de un comando como entrada (input) de otro.

Ej.
- Creemos un archivo haciendo `nano pipes.txt` y llenándolo con el siguiente contenido:
```txt:no-line-numbers
primera linea
segunda linea
tercera linea
cuarta linea
```
- Supongamos que ahora queremos obtener la tercera línea de dicho archivo, podríamos conseguirlo haciendo `head -n 3 pipes.txt | tail -n 1`.

Este comando nos permite, en vez de tener que hacerlo en dos pasos, ingresar las tres líneas que resultan la salida del primer comando `head` como entrada del segundo comando `tail`, que se queda con la última línea.

Otra forma de hacerlo sería `tail -n 2 pipes.txt | head -n 1`: conseguimos primero las últimas dos líneas y luego la primera de ellas.

## Variables de entorno

Las variables de entorno son aquellas variables definidas para la shell (intérprete de comandos, consola) que estamos utilizando actualmente, pero que podemos almacenar para que sean reconocidas cada vez que abrimos una nueva terminal.

Corriendo el comando `env`, podemos visualizar todas las variables de Linux que tenemos configuradas. Aparecerán mostrando su nombre seguido de su valor, como por ejemplo `HOME=/home/sisop`.
Para poder ver el valor de una variable de entorno en particular, podemos hacerlo usando el comando `echo` y su nombre, por ej. `echo $USER`, nos mostrará el nombre de nuestro usuario.

>Utilizamos el símbolo `$` para acceder a las variables.


### ¿Cómo configuro una variable de entorno?

Corriendo `export NOMBRE=valor`, podemos configurar una variable de entorno. Por ejemplo, si hacemos `export MI_VARIABLE='aguante sistemas operativos'` y después listamos todas las variables disponibles con `env`, veremos que la que creamos recién es parte de las mismas. Haciendo `echo $MI_VARIABLE`, vemos que nos imprime por pantalla el valor de la misma.
El problema que esto tiene es que si probamos cerrando la terminal actual y abriendo otra sesión, veremos que al correr `echo $MI_VARIABLE` nuevamente, no nos devolverá nada. ¿Qué ocurrió? Nuestra variable de entorno había sido definida únicamente para la sesión en la que estábamos trabajando y, por eso, no persistió.
Ahora, ¿cómo hacemos para definir una variable que valga para todas las sesiones? Podemos hacerlo agregándola al archivo `.profile`.
Probemos con un ejemplo:
- Dirigite al directorio raíz (root) simplemente poniendo `cd`. Cuando no le pasás ningún argumento, el comando te lleva solo al root.
- Corriendo `ls -a` podemos ver todos los directorios y archivos que hay. El flag `-a` sirve para mostrar también los archivos ocultos y, de no ponerlo, no veríamos el `.profile`.
- Haciendo `cat .profile`, podemos ver el contenido del archivo. Para agregar nuestra variable, vamos a usar el editor de texto _nano_ haciendo `nano .profile`. (Si conocés algún otro, como vim, podés usarlo también.)
- Al final del archivo vamos a agregar la siguiente línea: `export MI_VARIABLE='aguante sisop'` y la vamos a guardar (apretando ctrl+x y luego 'y' para confirmar). Para que el cambio se haga efectivo, tenemos que cerrar la consola y volverla a abrir.
- Haciendo `echo $MI_VARIABLE`, vemos que nos imprime el valor que habíamos seteado. También podemos verificarlo corriendo `env` y viendo que `MI_VARIABLE` aparece registrada. Ahora podemos abrir diferentes sesiones tantas veces como queramos y vamos a seguir teniendo nuestra nueva variable.

## Links útiles

- [34 Linux Basic Commands Every User Should Know](https://www.hostinger.com/tutorials/linux-commands)
- [Mario Bash](https://faq.utnso.com.ar/mariobash) (Juego)
