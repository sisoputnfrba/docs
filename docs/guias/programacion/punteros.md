# Manejo de Punteros y Memoria Dinámica

![imagen 1](/img/guias/punteros-memoria-dinamica/imagen1.png)

Every computer, at the unreachable memory address 0x-1, stores a secret.  I found it, and it is that all humans ar-- SEGMENTATION FAULT.

## Introducción

Antes de meternos a fondo en las cuestiones de la manipulación de la memoria dinámica en C, definiremos algunos conceptos básicos.

Un **proceso** es un programa en ejecución. Cuando nosotros abrimos el binario de nuestro programa, se crea la imagen del proceso y comienza a ejecutarse. Podría decirse que un proceso está dividido en cuatro segmentos[^1] básicos:
- Código
- Datos (globales)
- Heap
- Stack

La **memoria estática** es memoria que se reserva al declarar variables de cualquier tipo de dato: int, float, char, double, estructuras como así también los punteros[^2] a tipos de datos (por ejemplo: int*, char*, double*), y se aloja en el **stack** del proceso. En éste caso, el programador no podrá modificar el espacio en memoria que ocupan ni tampoco tendrá que encargarse de liberarla.

Al producirse una llamada a una función, se almacena en el stack del proceso la dirección a la que debe retornar la ejecución tras finalizar la llamada, y otros datos adicionales[^3].

La **memoria dinámica** es memoria que se reserva en *tiempo de ejecución* y se aloja en el **heap** del proceso (los datos apuntados por los punteros). En C, el programador deberá reservar dicha memoria para su uso y también tendrá la responsabilidad de liberarla cuando no la utilice más.

Una diferencia importante es que **el tamaño de la memoria dinámica se puede ir modificando durante la ejecución del programa**. ¿Qué quiere decir ésto? Que, por ejemplo, podrías ir agrandando/achicando una determinada estructura (por ejemplo, un array) a medida que lo necesitás.

<div style="background-color: white">
<img src="/img/guias/punteros-memoria-dinamica/imagen2.png" >
</div>

<!-- ![imagen 2](/img/guias/punteros-memoria-dinamica/imagen2.png) -->


Algunas ventajas que ofrece la memoria dinámica frente a la memoria estática es que podemos reservar espacio para variables de tamaño no conocido hasta el momento de la ejecución (por ejemplo, para listas o arrays de tamaños variables), o bloques de memoria que, mientras mantengamos alguna referencia a él, pueden sobrevivir al bloque de código que lo creó. Sin embargo, como una vez dijo el tío Ben a Spiderman: "Todo poder conlleva una gran responsabilidad"[^4].

Todos los datos tienen un tiempo de vida, nada persiste para siempre. En C, hay tres tipos de duración:
- **Estática**: son aquellas variables que se crean una única vez junto con la creación del proceso y se destruyen junto con la destrucción del mismo, son únicas y generalmente pueden ser utilizadas desde cualquier parte del programa. Para generar una variable estática se la puede declarar por fuera de la función principal (arriba del main() por ejemplo), o bien usando el calificador **static**.
- **Automática**: son aquellas variables locales que no son declaradas con el especificador static. Se crean al entrar al bloque en el que fueron declaradas y se destruyen al salir de ese bloque. Por ejemplo, el tiempo de vida de las variables internas de una función es lo que tome ejecutarla.
- **Asignada**: es la memoria que se reserva de forma dinámica (en el heap) y que se explicó más arriba.

## Punteros

### ¿Qué es un puntero?

Un **puntero es la dirección de algún dato en memoria**. Un puntero **NO es el dato** en sí mismo, sino su **posición en la memoria**. También se lo conoce como *referencia* a memoria.

<div style="background-color: white; width: 150px; text-align: center; ">
<img src="/img/guias/punteros-memoria-dinamica/imagen3.png" >
</div>
<!-- ![imagen 3](/img/guias/punteros-memoria-dinamica/imagen3.png) -->

### ¿Cómo declaramos un puntero?

Supongamos que queremos declarar un puntero a un tipo de datos int. En C ésto se escribe de la siguiente manera:

```c:no-line-numbers
int *p;
```

Bien, ya declaramos el puntero. Sin embargo, no está inicializado y apunta a basura.

<div style="background-color: white; width: 150px; text-align: center; padding: 2px; ">
<img src="/img/guias/punteros-memoria-dinamica/imagen4.png" >
</div>
<!-- ![imagen 4](/img/guias/punteros-memoria-dinamica/imagen4.png) -->

Para que nuestro puntero no esté triste, ¡vamos a darle algo para que apunte!

### ¿Cómo inicializamos un puntero? (Malloc)

La memoria se puede reservar o liberar **dinámicamente**, es decir, según necesitemos. Para ésto hay varias funciones estándar, que se encuentran en la biblioteca[^5] estándar de C, en el encabezado `stdlib.h`.

Una de ellas es la función `malloc`[^6], la cual sirve para solicitar un bloque de memoria del tamaño indicado por parámetro. Devuelve un puntero a la zona de memoria concedida:

```c:no-line-numbers
void* malloc (unsigned numero_de_bytes);
```

El tamaño se especifica en bytes. **`malloc` nos garantiza que la zona de memoria concedida no esté ocupada por ninguna otra variable**. *Groso, ¿no?*
Eso sí, **si `malloc` no puede otorgarnos dicha zona de memoria, devuelve un puntero a `NULL`**. Por ende, cada vez que hacemos una llamada a `malloc` deberíamos chequear que no devuelve un puntero nulo.

Como dijimos antes, `malloc` devuelve un puntero a la zona de memoria concedida. Sin embargo, éste puntero devuelto no sabe a qué tipo de datos apunta (`void*` significa esto)[^7].

Antes de llamar a `malloc` tenemos que saber cuántos bytes queremos reservar en memoria. Como nuestro tipo de datos va a ser un `int`, vamos a reservar 4 bytes. Entonces, la llamada debería quedar así:

```c:no-line-numbers
malloc (4);[^8]
```

Entonces, ¿por cada tipo de puntero que tenga que declarar me tengo que acordar los bytes que ocupa? No necesariamente, podemos recurrir al operador `sizeof`.
El operador `sizeof` recibe por parámetro un tipo de dato y devuelve el tamaño en bytes de éste. También podemos pasarle una variable y él se encargará de chequear el tipo y hacer el cálculo.

Entonces, nuestra llamada a `malloc` quedaría así:

```c:no-line-numbers
malloc(sizeof(int));
```

Esta opción es altamente preferible, no sólo por su legibilidad y correctitud, sino por su declaratividad: yo no quiero reservar 4 bytes, sino los bytes necesarios para guardar un `int`. Cuántos sean esos bytes, no me interesa: es problema de la implementación, y hay alguien que lo resuelve por mí.
Tal vez éste ejemplo suene muy trivial, pero si nosotros tenemos que reservar en memoria un espacio equivalente al tamaño de una determinada estructura (`struct`) tendríamos que saber cuántos bytes requiere cada tipo de datos que la estructura contenga y sumarlos. Para ésto podemos recurrir a `sizeof(struct miEstructura)` para saber la cantidad de bytes que ocupa la misma.

Bien, ya pedimos los bytes, ahora sólo queda asignarlo a nuestro puntero:

```c:no-line-numbers
int *p = malloc(sizeof(int));
```

En resumen, nuestro código inicial quedaría de ésta manera:

```c
#include <stdlib.h>

int main(void){
   int *p = malloc(sizeof(int));
   return 0;
}
```

Sin embargo, ¡falta algo más! Si bien reservamos el espacio en memoria al que va a apuntar nuestro puntero, ¿qué dato contiene ese espacio? Lo que contiene es… ¡basura!

Para asignarle un valor, usamos el operador `*` (asterisco), el operador de *desreferencia*[^9] de C:

```c
#include <stdlib.h>
int main(void){
   int *p = malloc(sizeof(int));
   *p = 2;
   return 0;
}
```
<div style="background-color: white; width: 150px; text-align: center;">
<img src="/img/guias/punteros-memoria-dinamica/imagen5.png" >
</div>
<!--![imagen 5](/img/guias/punteros-memoria-dinamica/imagen5.png)-->

Al hacer `*p` estamos diciendo *"al contenido de p"* o *"a lo apuntado por p"*. Si hiciéramos `p = 2` estaríamos modificando al puntero p, y no al valor apuntado por el puntero p.

Entonces, para inicializar un puntero, tenemos que realizar dos pasos:
- Reservar el espacio en memoria.
- Darle un valor inicial al dato contenido en ése espacio en memoria.

### Operaciones de punteros

#### Dirección de una variable (&)

Un operador muy importante es `&` (ampersand) el cual **nos devuelve la dirección en memoria de su parámetro**.

Podés comprobar ésto ejecutando el siguiente código:

```c
#include <stdlib.h>
#include <stdio.h>

int main(void){
   int *p = malloc(sizeof(int));
   *p = 1;
   printf("p = %d\n", p);
   printf("&p = %p\n", &p);
   return 0;
}
```

- `%d` y `%p` son especificadores de formato.
- `%d` está diciendo que en ésa parte de la línea va a imprimir un valor entero.
- `%p` está diciendo que en ésa parte de la línea va a imprimir la dirección en memoria del dato, por ejemplo `0x7fff78c088d8`.

>Ojo! El operador `&` se puede usar con todo tipo de variables ya que todo está contenido en la memoria.

#### Desreferencia (*)

Veamos el siguiente código:

```c
#include <stdlib.h>
#include <stdio.h>

int main(void){
	int i = 1;
	int *p;

	printf("Antes i vale: %d\n", i);

	p = &i; //p apunta a i
	*p = 2; //se le asigna a donde este apuntando p (i) el valor 2

	printf("Ahora i vale: %d y el contenido de p vale: %d\n", i, *p);
	return 0;
}
```

Ejecutamos el código y veremos en consola lo siguiente:

*Antes `i` vale **1**.*

*Ahora `i` vale **2** y el **contenido de p** vale **2**.*

- Declaramos una variable `i` de tipo `int` con el valor **1**.

```c:no-line-numbers
int i = 1;
```

<div style="background-color: white; width: 150px; text-align: center;">
<img src="/img/guias/punteros-memoria-dinamica/imagen6.png" >
</div>

<!--![imagen 6](/img/guias/punteros-memoria-dinamica/imagen6.png)-->

- Declaramos un puntero p a un tipo de dato int.

```c:no-line-numbers
int *p;
```

<div style="background-color: white; width: 150px; text-align: center;">
<img src="/img/guias/punteros-memoria-dinamica/imagen7.png" >
</div>
<!--![imagen 7](/img/guias/punteros-memoria-dinamica/imagen7.png)-->

- Imprimimos por pantalla el valor de `i`, mostrará 1.

```c:no-line-numbers
printf("Antes i vale: %d\n", i);
```

- Le asignamos al puntero p la dirección de memoria de i.

```c:no-line-numbers
p = &i;
```

<div style="background-color: white; width: 150px; text-align: center;">
<img src="/img/guias/punteros-memoria-dinamica/imagen8.png" >
</div>
<!-- ![imagen 8](/img/guias/punteros-memoria-dinamica/imagen8.png) -->

- Le asignamos a la porción de memoria a la que apunta p (con el paso anterior hicimos que apunte a i) el valor 2. A ésto se lo conoce como **_desreferenciar_**.

```c
*p = 2;
```

<div style="background-color: white; width: 150px; text-align: center;">
<img src="/img/guias/punteros-memoria-dinamica/imagen9.png" >
</div>
<!-- ![imagen 9](/img/guias/punteros-memoria-dinamica/imagen9.png) -->

- Imprimimos los valores de ambos. Ambos valen 2.

```c
printf("Ahora i vale: %d y el contenido de p vale: %d\n", i, *p);
```

¡Ambos tienen el mismo valor! Y eso es porque el puntero `p` está apuntando a la misma porción de memoria que `i` tiene asignada. Por ende, se puede manipular dicho dato desde el puntero `p`.

Con el operador **`*` (asterisco) podemos acceder al contenido al que apunta nuestro puntero**.

Lo que acabamos de hacer fue manipular una porción de memoria ajena a través de un puntero.

**¿Y para qué me sirve?**
Veamos el siguiente ejemplo:

```c
#include <stdlib.h>
#include <stdio.h>

void sumarUno(int unaVariable){
	unaVariable = unaVariable + 1;
	printf("Dentro de la funcion, i vale: %d\n", unaVariable);
}

int main(void){
	int i = 1;

	printf("Antes de ejecutar la funcion, i vale: %d\n", i);
	sumarUno(i);
	printf("Despues de ejecutar la funcion, i vale: %d\n", i);

	return 0;
}
```

Tenemos una función `sumarUno` que le suma 1 a la variable que le haya sido pasada por parámetro y la imprime en pantalla.

Ejecutamos el código y veremos en consola lo siguiente:

*Antes de ejecutar la funcion, i vale: 1*
*Dentro de la funcion, i vale: 2*
*Despues de ejecutar la funcion, i vale: 1*

En C, cuando nosotros llamamos a una función y le pasamos parámetros, los valores que recibe son copiados en una dirección de memoria distinta y son operados desde allí hasta que el bloque de código termina de ejecutarse. A ésto se le conoce como **parámetros por valor**. En otras palabras, no podremos modificar variables desde funciones para que persistan luego de que finalice la ejecución de la función.

Si nosotros quisiéramos que el cambio persista luego de la ejecución de la función, tendríamos que decirle, a nuestra función, que lo que va a recibir como parámetro es una **referencia a memoria**, también conocida como… ¡puntero!

Entonces, en vez de `void sumarUno(int unaVariable)` vamos a tipear `void sumarUno(int *unaVariable)`. Donde antes teníamos `unaVariable = unaVariable + 1;` vamos a tener que poner `(*unaVariable) = (*unaVariable) + 1;`. ¿Por qué? **Porque lo que deseamos modificar es el dato al que apunta**. Ésto es lo que vimos antes como *desreferenciar*.

Sin embargo, si corremos esto como está, no va a funcionar porque ahora cuando llamamos a la función tenemos que pasarle un puntero o *una dirección de memoria*. Como vimos antes, podemos utilizar el operador `&` en éste caso.

Entonces, en vez de llamar a la función de ésta manera: `sumarUno(i);` lo hacemos de esta manera: `sumarUno(&i);`.

Así, nuestro código quedará de la siguiente forma:

```c
#include <stdlib.h>
#include <stdio.h>

void sumarUno(int *unaVariable){
	(*unaVariable) = (*unaVariable) + 1;
	printf("Dentro de la funcion, i vale: %d\n", *unaVariable);
}

int main(void){
	int i = 1;

	printf("Antes de ejecutar la funcion, i vale: %d\n", i);
	sumarUno(&i);
	printf("Despues de ejecutar la funcion, i vale: %d\n", i);

	return 0;
}
```

Y al correrlo, en consola leeremos lo siguiente:

*Antes de ejecutar la funcion, i vale: 1*
*Dentro de la funcion, i vale: 2*
*Despues de ejecutar la funcion, i vale: 2*


#### Desreferencia en estructuras (->)

Este operador ofrece una sintaxis alternativa al acceder a los datos de un puntero hacia un tipo de datos estructura.

Ejemplo:
Supongamos que tenemos un tipo `t_persona` definido de la siguiente manera:

```c
typedef struct
{
   char[20] nombre;
   char[20] apellido;
   int edad;
} t_persona;
```

Queremos crear un puntero hacia una estructura `t_persona` que contenga como nombre "Esteban", apellido "Trabajos" y edad 56.

Si quisiese acceder al nombre de un `t_persona`, tendría primero que acceder a la estructura y luego a sus datos. Vamos a hacer ésto utilizando el operador `*`.

```c
t_persona *p = malloc(sizeof(t_persona));
(*p).nombre = "Esteban";
(*p).apellido = "Trabajos";
(*p).edad = 56;
```

Sin embargo, C ofrece una alternativa a la sintaxis `(*p)`. mediante el operador `->("flechita")`. En éste caso para que quede más "limpio" el código.

```c
t_persona *p = malloc(sizeof(t_persona));
p->nombre = "Esteban";
p->apellido = "Trabajos";
p->edad = 56;
```

El operador `->`[^10] se puede utilizar si tenemos estructuras anidadas. Supongamos que al campo `t_persona` le agregamos un campo más para que haga referencia a un hijo:

```c
typedef struct
{
   char[20] nombre;
   char[20] apellido;
   int edad;
   t_persona* hijo;
} t_persona;
```

Si quisiéramos acceder al nombre del hijo, bastaría con tipear: `p->hijo->nombre`.

## Funciones que retornan punteros

Como vimos antes, el pasarle un puntero como argumento a una función resulta de mucha utilidad si queremos cambiar el contenido de esa variable dentro de la función, o si no queremos copiar toda la información devuelta, pero... ¿Qué hay de las funciones que devuelven punteros? Tomemos este ejemplo:

```c
char* copiar(char* palabra){
	char* tmp = malloc(sizeof(char) * strlen(palabra) + 1);
	memcpy(tmp, palabra, strlen(palabra));
	tmp[strlen(palabra)] = '\0';
	return tmp;
}
```

Esta función trivial nos va a ayudar a comprender la utilidad de este concepto. Desglosémosla:
- La función recibe un string, y devuelve un puntero a una posición en memoria donde se encuentra una copia de esta palabra.

- Primero aloca un espacio consecutivo del tamaño de la palabra (+1 porque todos los strings terminan con un `\0`)

```c:no-line-numbers
malloc(sizeof(char) * strlen(palabra) + 1);
```

- y asocia este espacio a una variable "tmp"

```c:no-line-numbers
char* tmp =
```

- Luego copia la palabra por argumento al segmento reservado

```c:no-line-numbers
memcpy(tmp, palabra, strlen(palabra));[^11]
```

- Inserta el `\0` faltante en la última posición, usando el conjunto de bytes como si fuera un array.

```c:no-line-numbers
tmp[strlen(palabra)] = '\0';[^12]
```

- y retorna el puntero al nuevo sector de memoria con la copia de la palabra

```c:no-line-numbers
return tmp;
```

Es notable mencionar que la función es la que crea el segmento en memoria, y que si se llamara **n** veces, crearía **n segmentos de memoria**, cada uno con una copia de la palabra, por lo tanto el que reciba el segmento de memoria tiene la responsabilidad de liberarlo cuando no lo necesite más.

## "Tu programa chorea memoria!" (A.K.A Memory Leaks)

Al hacer el `malloc`[^13], uno reserva un segmento continuo de memoria de el tamaño que se le indica, y un poquito más. Este extra contiene información sobre el segmento, como el tamaño, y otra metadata que el sistema operativo crea conveniente.

Cuando **nuestro proceso finaliza, el SO se encarga de liberar toda la memoria asociada a nuestro proceso**. Sin embargo, durante la ejecución de nuestro proceso, **es responsabilidad nuestra liberar la memoria asignada dinámicamente** para poder reutilizarla. De no hacer ésto, nuestros procesos estarían ocupando más memoria de la que requieren realmente.

Seguramente dirás: *"yo tengo 4GB de memoria, ¿qué me importa si consumo un toque más de memoria o no?, de última me compro 4GB más que están 200p man"*.
En parte tenés razón y en parte no, ¿por qué?, porque si nuestro proceso no finaliza nunca (es decir, es un while gigante) y se encarga de hacer mucho procesamiento, creeme que vas a empezar a ocupar memoria a lo loco a tal punto que en un momento se va a ver afectada la performance del proceso y te vas a quedar sin memoria. Y cuando te quedás sin memoria, el SO prioriza su vida y mata el proceso que la está pidiendo.

Generalmente, las fugas de memoria o memory leaks se dan cuando perdemos la referencia de un puntero en algún punto. Retomemos el ejemplo anterior:

```c
char* copiar(char* palabra){
	char* tmp = malloc(sizeof(char) * strlen(palabra) + 1);
	memcpy(tmp, palabra, strlen(palabra));
	tmp[strlen(palabra)] = '\0';
	return tmp;
}
```

Si nosotros no devolviésemos el puntero al que le estamos asignando un espacio en memoria dinámica, estaríamos perdiendo la referencia al bloque ese y, por ende, pasaría un memory leak (¿cómo liberaríamos el bloque? ¿cómo adivinamos cuál de TOOODAS las posiciones de memoria que hay en nuestra computadora le corresponde a nuestro bloquecito?). Esto implica que ese espacio que reservamos nunca más vamos a poder volver a utilizarlo durante la ejecución del proceso.

Y si no me creés, probá esto:

```c
#include <string.h>
#include <stdlib.h>

void copiar(char* palabra){
	char* tmp = malloc(sizeof(char) * strlen(palabra) + 1);
	memcpy(tmp, palabra, strlen(palabra));
	tmp[strlen(palabra)] = '\0';
}

void main(void){
	while(1){
		copiar("no liberar la memoria dinamica que reservamos cuando ya no necesitamos de ella, es sinonimo de herejia");
	}
}
```

Por suerte, existe una solución fácil, el glorioso `free`:

`free(unPuntero);`

Esta simple función se encarga de buscar el segmento que habíamos reservado, y marcarlo como libre para que otro o nosotros lo volvamos a usar (notar que no limpia la información que había en el segmento).

Dos cosas a tener en cuenta:
Si tenemos una función que reserve memoria, podemos hacer free fuera de ella, siempre y cuando tengamos alguna referencia al espacio en memoria. Por ejemplo:

```c
#include <stdlib.h>
char* reservarMemoria(int n){
  return malloc(n*sizeof(char));
}

int main(void){
   char* array;
   array = reservarMemoria(3); //Reserva 3 char's consecutivos
   free(array);
}
```

Si tenemos estructuras con punteros, el orden de liberación es muy importante. Consideremos el ejemplo previamente visto:

```c
char* copiar(char* palabra){
	char* tmp = malloc(sizeof(char) * strlen(palabra) + 1);
	memcpy(tmp, palabra, strlen(palabra));
	tmp[strlen(palabra)] = '\0';
	return tmp;
}

int main(void){
	char** nombres;
	//Grabo espacio para 4 punteros a nombres
	nombres = malloc(sizeof(char*) * 4);

	//Grabo cada una de las palabras
	nombres[0] = copiar("Joaquin");	//7 + 1 chars
	nombres[1] = copiar("Matias");	//6 + 1 chars
nombres[2] = copiar("Santiago");	//8 + 1 chars
	nombres[3] = copiar("Gaston");	//6 + 1 chars

	free(nombres);
}
```

<div style="background-color: white">
<img src="/img/guias/punteros-memoria-dinamica/imagen10.png" >
</div>
<!-- ![imagen 10](/img/guias/punteros-memoria-dinamica/imagen10.png) -->

El programa reserva espacio para 4 punteros, y despues carga cada uno de esos punteros con los nombres "Joaquin", "Matias", "Santiago" y "Gastón". Si yo libero la variable nombres, entonces no tengo forma de liberar los restantes 35 chars que reservé para las letras, por lo que perdí (leak'ie) 35 bytes de memoria. La forma correcta de terminar el programa sería:

```c
int i;
for(i=0; i<4; ++i)
	free(nombres[i]);
free(nombres);
```

Hacerlo al revés, primero liberar `nombres` y luego intentar liberar los `nombres[i]` tampoco funcionaría.

La regla de oro de la memoria dinámica es que tiene que existir un `free` por cada `malloc`.

Aclaración: si bien `free()` no borra los datos y el puntero sigue estando, lo que hace internamente es dejar libre (valga la redundancia) ése bloque de memoria para el resto de los procesos. Éso quiere decir que otro proceso puede pedir reservar un espacio de memoria y casualmente se le asigne ese. Nosotros, conservando el puntero, podríamos seguir manipulando ése bloque pero sería arriesgarnos a que se den inconsistencias ya que ahora no hay un proceso sólo tocando dicho espacio, sino dos. Por ende, pensar en utilizar en dichas condiciones sería pésimo.

La importante de que reservemos memoria es que nos aseguramos de que ningún proceso más acceda a ése espacio (salvo que le demos permiso, pero éso es otra historia).

## Aritmética de Punteros

El lenguaje nos permite sumar o restar cantidades enteras al puntero para que apunte a direcciones de memoria distintas, a ésto se lo conoce como aritmética de punteros.
Sirve mucho a la hora de hacer manejos de memoria y es una sintaxis alternativa a la del acceso de elementos de un array.

Con un puntero, las expresiones p+1, p+2, p+3, p+n tienen sentido. La expresión p+n es un puntero que apunta a la dirección de p sumándole n veces el espacio ocupado por un elemento del tipo al que apunta. Es decir, la expresión sumada NO es el número de bytes que se suman a la dirección, es el número de elementos del tipo al que apunta al puntero.

Utilicemos el ejemplo anterior.

```c
char** nombres;
//Grabo espacio para 4 punteros a nombres
nombres = malloc(sizeof(char*) * 4);

//Grabo cada una de las palabras
nombres[0] = copiar("Joaquin");
```

¡Ambos tienen el mismo valor!. Y eso es porque el puntero p está apuntando a la misma porción de memoria que i tiene asignada. Por ende, se puede manipular dicho dato desde el puntero p.
Entonces, si quisiéramos acceder al segundo elemento del array de strings (`nombres[1]`), la sintaxis equivalente sería `*(nombres + 1)`. Teniendo en cuenta ésto, en un array, `*nombres` sería el primer elemento del array, entonces quedaría:

```c
*(nombres+1) = copiar("Matias");		//6 + 1 chars
*(nombres+2) = copiar("Santiago");		//8 + 1 chars
*(nombres+3) = copiar("Gaston");		//6 + 1 chars
```

## Otros alloc

`calloc(n, bytes)`: reserva memoria para un array de n elementos que ocupan un tamaño de x bytes cada uno, además inicializa los bytes con un `\0`. Por ejemplo, supongamos que queremos reservar memoria para un array de 5 enteros, entonces:
```c:no-line-numbers
int *arrayEnteros = calloc(5, sizeof(int))
```
El equivalente, con la función `malloc`, sería:
```c:no-line-numbers
int *arrayEnteros = malloc(5*sizeof(int))
```
`realloc(*unPuntero, bytes)`: cambia el tamaño del bloque de memoria apuntado por unPuntero a uno de x bytes. Devuelve un puntero al bloque con el tamaño indicado. Es importante saber que los datos no son alterados y se guardan en el nuevo bloque siempre y cuando le hayamos reasignado un tamaño mayor o igual al del bloque anterior.  Los bytes agregados (es decir, si el tamaño total que le pasamos por parámetro es mayor al tamaño del bloque apuntado por unPuntero) no están inicializados.
Debemos tener cuidado en los parámetros que le pasemos porque:
Si unPuntero es `NULL`, la función se comporta como un `malloc(bytes)`.
Si unPuntero no es `NULL` y `bytes = 0`, la función se comporta como un `free(unPuntero)`.

## El problema del tipo de dato "int"

Sin embargo, con el tipo de datos `int` hay un tema muy importante a considerar. Dependiendo de la arquitectura, sistema operativo, y del compilador en sí mismo, el tipo de dato `int` va a tener un tamaño u otro. Generalmente `int` tiene un tamaño equivalente al tamaño de la palabra del procesador. Por ende, si estamos en una arquitectura de 32 bits, la palabra tendrá un tamaño de 32 bits, `int` tendrá un tamaño de 32 bits o 4 bytes (8 bits = 1 byte). Si estamos en una arquitectura de 64 bits, la palabra tendrá un tamaño de 64 bits, `int` tendrá un tamaño de 64 bits o 8 bytes.

Entonces, si nosotros reservamos (malloc) 4 bytes para un tipo int en una máquina con un procesador de 32 bits no vamos a tener ningún problema pero si lo hacemos en una de 64 bits va a volar todo por los aires.

Para solucionar este problema podemos considerar dos opciones:
- Recurrir a un tipo de datos que no dependa de la arquitectura de nuestro procesador, es decir, que tengan un tamaño fijo lo corramos donde lo corramos. Por ejemplo, `int32_t` o `int64_t`[^14].
- Utilizar el operador el `sizeof()` para que se acople a la arquitectura en la que esté corriendo. Ej: malloc(sizeof int);

Normalmente vamos a optar por usar el operador `sizeof`, los tipos de dato entero de tamaño fijo los vamos a dejar para aquellos momentos en que no podemos dejar el tamaño del entero al criterio del sistema operativo. Un uso común para estos tipos de datos es cuando queremos realizar un intercambio de datos entre dos computadoras diferentes, pero eso lo veremos en el proximo capitulo.

## EXTRA: Punteros a Funciones

Un puntero a una función es una variable que almacena la dirección en memoria de una función que luego podrá ser invocada desde dicho puntero. Los punteros a funciones se declaran de una manera similar a los punteros que conocemos hasta ahora, con la diferencia de que hay que aclarar el tipo de valor que retorna y los tipos de datos de los parámetros que acepta. Al fin y al cabo, ¡como una función!. Por ejemplo:

```c:no-line-numbers
void (*f)(int,int);
```

Con ésto estamos declarando un puntero f a una función que recibirá por parámetro dos enteros `(int,int)` y no retorna ningún valor.

En el siguiente código veremos cómo un posible uso:

```c
#include <stdlib.h>
#include <stdio.h>

void imprimirValor(int x)
{
   printf("%d\n", x);
}

int main()
{
   void (*punteroAFuncion)(int);
   punteroAFuncion = &imprimirValor;
   punteroAFuncion(1);
   return 0;
}
```

¿Qué sucede en el main?

- Declaramos un puntero a una función que recibe un entero y no retorna ningún valor.
```c:no-line-numbers
void (*punteroAFuncion)(int);
```
- Le asignamos al puntero la dirección en memoria de la función imprimirValor.

```c:no-line-numbers
punteroAFuncion = &imprimirValor;
```
- Llamamos a la función mediante el puntero, nótese que la sintaxis es idéntica a la llamada de una función cualquiera.
```c:no-line-numbers
punteroAFuncion(1);
```
Los punteros a funciones nos pueden servir para, por ejemplo, reutilizar código en funciones genéricas. Para ser más claros, supongamos que tengo una lista de alumnos en la que de cada alumno se conoce su nombre, apellido, curso y notas de cada parcial.

```c
typedef struct
{
   char *nombre;
   char *apellido;
   int  curso;
   int  notaPrimerParcial;
   int  notaSegundoParcial;
   t_alumno *siguiente;
} t_alumno;
```

El último campo se utiliza para anidar los distintos alumnos, es decir, para formar una lista.
Una operación común en las listas es realizar un filtrado, es decir, a partir de una lista obtener otra que cumple con unas determinadas condiciones. Por ejemplo, todos los alumnos del curso 3020, todos los alumnos que aprobaron los dos parciales (es decir, `notaPrimerParcial >= 4 && notaSegundoParcial >=4`) o todos los alumnos cuyo nombre empieza con la letra 'A'.

Nosotros, como programadores, decimos "ah, quiero obtener todos los alumnos cuyo nombre empiezan con la letra 'A', pero capaz mañana quiero saber quiénes son los que empiezan con la letra 'Z', entonces me adelanto y hago que le pase la letra con la que empieza el nombre por parámetro". Lo mismo con el filtrado por curso.

Entonces, programamos unas funciones cuya definición sería:

```c
t_alumno *filtrarPorCurso(t_alumno *listaAlumnos, int curso);
t_alumno *filtrarPorLetraInicialNombre(t_alumno *listaAlumnos, char c);
```

Una posible implementación de `filtrarPorCurso` sería:

```c
t_alumno *filtrarPorCurso(t_alumno *listaAlumnos, int curso)
{
   t_alumno *aux = listaAlumnos;
   t_alumno *listaFiltrada = crearListaAlumnos();

   while(aux != NULL)
   {
      if (aux->curso == curso)
      {
         agregarALista(listaFiltrada, aux);
      }
      aux = aux->siguiente;
   }

   return listaFiltrada;
}
```

Una posible implementación de `filtrarPorLetraInicialNombre` sería:

```c
t_alumno *filtrarPorLetraInicialNombre(t_alumno *listaAlumnos, char c)
{
   t_alumno *aux = listaAlumnos;
   t_alumno *listaFiltrada = crearListaAlumnos();

   while(aux != NULL)
   {
      if (aux->nombre[0] == c)
      {
         agregarALista(listaFiltrada, aux);
      }
      aux = aux->siguiente;
   }

   return listaFiltrada;
}
```

¿En qué cambia la función con respecto a la otra? Solamente en el criterio de filtro, el resto de la lógica - crear una lista aparte, recorrer la lista original y agregar a la lista nueva los que cumplan con el criterio - es exactamente la misma.

Repetir código es una mala práctica pero no es el objetivo de éste documento abordar ésas cuestiones, sino de introducir una posible utilidad real que le puedas dar a los punteros a funciones.

En éste caso, podríamos hacer una función filtrar, genérica, que en base a un criterio determinado me devuelva la lista de aquellos que cumplen dicho criterio. El criterio será una función por parámetro.

Por lo visto anteriormente, el filtrado quedaría de la siguiente manera:

```c
t_alumno *filtrarPorCriterio(t_alumno *listaAlumnos, bool (*criterio)(t_alumno*))
{
   t_alumno *aux = listaAlumnos;
   t_alumno *listaFiltrada = crearListaAlumnos();

   while(aux != NULL)
   {
      if (criterio(aux))
      {
         agregarALista(listaFiltrada, aux);
      }
      aux = aux->siguiente;
   }

   return listaFiltrada;
}
```

En negrita está marcado lo que cambió con respecto a la versión anterior.
De ésta manera, sólo tendríamos que definir funciones criterio que respeten la definición dada en filtrarPorCriterio.

Y se usaría de la siguiente manera:

```c
int main(int argc, char **argv) {
     char inicial = 'a';
     bool nombreEmpiezaCon(t_alumno *alumno){
              return alumno->nombre[0] == inicial;
     }
     //... inicializar lista ...
     t_alumno *filtrados = filtrarPorCriterio(alumnos, nombreEmpiezaCon);

     return 0;
}
```

## Links útiles

- [Punteros en la guía Beej](https://beej.us/guide/bgc/html/#pointers) (en inglés)
- [Tutorial de Valgrind](../herramientas/valgrind.md) (para resolver memory leaks)
- [Video sobre punteros](https://www.youtube.com/watch?v=5VnDaHBi8dM&ab_channel=Napalm) (en inglés)


<br><br>


[^1]: Ojo, no nos estamos refiriendo al esquema de segmentación para el manejo de la memoria.

[^2]: En el próximo capítulo se definirá el concepto de puntero.

[^3]: Por ejemplo, registros de la CPU al momento de la ejecución del proceso.

[^4]: En el comic original, el narrador es quien dice esta frase al final del primer volumen /NERD.

[^5]: La traducción correcta de library es biblioteca y NO “librería”.

[^6]: `malloc()` es una abreviatura de “**m**emory **allo**cate”.

[^7]: En C89 estábamos obligados, cada vez que llamábamos a malloc, a castear el puntero retornado por malloc al tipo de dato que estemos usando. En C99 esto ya no es necesario.

[^8]: Si corremos ésto en una computadora con un sistema operativo y compilador de 32 bits no vamos a tener problemas. Sin embargo, si nuestro sistema operativo/compilador es de otra cantidad (64 bits) vamos a tener problemas. [Acá está explicado](#el-problema-del-tipo-de-dato-"int").


[^9]: [Dereference operator](http://en.wikipedia.org/wiki/Dereference_operator)

[^10]: Ojo, son dos caracteres: - y > (menos y mayor). No busques un caracter que sea la flecha :)


[^11]: [memcpy(dest, source, length)](https://linux.die.net/man/3/memcpy), donde dest es la variable donde se guardará el dato copiado, source es la variable de donde se copiará los datos y length la cantidad de bytes que deseamos copiar.


[^12]: Un **string** se diferencia de un **stream** en que al final del array de caracteres hay un carácter especial ‘\0’ que indica fin de cadena. Como nuestro objetivo es copiar un string, debemos agregar éste caracter a mano. 

[^13]: En realidad, cualquier operación de reserva de memoria dinámica, como calloc(), malloc() o realloc(). 

[^14]: Más info [acá](http://www.nongnu.org/avr-libc/user-manual/group__avr__stdint.html). 
