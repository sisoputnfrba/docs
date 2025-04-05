# Crear tu primer proyecto C

Una vez [instaladas las VMs](/primeros-pasos/entorno-linux) (o el entorno Linux
que hayas elegido), debemos continuar con un par de configuraciones antes de
arrancar a desarrollar dentro de dicho entorno.

## Descargar la so-commons-library

Para facilitar el desarrollo del TP, desde la cátedra proveemos una biblioteca
con [TADs] de uso común: la _commons library_. Esta biblioteca nos va a proveer
colecciones vistas en AyED, como listas y queues, y funciones para simplificar
el manejo de strings y fechas, entre otras.

[TADs]: https://es.wikipedia.org/wiki/Tipo_de_dato_abstracto

Para descargarla, vamos a abrir una consola en Linux y nos vamos a clonar
[el repo](https://faq.utnso.com.ar/commons) para instalarlas en modo debug[^1]:

```bash
git clone https://github.com/sisoputnfrba/so-commons-library
cd so-commons-library
make debug
make install
```

![commons-install](/img/primeros-pasos/primer-proyecto-c/commons-install.gif){data-zoomable}

::: tip

En el [sitio de documentación](https://faq.utnso.com.ar/commons-docs) podemos
encontrar todas las funciones que pueden usar junto con ejemplos de uso.

:::

## Descargar el template oficial

Ahora sí, una vez instaladas las commons, vamos a probar de incluirlas en
nuestro primer proyecto en **Visual Studio Code**.

Para eso, abrimos una nueva consola, también en Linux, y creamos un nuevo
directorio para nuestro proyecto:
```bash
mkdir ejemplo
```

Luego, nos vamos a mover a ese directorio:
```bash
cd ejemplo
```

Y, una vez allí, vamos a descargar el template oficial:

```bash
wget -qO- https://faq.utnso.com.ar/project.tar.gz | tar -xzvf - --strip-components 1
```

Nos van a aparecer listados todos los archivos descargados:

![project-download](/img/primeros-pasos/primer-proyecto-c/project-download.png){data-zoomable}

::: tip

También podés crear un nuevo proyecto desde GitHub incluyendo el template
[c-base-project](https://faq.utnso.com.ar/project) a la hora de crear un nuevo
repositorio:

![github-create-repo-from-template](/img/primeros-pasos/primer-proyecto-c/github-create-repo-from-template.png){data-zoomable}

Y luego clonar el repositorio recién creado ejecutando `git clone`.

:::

Si ejecutamos `tree -a`, vamos a ver que se nos descargaron varios archivos:

| Nombre        | Descripción                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `.vscode/`    | Directorio en donde se encuentran las [configuraciones de Visual Studio Code](/guias/herramientas/code).          |
| `src/`        | Directorio en donde vamos a dejar **todos** los archivos fuente (.c y .h) del proyecto.                           |
| `.gitignore`  | Archivo que le indica a [Git](/primeros-pasos/git) qué archivos y carpetas ignorar al momento de hacer un commit. |
| `makefile`    | Archivo make utilizado para compilar el proyecto.[^2]                                                             |
| `settings.mk` | Archivo con configuraciones extra del proyecto (que iremos conociendo en otras guías de esta página).             |

::: tip

Es importante que **todos** los archivos fuente del proyecto se encuentren en la
carpeta `src`, ya que el Makefile está configurado para buscarlos ahí.

Si querés saber más sobre cómo utilizar varios archivos fuente en un proyecto,
podés pasarte por nuestra guía de
[buenas prácticas de C](/guias/programacion/buenas-practicas).

:::

## Abrir el proyecto en Visual Studio Code

Ahora, vamos a abrir el directorio que creamos en Visual Studio Code. Podemos
hacerlo desde el editor moviéndonos a `File` > `Open Folder` o desde la misma
terminal utilizando el comando:

```bash
code .
```

Veremos que se nos abre el editor con el proyecto que acabamos de descargar:

![vscode-open-project](/img/primeros-pasos/primer-proyecto-c/vscode-open-project.gif){data-zoomable}

## Cómo compilar

El template ya cuenta con una tarea de compilación que podemos ejecutar desde el
editor moviéndonos a la pestaña _Terminal_ y haciendo click en _Run Build
Task_[^3], o utilizando el shortcut `Ctrl+Shift+B`. Vamos a ver que se nos
genera una carpeta `bin` con el binario del proyecto compilado:

![vscode-run-build-task](/img/primeros-pasos/primer-proyecto-c/vscode-run-build-task.gif){data-zoomable}

::: tip

En la pestaña _Terminal_ vamos a ver que se ejecuta el comando `make all` para
compilar el proyecto. Si quisiéramos compilarlo manualmente, podríamos hacerlo
abriendo una consola y ejecutando el mismo comando:

```bash
make all
```

Probá de modificar el archivo `src/main.c` y volvé a compilar el proyecto
ejecutando este comando desde una consola. Vas a ver cómo efectivamente el
output del compilador es el mismo.

:::

### Errores de compilación

En caso de que la compilación falle, vamos a poder ver los errores y navegar
entre ellos desde la pestaña de _Problems_:

![vscode-problems](/img/primeros-pasos/primer-proyecto-c/vscode-problems.gif){data-zoomable}

::: warning IMPORTANTE

Recuerden ir recompilando el proyecto **activamente**, ya que es la única forma
de recibir feedback inmediato del compilador y corregir los errores de sintaxis
que puedan aparecer.

Una vez corregidos los errores, debemos volver a compilar el proyecto para que
el editor actualice la lista de errores y warnings.

:::

Existen distintos tipos de errores:

:x: Los que aparecen en **rojo**. Éstos impiden que el proyecto se compile, por
ejemplo, errores de sintaxis o referencias a variables que no existen.

:warning: Los que aparecen en **amarillo**. Éstos no impiden que el proyecto se
compile, pero es **altamente recomendable** corregirlos, ya que muy
probablemente signifiquen que algo no está funcionando como esperamos, por
ejemplo, tener una variable no se esté utilizando.

::: tip

Si querés que el chequeo de tu código sea más estricto y evitar olvidarte de
corregir los warnings, existe un flag de `gcc` que permite transformarlos en
errores: `-Werror`

Podemos agregarlo fácilmente al final de las variables `CDEBUG` y `CRELEASE` del
archivo `settings.mk`:

```makefile
# Compiler flags
CDEBUG=-g -Wall -DDEBUG -fdiagnostics-color=always // [!code --]
CDEBUG=-g -Wall -DDEBUG -fdiagnostics-color=always -Werror // [!code ++]
CRELEASE=-O3 -Wall -DNDEBUG -fcommon // [!code --]
CRELEASE=-O3 -Wall -DNDEBUG -fcommon -Werror // [!code ++]
```

:::

::: details Cómo reportar errores

Si necesitan compartirnos un error de compilación desde Visual Studio Code, nos
servirá de gran ayuda contar con la salida del compilador. Para obtenerla,
podemos navegar a la pestaña de _Terminal_ y **copiar el texto** que aparece al
ejecutar la tarea de compilación:

![vscode-copy-compiler-output](/img/primeros-pasos/primer-proyecto-c/vscode-copy-compiler-output.gif){data-zoomable}

Un texto de error es mucho más útil que una captura de pantalla, ya que nos
permite copiarlo e investigarlo sin tener que transcribirlo manualmente. Además,
si alguien más tiene el mismo problema, va a poder encontrar la solución
utilizando el buscador del foro.

:::

## Cómo ejecutar

Finalmente, para ejecutar el proyecto, nos moveremos a la pestaña de _Run and
Debug_ y haremos a hacer click en el botón de _Run_:

![vscode-run-debug](/img/primeros-pasos/primer-proyecto-c/vscode-run-debug.gif){data-zoomable}

Si aparece un mensaje diciendo _Hola, Operativos!!_, ¡felicidades! Ya tenés tu
primer proyecto en C funcionando.

::: tip

Al hacer click en el botón de _Run_[^4], ocurren dos cosas:

1. Se compila el proyecto ejecutando la build task que vimos en el paso
   anterior.
2. Se ejecuta el binario generado en la carpeta `bin` con el nombre del
   proyecto.

Los invitamos a abrir una consola en la carpeta ejemplo y ejecutar el binario
manualmente para corroborar que se ejecuta de la misma forma[^5] en que lo hace
el editor:

```bash
./bin/ejemplo
```

:::

## Próximos pasos

- Para ir entrando más de lleno en el Lenguaje C, vamos a continuar con las
  guías de [punteros y memoria dinámica](/guias/programacion/punteros) y de
  [buenas prácticas de C](/guias/programacion/buenas-practicas).
- Además, para aprender a aprovechar al máximo el debugger de Visual Studio
  Code, te recomendamos que leas nuestra guía de
  [debugging](/guias/herramientas/debugger).

<br><br>

[^1]:
    ¿Por qué en modo debug? Es una herramienta que nos ayudará
    [más adelante](/guias/herramientas/debugger) (?)

[^2]:
    La explicación sobre qué es un Makefile y cómo construir uno se encuentra
    fuera del alcance de la materia. Si te interesa, podés arrancar viendo
    [este video](https://www.youtube.com/watch?v=a8mPKBxQ9No&list=PL9IEJIKnBJjEPxenuhKU7J5smY4XjFnyg&index=1)
    o leyendo [este otro tutorial](https://makefiletutorial.com/).

[^3]:
    En [esta sección](/guias/herramientas/code#configuracion-de-compilacion)
    explicamos más en detalle cómo está configurada la tarea de compilación en
    Visual Studio Code.

[^4]:
    En [esta otra sección](/guias/herramientas/code#configuracion-del-debugger)
    explicamos cómo configuramos el debugger en Visual Studio Code.

[^5]:
    En realidad, no es exactamente de la misma forma, ya que el editor utiliza
    el debugger de `gdb` para ejecutar el binario, pero para los fines prácticos
    de este tutorial, podemos considerar que es lo mismo.
