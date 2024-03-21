# Argumentos para el main

![meme](/img/guias/programacion/main/meme.jpg)

## Introducción

Cuando uno normalmente ejecuta un proceso C, lo realiza a través de la línea de
comandos de una terminal.

Por ejemplo, si tomamos el cliente del TP0:

```bash
./bin/client
```

Sin embargo, uno a veces necesita parametrizar algunos valores para que difieran
entre una ejecución y otra. Ahí entran en juego los archivos de configuración
que realizamos en el TP0: para parametrizar, por ejemplo, la IP en la que se
encontraba el servidor.

Pero, ¿y si quisiera mantener muchos archivos de configuración para distintas
ejecuciones? :thinking:

Podría tener varios archivos y ponerlos en la carpeta en donde mi proceso espera
encontrarlos, pero eso se vuelve engorroso y difícil de mantener, porque, si
levantamos varias instancias con distintas configuraciones, no es posible
determinar qué contenía ese archivo al arrancar a ejecutar cada una.

Ahí es donde pueden resultarnos muy útiles los **parámetros del main**, para así
poder pasarle la ruta al archivo que queramos (y cualquier otra cosa también).

## argc y argv con un ejemplo

Entonces, si modificamos al cliente del TP0 para que tome una ruta por `main()`
podemos hacerlo de la siguiente manera:

```c
int main(int argc, char** argv) { // [!code focus]

    //resto del TP0 de antes

    t_config* config = crear_config(argv[1]); // [!code focus]

    //resto del TP0 de después
} // [!code focus]
```

Y lo ejecutamos como:

```bash
./bin/client ./una/ruta/a/mi/archivo.cfg
```

- `argc` es la cantidad de argumentos que se agregan por línea de comando
  (**arg**ument **c**ount).

- `argv` es un array de strings que contiene los string ingresados (**arg**ument
  **v**ector).

El motivo por el que el segundo elemento del array es la ruta que ingresamos es
porque el primer elemento es siempre el comando en sí mismo (en este caso,
`./bin/cliente`).

Esto incluso lo podemos mejorar controlando que la cantidad de parámetros sea la
indicada manejando `argc`:

```c{2-5}
int main(int argc, char** argv) {
    if (argc < 2) { // [!code focus]
        fprintf(stderr, "Uso: %s <ruta_archivo_configuracion>\n", argv[0]); // [!code focus]
        return EXIT_FAILURE; // [!code focus]
    } // [!code focus]

    //resto del TP0 de antes

    t_config* config = crear_config(argv[1]); // [!code focus]

    //resto del TP0 de después
}
```

¡Eso es todo! Bueno, casi todo... ¿Cómo podemos lograr esto desde el editor?
:thinking:

## Visual Studio Code

En el caso de que ya tengamos configurado el debugger, podremos encontrar en
nuestro archivo `launch.json` una variable `args`, en donde vamos a
poner nuestra lista de argumentos en formato de array de strings.

```json
{
  // See https://go.microsoft.com/fwlink/?linkid=830387
  // for the documentation about the launch.json format
  "version": "0.2.0",
  "configurations": [  // [!code focus]
    {
      "name": "run",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/bin/${workspaceFolderBasename}",
      "args": [ "./una/ruta/a/mi/archivo.cfg" ], // [!code focus]
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
  ]  // [!code focus]
}
```

En caso de usar una ruta relativa[^1], es muy importante
asegurarnos que la variable `cwd` apunte al valor correcto. En este ejemplo,
`${workspaceFolder}` es otra variable que apunta hacia la ruta absoluta del
directorio abierto por Visual Studio Code[^2].

::: tip

Si queremos pasar más de un argumento, simplemente agregamos más elementos al
array separados por comas:

```json
"args": [ "arg1", "arg2", "arg3" ],
```

:::

[^1]: [Guía de Rutas relativas y absolutas](/guias/consola/rutas)

[^2]: [Documentación de las variables de Visual Studio Code (en inglés)](https://code.visualstudio.com/docs/editor/variables-reference)
