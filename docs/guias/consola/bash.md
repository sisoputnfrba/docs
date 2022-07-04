# Guía de Bash

A continuación, vas a poder aprender para qué sirven una serie de comandos
seleccionados que van a serte útiles.

Para poder comprender mejor lo que acá se muestra, podés abrir una terminal e ir
siguiendo el uso de los comandos en el orden en que se establecen.

## Comandos básicos

### `pwd`

Este comando nos permite **conocer la ruta absoluta del directorio en el que nos
encontramos** en un momento dado.

::: tip

Contamos con una guía que explica en detalle
[qué son las rutas absolutas y relativas](rutas.md).

:::

### `mkdir`

Nos permite **crear un nuevo directorio** (carpeta). Toma un parámetro: el
nombre del directorio nuevo a generar. Ejemplo:

```:no-line-numbers
mkdir comandos-basicos
```

Nos va a crear una carpeta "hija" del directorio en el que estemos actualmente.

### `ls`

Se utiliza para poder **ver el contenido de un directorio**. Utilizando el
comando sin ningún argumento, nos mostrará el contenido del directorio sobre el
que nos encontramos, pero podríamos ver el contenido de cualquier otro pasando
como argumento la ruta del mismo.

Por ejemplo, si incluimos los flags `-l` para listar la información del archivo
y `-a` para incluir los archivos ocultos (que empiezan con .), veremos algo
parecido a esto:

```:no-line-numbers
$ ls -la
drwxr-xr-x  3 utnso utnso 4096 Jul  4 11:29 .
drwxr-xr-x 24 utnso utnso 4096 Jul  4 11:29 ..
drwxr-xr-x  2 utnso utnso 4096 Jul  4 11:29 comandos-basicos
```

::: tip

Cada columna contiene lo siguiente (si no entienden algo, tranqui, lo verán más
en detalle en la teoría):

- Si el archivo es directorio o no y sus permisos para leer, escribir y
  ejecutar.
- Contador de hard links.
- Nombre de usuario dueño del archivo
- Nombre del grupo dueño del archivo
- Tamaño del archivo
- Fecha y hora de modificación
- Nombre

:::

Si ejecutamos solo `ls`, veremos que únicamente se muestran los nombres y
ocultando los archivos que empiezan con `.`

### `cd`

Este comando nos permite **navegar entre directorios**. Pasándole como argumento
la ruta de un directorio, `cd` nos va a dejar ingresar en él, ejemplo:

```:no-line-numbers
cd comandos-basicos
```

::: tip

Es importante saber que pudimos simplemente invocar el nombre de la carpeta
porque estamos dentro del directorio en el que se encuentra.

:::

Si quisiéramos acceder a un directorio que no se encuentra dentro del actual,
debemos pasarle la ruta absoluta. Ejemplo:

```:no-line-numbers
cd /usr/bin
```

::: tip TIP

Para tener en cuenta:

- `cd ..` nos permite movernos un directorio hacia arriba (es decir, al padre de
  donde nos encontramos actualmente).
- `cd -` nos permite movernos al directorio en el que estábamos anteriormente.
- En caso de que la carpeta se encuentre dentro del directorio home del usuario
  (ej: `/home/utnso`), podemos reemplazar esa parte con un `~`.

:::

### `touch`

Se utiliza para **crear nuevos archivos en blanco**. Como argumento, debemos
pasarle el nombre y la extensión del nuevo archivo a crear. Ejemplo:

```:no-line-numbers
cd ~/comandos-basicos
touch unArchivo.txt
```

Al ejecutar `ls`, podemos ver que ahora nuestro directorio contiene otros dos
directorios y el archivo que acabamos de crear.

### `cat`

Este comando nos permite **imprimir en pantalla el contenido de un archivo**.
Probemos escribiendo algo en el archivo `unArchivo.txt` recién creado.

1. Vamos a utilizar el editor de texto `nano` ejecutando:

```:no-line-numbers
nano unArchivo.txt
```

Este comando va a abrir un editor de texto dentro de la misma consola y nos va a
permitir agregar contenido a nuestro archivo.

2. Copiemos el siguiente texto: `¡Hola! Soy un archivo` y peguémoslo usando
   `Ctrl`+`Shift`+`v`.

3. Salgamos del editor con `Ctrl`+`X` y luego aceptemos guardar los cambios
   escribiendo `y`.

4. Corramos el comando:

```:no-line-numbers
cat unArchivo.txt
```

Veremos que la salida es la oración que acabamos de escribir.

### `mv`

Este comando nos permite **mover archivos de un lugar a otro**, aunque también
se le da uso para **renombrar archivos**. Toma como primer argumento el origen y
como segundo, el destino.

Ej. dentro de comandos-basicos:

- Corremos `mv unArchivo.txt /un-directorio/unArchivo.txt`.
- Haciendo `ls`, vemos que `unArchivo.txt` ya no se encuentra listado en el
  directorio comandos-basicos.
- Haciendo `cd un-directorio` y luego `ls`, vemos que el archivo se encuentra
  ahora dentro de esta carpeta.

Ahora bien, decidamos que ya no nos gusta el nombre que le pusimos a nuestro
archivo y queremos cambiarlo.

- Dentro de comandos-basicos/un-directorio, corremos
  `mv unArchivo.txt chocolate.txt`.
- Haciendo `ls`, vemos que ya no tenemos ningún "unArchivo.txt" sino mas bien un
  "chocolate.txt".
- Haciendo `cat chocolate.txt`, vemos que el contenido se mantuvo.

### `rm`

Este comando nos permite **borrar directorios o archivos**.

Para borrar un archivo, simplemente corremos `rm nombreArchivo.extension`.

Ej.

- Dentro de la carpeta un-directorio, correr `rm chocolate.txt`. Veremos que el
  archivo fue eliminado.

Para borrar una directorio, lo hacemos corriendo `rm -r directorio`.

::: warning IMPORTANTE

Tener en cuenta que si corremos ese comando para un directorio con contenido,
el mismo también será eliminado.

:::

Ej.

- Dentro de la carpeta comandos-basicos, correr `rm -r un-directorio`. Veremos
  que el mismo fue eliminado. (Puede probarse también agregando un nuevo archivo
  con `touch nuevoArchivo.txt` y comprobando que el comando elimina el
  directorio con todo lo que hay dentro.)

### `head` & `tail`

`head` se utiliza para **ver las primeras líneas de un archivo** de texto.

Ej.

- Crear algún archivo usando `touch unArchivo.txt` y completar con
  `nano unArchivo.txt` poniendo los números del 1 al 15 en cada línea (salto de
  línea de por medio).
- Ejecutar `head unArchivo.txt` y luego ejecutar `head -n 5 unArchivo.txt`.
- Vemos que, sin indicaciones extra, el comando nos trae las primeras 10 líneas
  de cualquier archivo, pero también podemos explicitar cuántas líneas queremos
  que nos muestre utilizando el flag `-n` junto con el número deseado.

`tail`, por el otro lado, realiza lo inverso al comando anterior: nos **trae las
últimas líneas de un archivo** de texto. Por defecto traerá las últimas 10
líneas, pero utilizando el mismo flag mencionado anteriormente, podemos
explicitar la cantidad de líneas deseadas.

Se puede repetir el ejemplo anterior utilizando `tail unArchivo.txt` y
`tail -n 5 unArchivo.txt`, en los lugares correspondientes.

::: tip

Una de las grandes utilidades de `tail` es que junto con el flag `-f` nos
permite visualizar las líneas que se van agregando a un archivo en tiempo
real. Esto te puede ser útil para monitorear archivos de logs, por ejemplo,
haciendo `tail -f miArchivo.log`.

:::

### `man`

Nos permite ver la función de cualquier comando de Linux. Sirve para invocar el
_manual_ que nos dice qué hace un comando y cómo se utiliza.

Ej. `man tail` nos explicará cómo funciona el comando `tail`.

### Redirecciones (`>`, `<` y `>>`)

Las redirecciones nos permiten tanto convertir la salida de un comando en un
archivo (`>`) como utilizar un archivo como entrada para un comando (`<`).

Ej.

- Si corremos `echo "aguante sistemas operativos" > redireccion.txt`, vemos que
  no nos devuelve ninguna salida (o _output_). El comando `echo` sirve para
  imprimir lo que pasemos por argumento en pantalla. Si hacemos `ls`, podemos
  ver que ahora existe un nuevo archivo llamado "redireccion.txt", creado por
  nosotros recién.
- Si ahora hacemos `cat < redireccion.txt`, estaremos pasando el archivo como
  parámetro del `cat`, por lo que su contenido será impreso en pantalla y
  coincidirá con la salida del comando `echo` utilizado anteriormente.

Es importante saber que el llamar a `>`, siempre generará un nuevo archivo con
el nombre que indiquemos, incluso si eso implica pisar el contenido de alguno
existente. Si quisiéramos, por el contrario, agregar el nuevo contenido al que
ya había previamente en un archivo existente, debemos utilizar `>>`.

Ej.

- Teniendo en cuenta nuestro archivo creado previamente, si volvemos a llamar el
  comando `echo "aguante sistemas operativos" > redireccion.txt` y luego
  imprimimos el contenido del archivo por pantalla, veremos que la frase está
  sólo una vez y no dos veces aunque hayamos utilizado el comando en dos
  ocasiones.
- Si, en vez, corremos `echo "una nueva linea" >> redireccion.txt`, haciendo
  `cat redireccion.txt`, ahora veremos que el contenido del archivo es el previo
  concatenado con el nuevo.

### Pipes (`|`)

El símbolo `|` nos permite utilizar la salida (output) de un comando como
entrada (input) de otro.

Ej.

- Creemos un archivo haciendo `nano pipes.txt` y llenándolo con el siguiente
  contenido:

```txt:no-line-numbers
primera linea
segunda linea
tercera linea
cuarta linea
```

- Supongamos que ahora queremos obtener la tercera línea de dicho archivo,
  podríamos conseguirlo haciendo `head -n 3 pipes.txt | tail -n 1`.

Este comando nos permite, en vez de tener que hacerlo en dos pasos, ingresar las
tres líneas que resultan la salida del primer comando `head` como entrada del
segundo comando `tail`, que se queda con la última línea.

Otra forma de hacerlo sería `tail -n 2 pipes.txt | head -n 1`: conseguimos
primero las últimas dos líneas y luego la primera de ellas.

## Variables de entorno

Las variables de entorno son aquellas variables definidas para la shell
(intérprete de comandos, consola) que estamos utilizando actualmente, pero que
podemos almacenar para que sean reconocidas cada vez que abrimos una nueva
terminal.

Corriendo el comando `env`, podemos visualizar todas las variables de Linux que
tenemos configuradas. Aparecerán mostrando su nombre seguido de su valor, como
por ejemplo `HOME=/home/utnso`.

Para poder ver el valor de una variable de entorno en particular, podemos
hacerlo usando el comando `echo` y su nombre, por ej. `echo $USER`, nos mostrará
el nombre de nuestro usuario.

::: tip

Para acceder a las variables utilizamos el símbolo `$`.

:::

### ¿Cómo configuro una variable de entorno?

Corriendo `export NOMBRE=valor`, podemos configurar una variable de entorno.

Por ejemplo, si hacemos `export MI_VARIABLE='aguante sistemas operativos'` y
después listamos todas las variables disponibles con `env`, veremos que la que
creamos recién es parte de las mismas. Haciendo `echo $MI_VARIABLE`, vemos que
nos imprime por pantalla el valor de la misma.

El problema que esto tiene es que si probamos cerrando la terminal actual y
abriendo otra sesión, veremos que al correr `echo $MI_VARIABLE` nuevamente, no
nos devolverá nada.

¿Qué ocurrió? Nuestra variable de entorno había sido definida únicamente para la
sesión en la que estábamos trabajando y, por eso, no persistió.

Ahora, ¿cómo hacemos para definir una variable que valga para todas las
sesiones? Podemos hacerlo agregándola al archivo `~/.bashrc`.

::: tip DATO

`~/.bashrc` es un script que se va a ejecutar siempre que iniciemos una consola.

:::

Probemos con un ejemplo:

- Dirigite al directorio home (`/home/utnso`) simplemente poniendo `cd ~`.

- Corriendo `ls -a` podemos ver todos los directorios y archivos que hay. El
  flag `-a` sirve para mostrar también los archivos ocultos y, de no ponerlo, no
  veríamos el `.bashrc`.

- Haciendo `cat .bashrc`, podemos ver el contenido del archivo.

- Para agregar nuestra variable, vamos a usar el editor de texto `nano` haciendo
  `nano .profile`. (Si conocés algún otro, como `vim`, podés usarlo también.)

- Al final del archivo vamos a agregar la siguiente línea:
  `export MI_VARIABLE='aguante sisop'` y la vamos a guardar de la misma forma
  que antes.

- Para que el cambio se haga efectivo, cerramos la consola y abrimos otra.

- Haciendo `echo $MI_VARIABLE`, vemos que nos imprime el valor que habíamos
  seteado.

::: tip

También podemos verificarlo corriendo `env` y viendo que `MI_VARIABLE`
aparece registrada.

:::

Ahora podemos abrir diferentes sesiones tantas veces como queramos y vamos a
seguir teniendo nuestra nueva variable.

## Comandos útiles para la entrega

WIP ([link al borrador](https://docs.google.com/document/d/10N5IAMVSCLz5AGibeI8R50RKvMxfeOwU5SPgI0bokUw/edit#heading=h.cqfzn5kd4ima))


## Material recomendado

- [Mario Bash](https://faq.utnso.com.ar/mariobash) (Juego)
- [34 Linux Basic Commands Every User Should Know](https://www.hostinger.com/tutorials/linux-commands)
