# Código compartido entre módulos

Cuando empecemos a desarrollar cada módulo, notaremos que hay algunas funciones
que se repiten entre sí. El ejemplo más común son las definiciones del protocolo
de comunicación (como iniciar un servidor, conectarse como cliente, serializar y
deserializar mensajes, etc).

Si queremos reutilizar este código en los distintos proyectos del TP, podemos
crear una **static library**, que es un archivo comprimido en formato `.a` el
cual contiene código compilado que puede ser incluido a un ejecutable en tiempo
de **compilación**[^1].

## Crear un proyecto tipo static library

### Inicialización

Al igual que con un proyecto común, vamos a crear una carpeta y posicionarnos en
ella:

```bash
mkdir utils
cd utils
```

Pero esta vez el template que descarguemos será diferente:

```bash
wget -qO- https://faq.utnso.com.ar/static-library.tar.gz | tar -xzvf - --strip-components 1
```

Si vemos el contenido de la carpeta, notaremos que es similar al de un proyecto
común, pero difiere en que no tiene un archivo `main.c`:

```bash
.
├── .gitignore
├── makefile
├── settings.mk
├── src
│   └── utils
│       ├── hello.c
│       └── hello.h
└── .vscode
    ├── c_cpp_properties.json
    ├── launch.json
    └── tasks.json
```

En su lugar, tenemos un par de archivos `hello.c` y `hello.h`, que nos servirán
de ejemplo para ver cómo importar la static library en otro proyecto.

### Agregar al workspace

De la misma forma que hicimos con los módulos, vamos a agregar la carpeta de la
static library al workspace de Visual Studio Code yendo a la pestaña de
`File` > `Add Folder to Workspace...`:

![vscode-add-folder-to-workspace](/img/guias/estructura/crear-modulos/vscode-add-folder-to-workspace.png)

## Vincular la static library a un módulo

Buenísimo, agregamos la carpeta, pero... ¿cómo hacemos que los demás módulos
apunten a ella? Para esto, vamos a seguir un par de pasos:

### Editar la configuración del proyecto

En cada módulo vamos a encontrar un archivo `settings.mk`, el cual es como una
especie de archivo de configuración del proyecto. En dicho archivo, vamos a
editar las siguientes variables:

```makefile
# Libraries
LIBS=commons pthread readline m // [!code --]
LIBS=utils commons pthread readline m // [!code ++]

# Custom libraries' paths
STATIC_LIBPATHS= // [!code --]
STATIC_LIBPATHS=../utils // [!code ++]
```

::: tip

- La variable `LIBS` es una lista de bibliotecas que el proyecto necesita para
  compilar. El archivo `makefile` del proyecto se encarga de leer dicha lista y
  agregar las bibliotecas correspondientes al comando de compilación mediante el
  flag `-l`.

```bash
gcc -lcommons -lpthread -lreadline -lm <...>
```

- Por otro lado, `STATIC_LIBPATHS` es una lista de rutas a directorios que
  contienen bibliotecas estáticas. El archivo `makefile` del proyecto se encarga
  de leer dicha lista y agregar las rutas correspondientes al comando de
  compilación mediante el flag `-L`, asumiendo que las bibliotecas se encuentran
  en la carpeta `bin` de dichos proyectos.

    ```bash
  gcc -L../utils/bin <...>
  ```

- Además, asumimos que vamos a querer importar el código de la static library
  que se encuentra en la carpeta `src` de la misma, por lo que también incluimos
  el flag `-I` para que el compilador busque los archivos `.h` en dicha carpeta.

  ```bash
  gcc -I../utils/src <...>
  ```

:::

### Editar la configuración de Visual Studio Code

Finalmente, vamos a editar el archivo `c_cpp_properties.json` que se encuentra
en la carpeta `.vscode` de **cada módulo** para que el editor reconozca los
archivos `.h` de la static library:

::: code-group

```json [c_cpp_properties.json]
{
    "configurations": [
        {
            "name": "Linux",
            "includePath": [
                "${workspaceFolder}/../utils/src", // [!code ++]
                "${workspaceFolder}/src"
            ],
            "defines": [],
            "compilerPath": "/usr/bin/gcc",
            "cStandard": "gnu17",
            "cppStandard": "gnu++17",
            "intelliSenseMode": "linux-gcc-x64"
        }
    ],
    "version": 4
}
```

:::


## Incluir en el código

Finalmente, para incluir el código de la static library en el módulo,
simplemente vamos a referenciar los archivos `.h` partiendo desde la carpeta
`src` de la static library. Por ejemplo:


::: code-group

```c:line-numbers [main.c]
#include <utils/hello.h> // [!code ++]

int main(void) {
  hello_world(); // [!code ++]
  return 0;
}
```
:::


::: tip TIP

El template permite agrupar el código en varias carpetas:

```
utils
 └── src
     ├── dto
     │   ├── handshake.c
     │   └── handshake.h
     ├── sockets
     │   ├── cliente.c
     │   ├── cliente.h
     │   ├── servidor.c
     │   └── servidor.h
     └── utils
         ├── string.c
         └── string.h
```
Para luego incluirlos de esta forma:

```c
#include <dto/handshake.h>
#include <sockets/cliente.h>
#include <sockets/servidor.h>
#include <utils/string.h>
#include <string.h>
```

Esto está bueno por si queremos usar el mismo nombre de archivo en distintos
lugares sin que haya **colisiones de nombres**.

:::

## Conclusión

Con estos pasos, ya deberíamos tener un proyecto de tipo static library que
podemos importar en otros módulos. Esto nos va a permitir reutilizar código
entre los distintos proyectos del TP.

<br><br>

[^1]: Esto es diferente a una **shared library**, cuyo código puede ser enlaza
  recién en tiempo de **ejecución**.
