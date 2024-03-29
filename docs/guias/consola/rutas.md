# Rutas Relativas y Absolutas

> Tutorial extraído del blog
> [C para Operativos](https://faq.utnso.com.ar/guia-rutas)
> (autor: Matías García Isaia)

Más de una vez hemos puesto rutas absolutas en nuestro código, porque es común
no entender cómo funcionan las rutas absolutas dentro de un programa.

## Current working directory

Cuando ejecutamos un proceso, éste se ejecuta con un directorio de trabajo
asociado (el current working directory, que le llaman). La idea es marcar un
directorio como el "actual" en que se encuentra ese proceso. Desde el programa
podemos acceder a ese valor usando la función `getcwd()`:

::: code-group

```c:line-numbers [cwd.c]
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main(void) {
    char *current_dir = getcwd(NULL, 0);
    printf("El directorio actual es %s\n", current_dir);
    free(current_dir);
    return 0;
}
```

:::

Guardemos el código en nuestro directorio home (`/home/utnso`), compilemos y
ejecutemos:

```bash
utnso@utnso40:~$ pwd
/home/utnso
utnso@utnso40:~$ gcc -Wall cwd.c -o cwd
utnso@utnso40:~$ ./cwd
El directorio actual es /home/utnso
utnso@utnso40:~$ cd /etc/
utnso@utnso40:/etc$ ~/cwd
El directorio actual es /etc
utnso@utnso40:/etc$
```

Por defecto, al iniciar un proceso desde la consola, el directorio de trabajo
actual es el directorio en que estábamos cuando ejecutamos el proceso. Existe,
también, `chdir()`, para cambiar el directorio de trabajo actual, pero se va del
scope de este post su uso.

## Rutas relativas

Y si el CWD nos interesa, eso es porque los paths relativos se resuelven a
partir del directorio actual del proceso. De `man path_resolution`:

> If the pathname does not start with the '/' character, the starting lookup
> directory of the resolution process is the current working directory of the
> process. (This is also inherited from the parent. It can be changed by use of
> the chdir(2) system call.)

> Pathnames starting with a '/' character are called absolute pathnames.
> Pathnames not starting with a '/' are called relative pathnames.

Entonces, si, por ejemplo, a una syscall como `open()` le paso el path
`archivo.log`, `open` va a abrir el archivo llamado `archivo.log` ubicado en el
directorio actual de nuestro proceso. Este no necesariamente es el mismo
directorio desde el que ejecutamos el proceso (porque pudo haber hecho un
`chdir()`), pero por lo general sí lo va a ser.

## Visual Studio Code

Pero más de una vez nos pasa que, trabajando con Visual Studio Code, los path
relativos se resuelven bien ejecutando nuestro proceso desde el editor, pero
falla cuando lo ejecutamos desde la consola.

El problema, acá, es el CWD en cada caso.

Cuando vamos a ejecutar desde la consola, por lo general vamos al directorio
`bin` que contiene nuestro ejecutable, y le damos `./miEjecutable` para
correrlo. En ese caso, el CWD es nuestro directorio `bin`, y todas las rutas
relativas se resuelven a partir de allí.

Pero la configuración de Visual Studio Code provista por la cátedra,
por defecto, utiliza otra ruta para ejecutar el programa. Si nos fijamos en la
carpeta `.vscode` de nuestro proyecto, vamos a encontrar un archivo llamado
`launch.json`. Una vez lo abramos, veremos algo así:

```json
{
  // See https://go.microsoft.com/fwlink/?linkid=830387
  // for the documentation about the launch.json format
  "version": "0.2.0",
  "configurations": [
    {
      "name": "run",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/bin/${workspaceFolderBasename}", // [!code focus]
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}", // [!code focus]
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "build"
    }
  ]
}
```

¡Ahí está! El campo `cwd` es la carpeta desde la cual Visual Studio Code va a
"hacerle `cd`". En este caso, siempre va a ser la carpeta en donde se encuentra
nuestro proyecto.

Entonces, si nosotros queremos ejecutar nuestro programa desde la consola de la
misma forma que lo hace Visual Studio Code, vamos a tener que hacerlo de la
siguiente manera:

```bash
cd mi-proyecto
./bin/mi-proyecto
```

::: tip

En realidad, lo que hace Visual Studio Code es ejecutar el programa utilizando
`gdb` para poder hacer debugging; y, como pueden ver en el campo `program`,
utiliza una ruta absoluta para llegar al binario. Pero, a fines prácticos, el
resultado es el mismo.

:::

