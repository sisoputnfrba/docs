# Argumentos para el main

![meme](/img/guias/programacion/main/meme.jpg)

Cuando uno normalmente ejecuta un proceso C, lo realiza a través de la línea de
comandos de una terminal.

Por ejemplo, si tomamos el cliente del TP0:

```bash:no-line-numbers
./Debug/client
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
int main(int argc, char** argv) {

    //resto del TP0 de antes

    t_config* config = crear_config(argv[1]);

    //resto del TP0 de después
}

```

Y lo ejecutamos como:

```bash:no-line-numbers
./Debug/cliente ./una/ruta/a/mi/archivo.cfg
```

- `argc` es la cantidad de argumentos que se agregan por línea de comando
  (**arg**ument **c**ount).

- `argv` es un array de strings que contiene los string ingresados (**arg**ument
  **v**ector).

El motivo por el que el segundo elemento del array es la ruta que ingresamos es
porque el primer elemento es siempre el comando en sí mismo (en este caso,
`./Debug/cliente`).

Esto incluso lo podemos mejorar controlando que la cantidad de parámetros sea la
indicada manejando `argc`:

```c{2-4}
int main(int argc, char** argv) {
    if (argc < 2) {
        return EXIT_FAILURE;
    }

    //resto del TP0 de antes

    t_config* config = crear_config(argv[1]);

    //resto del TP0 de después
}

```

¡Eso es todo!
