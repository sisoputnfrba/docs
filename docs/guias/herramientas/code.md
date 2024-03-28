# Configuraciones de Visual Studio Code

En este artículo explicaremos en más detalle la configuración de Visual Studio
Code provista por defecto en los templates, para poder acercarles una guía más
completa sobre cómo funciona y cómo pueden modificarla a su gusto.

```
.vscode
├── c_cpp_properties.json # Configuración del plugin de C/C++
├── launch.json           # Configuración del debugger
├── settings.json         # Configuración general del editor
└── tasks.json            # Configuración de compilación
```

## Configuración general del editor

Primero, vamos a hablar de `settings.json`, que es el archivo que contiene la
configuración general del editor de texto.

El mismo cuenta con la siguiente configuración:

::: code-group

<<< @/snippets/guias/herramientas/code/settings.json{json:line-numbers}

:::

1. `debug.onTaskErrors` nos permite definir la acción a realizar en caso de que
   alguna tarea previa a ejecutar el debugger falle. En nuestro caso, esa tarea
   es justamente compilar el ejecutable, por lo que recomendamos abortar la
   ejecución. No queremos estar debuggeando sobre una versión desactualizada del
   código si éste no compila.

2. `files.associations` nos sirve para que el editor reconozca todos los
   archivos `*.h` como código C (y no código C++, que es el valor por defecto).
   De no hacer esto, el editor lo va a hacer individualmente por cada archivo
   `*.h` que abramos, lo cual puede ser bastante molesto.

3. `C_Cpp.errorSquiggles` nos permite deshabilitar algunos mensajes de error que
   nos pueden llegar a aparecer por utilizar algunas features de `gcc` que son
   válidas pero no forman parte del estándar de C[^1], como por ejemplo las
   [nested functions](https://www.youtube.com/watch?v=1kYyxZXGjp0). Además, esto
   permite que el editor nos muestre solamente los errores que arroja el
   compilador y no nos distraiga con otros que no lo son.

## Configuración de compilación

El segundo archivo del que vamos a hablar es el `tasks.json`. En él vamos a
guardar tareas para compilar nuestro proyecto ejemplo de la misma forma que si
nosotros abrieramos una terminal y ejecutáramos manualmente:

```bash
make all
```

Literalmente eso es todo lo que hace. Para esto, la task debe especificar lo
siguiente:

::: code-group

<<< @/snippets/guias/herramientas/code/tasks.json{json:line-numbers}

:::

1. `label`: El nombre de la tarea, para poder identificarla.
2. `command`: Que el comando a ejecutar sea `make all`, partiendo desde la
   carpeta donde se encuentra el proyecto.
3. `type`: El tipo de tarea. En este caso, el comando provisto se debe ejecutar
   en una terminal, por lo que es de tipo `shell`.
4. `group`: A qué grupo de tareas pertenece. En este caso, la tarea es de
   compilación (`build`) y es la tarea por defecto para compilar el proyecto.
5. `problemMatcher`: Que los errores que pueden llegar a surgir provienen de
   ejecutar `gcc`. Esto permite que nos aparezcan en la pestaña `Problems`.

::: tip

Para saber más sobre cómo configurar el archivo `tasks.json`, podés revisar la
[documentación oficial](https://code.visualstudio.com/docs/editor/tasks#_custom-tasks).

:::

Por otro lado, más abajo en el archivo hay otra task que se encarga de eliminar
todos los archivos generados en el proyecto ejecutando `make clean`. Podemos
acceder a la misma accediendo al menú `Terminal` > `Run Task...` y seleccionando
`clean`.

## Configuración del debugger

La configuración del debugger se encuentra dentro del archivo `launch.json`, en
el cual se indica, entre otras cosas:

::: code-group

<<< @/snippets/guias/herramientas/code/launch.json{json:line-numbers}

:::

1. `name`: El nombre de la configuración, que será el mismo que nos aparece en
   la sección `Run and Debug`, seguido por el nombre del proyecto entre
   paréntesis en caso de que haya más de uno abierto.
2. `program`: Es la ruta hacia el ejecutable, usando dos variables
   - `workspaceFolder`: Es la carpeta desde la cual abrimos nuestro proyecto
   - `workspaceFolderBasename`: Es el nombre de esa misma carpeta
3. `args`: Los argumentos que le pasaremos a la función `main()`[^2].
4. `stopAtEntry`: Acá podemos especificar que se detenga en la primera línea al
   iniciar el debugger de la misma forma que lo hace Eclipse (por defecto, no se
   detiene).
5. `cwd`: El Current Working Directory[^3] de nuestro proceso. En este caso,
   también `workspaceFolder`.
6. `externalConsole`: Que no se use una consola externa para debuggear. Esto nos
   permite conservar el output una vez que el proceso se cierre.
7. `preLaunchTask`: Que antes de ejecutar se compile el proyecto usando la tarea
   que creamos recién. Es muy importante usar el mismo campo `label` que hayamos
   elegido para la task.

::: tip

Para saber más sobre cómo configurar el archivo `launch.json`, podés revisar la
documentación oficial del
[debugger](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)
y la del
[debugger de C/C++](https://code.visualstudio.com/docs/cpp/launch-json-reference).

:::

## Configuración del plugin de C/C++

Por último, el
[plugin de C/C++ de VSCode](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
también cuenta con sus configuraciones extra para que el corrector detecte
posibles bugs. Veamos cómo está conformado `c_cpp_properties.json`:

::: code-group

<<< @/snippets/guias/herramientas/code/c_cpp_properties.json{5-7 json:line-numbers}

:::

Entre todos los atributos que se encuentran ahí, el único que nos va a interesar
es el `includePath`.

Como Visual Studio Code no sabe cómo vamos a compilar nuestro proyecto, esta es
la forma que tenemos de indicarle rutas extra desde las cuales buscar archivos
`*.h`.

Por defecto, ya se encuentra definido `"${workspaceFolder}/src"`, por lo que
podemos incluir archivos de dentro del proyecto partiendo desde ahí sin errores.

Si queremos también incluir bibliotecas externas que no se encuentren instaladas
en alguna de las rutas por defecto, deberemos agregarlas manualmente.

::: tip

Por ejemplo, en el TP verán que incluimos la carpeta `utils` en el proyecto
aprovechando la variable `workspaceFolder` para especificar unar ruta relativa,
de esta forma:

```json
"${workspaceFolder}/../utils/src"
```

:::

::: tip TIP 2

La explicación completa sobre cada uno de los atributos de
`c_cpp_properties.json` se encuentra acá:
[c_cpp_properties.json reference](https://code.visualstudio.com/docs/cpp/c-cpp-properties-schema-reference).

:::

<br><br>

[^1]:
    Existe una feature request al respecto en el repo de Visual Studio Code, les
    invitamos a dar su +1 para que se pueda incorporar esta feature en un
    futuro:
    [microsoft/vscode-cpptools#1035](https://github.com/microsoft/vscode-cpptools/issues/1035)

[^2]:
    Más info en nuestra
    [guía de argumentos para `main()`](/guias/programacion/main)

[^3]:
    _¡¿El qué?!_. El directorio desde el cual se va a ejecutar nuestro código.
    Desde el mismo de van a calcular todas nuestras
    [rutas relativas](/guias/consola/rutas.html#current-working-directory).
