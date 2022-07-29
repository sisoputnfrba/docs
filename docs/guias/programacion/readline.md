# Cómo hacer una consola interactiva

> Post extraído de
> [Readline: La biblioteca de GNU que hace devs felices](https://faq.utnso.com.ar/guia-consola-interactiva)
> (autor: Tomás Ferraro)

Nunca se preguntaron ¿cómo hacen programas como `bash` para generar una consola
cómoda? Uno podría pensar que forma parte de la implementación, pero cuando
empezás a pensarlo un poco mejor, ¿no es raro que cada consola interactiva de
cada lenguaje que pueda existir, implemente _tooodo_ ese trabajo por sí misma?
Pues claro, la verdad de la milanesa **es que no lo hace**.

Resulta que, si uno se pone a indagar, existen múltiples bibliotecas que nos
proveen esas funcionalidades para evitar reinventar la rueda. En este caso
particular, me voy a centrar en readline, una biblioteca del proyecto GNU, que
es justamente la que implementa la consola de bash. ¿Porqué elegí readline?
Principalmente por lo anterior.

## Leyendo líneas

La función **readline** es nuestro plato principal. La misma esta firma:

```c:no-line-numbers
char *readline(const char *prompt)
```

Pasándole un literal, bajo el nombre de prompt, readline te promete mostrar lo
que le pasaste por parámetro en la consola al inicio de cada linea, y devuelve
una porción de memoria con lo que ingresó el usuario, sin agregar el `\n` al
final.

¿Cuál es la diferencia de leer de stdin? _La magia empieza ahora_.

Readline interfiere un poco con lo que devuelve, especialmente con teclas como
las flechas, supr, inicio, fin y
[algunas más](https://tiswww.case.edu/php/chet/readline/readline.html#SEC3). ¡Es
exactamente lo que estás pensando!

Cada vez que detecta que el caracter ingresado, es un caracter especial dentro
de los que reconoce, en vez de mostrar el valor en el retorno, genera el
comportamiento que estaríamos esperando (por ejemplo, moverse para atrás cuando
se aprieta ←). Más fácil imposible.

No solo readline posee estas funcionalidades, sino que también se encarga de
reservar la memoria necesaria para almacenar la línea, dejándonos la
responsabilidad de **liberar dicha memoria**. Pero es mucho mejor que tener que
estimar un máximo de tamaño para la linea a leer, ¿no?

Veamos como quedaría en código c:

```c
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <readline/readline.h>

void main() {
    char *linea;
    while (1) {
        linea = readline(">");

        if (!linea) {
            break;
        }
        printf("%s\n", linea);
        free(linea);
    }
}
```

Noten que si **readline** devuelve `null`, corta el bucle. Esto es porque cuando
readline detecta un **EOF** (la representación del fin de archivo, en este caso
con stdin, es cuando terminamos de escribir una línea y apretamos enter) y la
línea leída hasta ese punto está vacía, retorna null para evitarnos un chequeo
extra.

## Manejar el historial

Hasta ahora venimos bien, ya tenemos readline funcionando, pero todavía falta
más. Notarán que si bien no se escriben en pantalla ni en lo que recibimos, las
flechas ↑ y ↓ no funcionan. Esto es porque para ello es necesario **mantener un
historial de los comandos ingresados**. La biblioteca nos provee la función
`add_history(linea)` justamente para eso.

El funcionamiento de la _biblioteca de Historial_ no se va a cubrir en detalle
en este post, pero si pecan de curiosos pueden revisar
[la documentación en línea](https://cnswww.cns.cwru.edu/php/chet/readline/history.html).

A grandes rasgos, para agregar las líneas ingresadas al historial, tendríamos
que agregar el `add_history()` a nuestro ejemplo anterior de la siguiente
manera:

```c{6,12-18}
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <readline/readline.h>
#include <readline/history.h>

void main() {
    char *linea;
    while (1) {
        linea = readline(">");
        if (linea) {
            add_history(linea);
        }
        if (!strncmp(linea, "exit", 4)) {
            free(linea);
            break;
        }
        printf("%s\n", linea);
        free(linea);
    }
}
```

Ahora, cada vez que se ingresa una línea _que no está vacía_, la agrega en el
historial. Para salir, evitamos comparar contra la línea vacía (justamente para
mostrar lo anterior) y en cuanto detecta que se ingresó **exit** termina el
bucle.

## Auto completar

Ya tenemos casi todo, pero nos falta la frutilla del postre, el famoso **auto
completar de la tecla TAB**. Si bien hasta ahora, la cosa venía bastante fácil,
auto completar los comandos no es algo relativamente sencillo, ya que hay que
generar una función que complete los comandos que nos interesan en nuestra
aplicación en específico.

Dado que generar un auto completar es un tema bastante largo para cubrir, dejo
la implementación particular **para otro post más avanzado** sobre Readline. Tal
como dije antes, si quieren implementar un auto completar de todas maneras, les
dejo un [ejemplo](http://web.mit.edu/gnu/doc/html/rlman_2.html#SEC40) sobre una
implementación simple en la documentación de la biblioteca.

## Compilar con readline

Está el código listo, pero eso _¿con qué se come?_

Primero que nada, debemos asegurarnos que **la biblioteca de readline esté
instalada**. Como dije antes, la usa bash, así que, ¿no debería estar? Bueno si,
la mayoría de las veces, **debería estar**. Normalmente, _lo que falta es la
contraparte para desarrolladores_. Por las dudas, dejo los nombres de los
paquetes de ambos:

```bash:no-line-numbers
sudo apt-get install libreadline8 libreadline-dev
```

Finalmente, solo resta compilar nuestro ejemplo usando el flag para bibliotecas
de gcc, como **`-lreadline`**.

```bash:no-line-numbers
gcc example.c -o example -lreadline
```
