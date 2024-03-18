# Crear tu primer proyecto C

Una vez [instaladas las VMs](/primeros-pasos/entorno-linux) (o el entorno Linux que hayas
elegido), debemos continuar con un par de configuraciones antes de arrancar a
desarrollar.

## Descargar la so-commons-library

Para facilitar el desarrollo del TP, desde la cátedra proveemos una biblioteca
con [TADs] de uso común: la _commons library_. Esta biblioteca nos va a proveer
colecciones vistas en AyED, como listas y queues, y funciones para simplificar
el manejo de strings y fechas, entre otras.

[TADs]: https://es.wikipedia.org/wiki/Tipo_de_dato_abstracto

Para descargarla, vamos a abrir una consola y nos vamos a clonar
[el repo](https://faq.utnso.com.ar/commons) para instalarlas
en modo debug[^1]:

```bash
git clone https://github.com/sisoputnfrba/so-commons-library
cd so-commons-library
make debug
make install
```

::: tip

En los
[archivos `*.h` del repo](https://faq.utnso.com.ar/commons-src)
vas a encontrar todas las funciones que pueden usar junto con una breve
descripción.

:::

## Descargar el template oficial

Ahora sí, una vez instaladas las commons, vamos a probar de incluirlas en
nuestro primer proyecto en **Visual Studio Code**.

Para eso, abrimos una nueva consola y creamos un nuevo directorio para nuestro
proyecto:

```bash
mkdir ejemplo
```

Luego, nos vamos a mover a ese directorio:

```bash
cd ejemplo
```

Una vez allí, vamos a descargar el template oficial ejecutando el siguiente
comando:

```bash
wget -qO- https://faq.utnso.com.ar/project.tar.gz | tar -xzvf - --strip-components 1
```

Si ejecutamos `tree -a`, vamos a ver que se nos descargaron varios archivos:

```txt
.
├── .gitignore
├── makefile
├── README.md
├── settings.mk
├── src
│   └── main.c
└── .vscode
    ├── c_cpp_properties.json
    ├── launch.json
    ├── settings.json
    └── tasks.json

2 directories, 9 files
```

## Abrir el proyecto en Visual Studio Code

Ahora, vamos a abrir el directorio que creamos en Visual Studio Code. Podemos
hacerlo desde el editor moviéndonos a `File` > `Open Folder` o utilizando el
comando:

```bash
code .
```

Veremos que se nos abre el editor con el proyecto que acabamos de descargar:

![vscode-open-project](/img/primeros-pasos/primer-proyecto-c/vscode-open-project.gif)

## Cómo compilar

El template ya cuenta con una tarea de compilación que podemos ejecutar desde
el editor moviéndonos a la pestaña _Terminal_ y haciendo click en _Run Build
Task_, o utilizando el shortcut `Ctrl+Shift+B`. Vamos a ver que se nos genera
una carpeta `bin` con el binario del proyecto compilado:

![vscode-run-build-task](/img/primeros-pasos/primer-proyecto-c/vscode-run-build-task.gif)

### Errores de compilación

En caso de que la compilación falle, vamos a poder ver los errores y navegar
entre ellos desde la pestaña de _Problems_:

![vscode-problems](/img/primeros-pasos/primer-proyecto-c/vscode-problems.gif)

::: warning IMPORTANTE

Recuerden ir recompilando el proyecto **activamente**, ya que es la única forma
de recibir feedback inmediato del compilador y corregir los errores de sintaxis
que puedan aparecer.

Una vez corregidos los errores, debemos volver a compilar el proyecto para
que el editor actualice la lista de errores y warnings.

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

![vscode-copy-compiler-output](/img/primeros-pasos/primer-proyecto-c/vscode-copy-compiler-output.gif)

Un texto de error es mucho más útil que una captura de pantalla, ya que nos
permite copiarlo e investigarlo sin tener que transcribirlo manualmente. Además,
si alguien más tiene el mismo problema, va a poder encontrar la solución
utilizando el buscador del foro.

:::

## Cómo ejecutar

Finalmente, para ejecutar el proyecto, nos moveremos a la pestaña
de _Run and Debug_ y haremos a hacer click en el botón de _Run_:

![vscode-run-debug](/img/primeros-pasos/primer-proyecto-c/vscode-run-debug.gif)

Si aparece un mensaje diciendo _Hola, Operativos!!_, ¡felicidades! Ya tenés tu
primer proyecto en C funcionando.

::: tip

Al hacer click en el botón de _Run_, ocurren dos cosas:

1. Se compila el proyecto ejecutando la build task que vimos en el paso
   anterior.
2. Se ejecuta el binario generado en la carpeta `bin` con el nombre del
   proyecto.

Los invitamos a abrir una consola y ejecutar el binario manualmente para
corroborar que se ejecuta de la misma forma en que lo hace el editor:

```bash
make
./bin/ejemplo
```

:::

## Configurar Git

Por último, antes de empezar a subir nuestro código en GitHub, vamos a
configurar nuestro usuario de Git para que al hacer `git commit` quede
registrado nuestro nombre y email:

```bash
git config --global user.email "tumail@tucasilla.com"
git config --global user.name "Tu Nombre"
```

::: warning IMPORTANTE

El email configurado debe ser uno de los mails verificados en tu
[cuenta de GitHub](https://github.com/settings/emails).

:::


## Próximos pasos

- Para ir entrando más de lleno en el Lenguaje C, recomendamos arrancar a
  chusmear nuestra sección de
  [guías de programación en C](/guias/#programación-en%20c).
- También este [tutorial interactivo de C](https://www.learn-c.org/) (en inglés)
  puede ser de utilidad.
- Si te sentís con confianza, arranquemos con el [TP0](/primeros-pasos/tp0).

<br><br>

[^1]:
    ¿Por qué en modo debug? Es una herramienta que nos ayudará
    [más adelante](/guias/herramientas/debugger) (?)
