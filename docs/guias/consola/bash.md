# Guía de uso de Bash

La intención de esta guía es contar con un "machete" de comandos de la consola
de Linux que suelen ser útiles a lo largo de la cursada y en las entregas.

Para familiarizarse con el uso de los más básicos de una forma más interactiva,
los invitamos a jugar a [Mario Bash](https://faq.utnso.com.ar/mariobash)
:joystick:

## Comandos Básicos

### Ver la documentación oficial

El comando `man` nos permite ver el **man**ual de cualquier comando de Linux, o
también cualquier función estándar de C.

Por ejemplo, `man fopen` nos explicará cómo funciona la función `fopen()`, y
`man ls` nos explicará en detalle el comando `ls`.

::: tip

También pueden encontrar los mismos manuales en línea:

- [fopen(3) — Linux manual page](https://man7.org/linux/man-pages/man3/fopen.3.html)
- [ls(1) — Linux manual page](https://man7.org/linux/man-pages/man1/ls.1.html)

:::

### Moverse entre carpetas

| Comando | Descripción                                                                                          | Parámetros                                                                                                 |
| :-----: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
|  `pwd`  | Imprimir la ruta absoluta del directorio actual (del inglés: _**p**rint **w**orking **d**irectory_). | -                                                                                                          |
|  `cd`   | **C**ambiar el **d**irectorio actual.                                                                | La ruta (relativa o absoluta)[^1] a un directorio.                                                             |
|  `ls`   | **L**i**s**tar el contenido de un directorio.                                                        | La ruta a un directorio. Si no es especificado, toma el valor del directorio actual. |
| `tree`  | Imprimir el _árbol_ de directorios con sus archivos partiendo desde el directorio indicado.          | La ruta a un directorio. Si no es especificado, toma el valor del directorio actual. |

::: tip TIP 1

- `.` es el directorio actual.
- `..` es el directorio padre (relativo al actual).
- `~` es el directorio home.

Ejemplos:

- `/home/utnso/./Desktop` es lo mismo que `/home/utnso/Desktop`
- `/home/utnso/../username` es lo mismo que `/home/username`
- `~/Documents` es lo mismo que `/home/utnso/Documents`

:::

::: tip TIP 2

Si a `ls` le incluimos los flags `-l` para listar la información del archivo y
`-a` para incluir los archivos ocultos (que empiezan con .), veremos algo
parecido a esto:

```
$ ls -la
drwxr-xr-x 30 utnso utnso 4096 jul  7 00:18 .
drwxr-xr-x  3 root  root  4096 feb 19  2018 ..
-rwxrwxr-x 13 utnso utnso 4096 jul  7 00:18 mi-script.sh
```

De esta forma podemos ver los [permisos](#chmod), el contador de
_hard links_[^2], el usuario y grupo _owner_, el tamaño y
la fecha de última modificación de cada archivo.

:::

### Crear, mover y borrar archivos

| Comando | Descripción                                                           | Parámetros                                 |
| :-----: | --------------------------------------------------------------------- | ------------------------------------------ |
| `mkdir` | Crear un directorio vacío (del inglés: _**m**a**k**e **dir**ectory_). | El nombre del directorio.                  |
| `touch` | Crear un archivo.                                                     | El nombre del archivo.                     |
|  `cp`   | **C**o**p**iar un archivo.                                            | La ruta origen y destino.                  |
|  `mv`   | **M**o**v**er/renombrar un archivo.                                   | El nombre anterior del archivo y el nuevo. |
|  `rm`   | **R**e**m**over/eliminar un archivo.                                  | El nombre del archivo.                     |

::: tip TIP 1

Para eliminar una carpeta con todos sus archivos dentro, se debe agregar el flag
`-r` (de _"recursive"_). Ejemplo: `rm -r /usr/bin/eclipse`

:::

::: tip TIP 2

Todos estos comandos (excepto `touch`) permiten visualizar que la operación se
realizó correctamente utilizando el flag `-v`. Ejemplo:

```bash
$ touch README.md

$ mkdir -v docs
mkdir: created directory 'docs'

$ cp -v README.md HELP.md
'README.md' -> 'HELP.md'

$ mv -v HELP.md docs/HELP.md
renamed 'HELP.md' -> 'docs/HELP.md'

$ rm -v docs/HELP.md
removed 'docs/HELP.md'
```

:::

### Visualizar archivos

|  Comando  | Descripción                                                                     | Parámetros                         |
| :-------: | ------------------------------------------------------------------------------- | ---------------------------------- |
|  `less`   | Ver el contenido de un archivo.                                                 | El nombre del archivo.             |
|   `cat`   | Imprimir el contenido de uno o varios archivos (del inglés: _con**cat**enate_). | El nombre de uno o más archivos.   |
|  `head`   | Imprimir las primeras 10 líneas de un archivo.                                  | El nombre del archivo.             |
|  `tail`   | Imprimir las últimas 10 líneas de un archivo.                                   | El nombre del archivo.             |
| `hexdump` | Imprimir el contenido de un archivo en **hexadecimal**.                         | El nombre del archivo.             |
|  `grep`   | Filtrar e imprimir el contenido de un archivo.                                  | El filtro y el nombre del archivo. |

::: tip TIP 1

Tanto para `head` como para `tail` se puede especificar el número de líneas a
leer través del flag `-n`:

```bash
# Lee las primeras 5 líneas del archivo ~/.bashrc
head -n 5 ~/.bashrc
# Lee las últimas 7 líneas del archivo ~/.bashrc
tail -n 7 ~/.bashrc
```

:::

::: tip TIP 2

Una de las grandes utilidades de `tail` es que junto con el flag `-f` nos
permite visualizar las líneas que se van agregando a un archivo en tiempo real.

Esto viene como anillo al dedo para monitorear archivos de logs durante la
entrega, por ejemplo, ejecutando:

```bash
tail -f kernel.log
```

:::

::: tip TIP 3

También podemos lograr lo mismo que en el tip anterior usando `less` con el flag
`+F`:

```bash
less +F kernel.log
```

La ventaja respecto a `tail -f` es que con `Ctrl`+`C` podemos pausar el
monitoreo para scrollear por el archivo usando las flechas, lo cual es útil si
estamos en una consola que no permite scroll con el mouse.

Con `Shift`+`F` podemos continuar con el seguimiento que habíamos pausado.

:::

::: tip TIP 4

Una forma más bonita de usar el comando `hexdump` es junto con el flag `-C`, el
cual agrega una columna a la derecha imprimiendo el contenido del archivo en
ASCII.

```
$ hexdump -C main.c

00000000  23 69 6e 63 6c 75 64 65  20 3c 73 74 64 6c 69 62  |#include <stdlib|
00000010  2e 68 3e 0a 23 69 6e 63  6c 75 64 65 20 3c 73 74  |.h>.#include <st|
00000020  64 69 6f 2e 68 3e 0a 0a  69 6e 74 20 6d 61 69 6e  |dio.h>..int main|
00000030  28 29 20 7b 0a 09 70 72  69 6e 74 66 28 22 48 65  |() {..printf("He|
00000040  6c 6c 6f 20 57 6f 72 6c  64 21 21 21 22 29 3b 0a  |llo World!!!");.|
00000050  09 72 65 74 75 72 6e 20  30 3b 0a 7d 0a           |.return 0;.}.|
0000005d
```

Las funciones de
[`memory.h`](https://faq.utnso.com.ar/commons-src/memory.h)
de las commons imprimen un stream de un cierto tamaño utilizando este formato.

:::

### Cambiar permisos y ownership

<br>

#### `chmod`

Permite cambiar los permisos de un archivo (del inglés: _**ch**ange **mod**e_).
Ejemplo:

```bash
# Para dar permisos de ejecución
chmod +x mi-script.sh
# Para configurar nuevos permisos usando el formato Unix
chmod 664 kernel.config
```

<br>

#### `chown`

Permite cambiar el usuario dueño de un archivo (del inglés: _**ch**ange
**own**er_). Ejemplo:

```bash
# Para cambiar el ownership de un archivo a mi usuario
chown $USER ejemplo.txt
# Para cambiar el ownership de una carpeta y todo su contenido
chown -R $USER /home/utnso/swap
```

::: tip TIP 1

Recuerden que pueden validar los permisos del archivo ejecutando `ls -l` sobre
el directorio en donde se encuentre como les mostramos
[acá](#moverse-entre-carpetas).

:::

::: tip TIP 2

Les dejamos un machete para escribir los permisos tipo Unix en octal:

![file](/img/guias/consola/bash-linux-file-permissions.jpg){data-zoomable}

:::

## Comandos útiles para la entrega

### `htop`

Un administrador de procesos de Linux (del inglés: _**h**uman-readable **t**able
**o**f **p**rocesses_). Las features más destacadas son:

- Visualizar el uso de CPU y RAM (para detectar esperas activas y memory leaks).
- Ordenar los procesos por PID, nombre, uso de CPU/RAM, etc. con el mouse.
- Filtrar los procesos (e hilos KLT) por nombre con `F4`.
- Enviar [señales](https://faq.utnso.com.ar/seniales) a uno o varios procesos de
  forma intuitiva con `F9`.

![htop](/img/guias/consola/bash-htop-espera-activa.png){data-zoomable}

::: tip

En la última línea pueden encontrar las distintas opciones que se pueden usar.

:::

<br>

### `ifconfig`

Permite consultar la IP de la VM actual para luego agregarla a los archivos de
configuración (ya sea a mano o a través de un script).

![ifconfig](/img/guias/consola/bash-ifconfig.png){data-zoomable}

<br>

### `nano`

Un editor de texto liviano simple que funciona desde la consola. Es la
alternativa recomendada si llegan a necesitar editar algún archivo de
configuración.

![nano](/img/guias/consola/bash-nano.png){data-zoomable}

::: tip

En la última línea pueden ver las distintas opciones que se pueden usar.

Por ejemplo: `Ctrl` + `x` para salir.

:::

::: details Probemos con un ejemplo...

1. Vamos a abrir un archivo utilizando:

```bash
nano un-archivo.txt
```

Se abrirá el editor de texto dentro de la misma consola y nos va a permitir
agregar contenido al archivo. En caso de que no exista, se crea temporalmente
uno nuevo vacío.

2. Copiemos el siguiente texto: `¡Hola! Soy un archivo`

3. Peguémoslo usando `Ctrl`+`Shift`+`v`

4. Salgamos del editor con `Ctrl`+`X`, aceptemos guardar los cambios escribiendo
   `y` y confirmemos con `Enter`.

5. Corramos el comando:

```bash
cat un-archivo.txt
```

Veremos que la salida es la oración que recién escribimos.

:::

<br>

### `lsof`

Permite listar todos los archivos abiertos. En las entregas, puede ser muy útil
junto con el flag `-i` para corroborar que no haya ningún proceso escuchando en
un puerto en particular. Ejemplo:

```bash
lsof -i :8080
```

![lsof](/img/guias/consola/lsof.png){data-zoomable}


<br>

### `loadkeys`

Permite cambiar el layout del teclado. Por ejemplo, para cambiarlo al Inglés de
Estados Unidos vamos a ejecutar:

```bash
sudo loadkeys us
```

El cambio de layout solo va a afectar la sesión actual, por lo que no hace falta
hacer nada para revertirlo, solamente alcanza con cerrar la terminal actual y
abrir otra.

## Redirecciones y pipes

Todos los procesos reciben información via la _entrada_ estándar (**stdin**) y
devuelven un resultado por la _salida_ estándar (**stdout**) en caso de éxito, o
la salida estándar de _error_ (**stderr**) en caso de que algo falle.

La entrada estándar de varios comandos como `cat`, `head` y `tail` suele ser
un archivo, aunque también para otros como `echo` o `read` suele ser el mismo
teclado. Por otro lado, la salida estándar (ya sea por éxito o error), suele
ser la misma consola:

![pipes](/img/guias/consola/bash-pipes.png){data-zoomable}

Sin embargo, es posible _redirigir_ esos flujos de información (o _streams_)
para que los comandos "se pasen" el resultado el uno al otro, o lo guarden en un
archivo. Para esto, utilizamos **operadores de redirección**.

Estos son los más comunes, junto con un ejemplo de uso:

| Operadores |                                       Caso de uso                                       |                           Ejemplo                           |
| :--------: | :-------------------------------------------------------------------------------------: | :---------------------------------------------------------: |
|    `>`     |       Escribir `stdout` en un archivo, sobreescribiéndolo en caso de ya existir.        | `echo "https://USER:TOKEN@github.com" > ~/.git-credentials` |
|    `>>`    | Concatenar `stdout` al final de un archivo existente (o crearlo en caso de no existir). |     `echo "IP_CONSOLA=192.168.0.200" >> kernel.config`      |
|    `\|`    |                 "Pasarle" el `stdout` de un comando al `stdin` de otro                  |                   `cat *.c \| grep sleep`                   |

::: tip

Notarán que, en caso de error, el texto de `stderr` no se _pasa_ al siguiente
comando ni se escribe en el archivo, sino que _sigue de largo_ hasta llegar a la
consola al ser una salida distinta[^3]:

![pipes-stderr](/img/guias/consola/bash-pipes-stderr.png){data-zoomable}

Es por esto que, desde C, es una buena práctica imprimir los resultados con
`printf(...)` y los logs y errores con `fprintf(stderr, ...)`, a pesar de que
al llegar a la consola se terminen imprimiendo usando el mismo color.

:::

## Variables de entorno

Las variables de entorno son aquellas variables definidas para la consola que
estamos utilizando actualmente, pero que podemos almacenar para que sean
reconocidas cada vez que abrimos una nueva terminal.

Corriendo el comando `env` podemos visualizar todas las variables de Linux que
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

¿Qué ocurrió? Nuestra variable de entorno había sido exportada únicamente para
la sesión en la que estábamos trabajando y sus sesiones hijas, por lo tanto, no
persistió.

Ahora, ¿cómo hacemos para definir una variable que valga para todas las
sesiones? Podemos hacerlo agregando el `export` al final del archivo
`~/.bashrc`.

::: tip

`~/.bashrc` es un script que se va a ejecutar siempre que iniciemos una consola.

:::

::: details Probemos con un ejemplo...

1. Vayamos al directorio home (`/home/utnso`) simplemente poniendo `cd ~`.
2. Corriendo `ls -a` podemos ver todos los directorios y archivos que hay. El
   flag `-a` sirve para mostrar también los archivos ocultos y, de no ponerlo,
   no veríamos el `.bashrc`.
3. Haciendo `less .bashrc`, podemos ver el contenido del archivo.
4. Para agregar nuestra variable, vamos a usar el editor de texto `nano`
   haciendo `nano .bashrc`.
5. Al final del archivo vamos a agregar la siguiente línea:
   `export MI_VARIABLE='aguante sisop'` y la vamos a guardar de la misma forma
   que antes.
6. Para que el cambio se haga efectivo, cerramos la consola y abrimos otra.
7. Haciendo `echo $MI_VARIABLE`, vemos que nos imprime el valor que habíamos
   seteado.

Ahora podemos abrir diferentes sesiones tantas veces como queramos y vamos a
seguir teniendo nuestra nueva variable.

::: tip

También podemos verificarlo corriendo `env` y viendo que `MI_VARIABLE` aparece
registrada. Podemos filtrar con `grep` para encontrarla más fácilmente:

```bash
env | grep MI_VARIABLE
```

:::

## Material recomendado

- [34 comandos básicos de Linux que todo usuario debería conocer](https://www.hostinger.com/tutorials/linux-commands) (en inglés)
- [Como leer y configurar variables de entorno en Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux) (en inglés)

<br>

[^1]: Para más info, ver [Rutas Relativas y Rutas Absolutas](/guias/consola/rutas.md)
[^2]: Para más info, ver [Tutorial sobre Hard Links y Soft Links](https://faq.utnso.com.ar/guia-links)
[^3]: Para más info, ver [Pensando en Pipelines](https://effective-shell.com/part-2-core-skills/thinking-in-pipelines/) (en inglés)
