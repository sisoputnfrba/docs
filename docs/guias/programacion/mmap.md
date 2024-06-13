# Uso debido de las funciones MMap y MSync

¿Te ha tocado alguna vez hacer un File System o manejar archivos en tiempo real en C? ¿Te recomendaron usar una función con documentación núla o inentendible como ´mmap´? Esta guía es para vos.

## ¿Qué es mmap?

MMap (o Memory Map) es una función de C incluida en la libreria ´sys/mman.h´ de Unix, sirve para "mappear" (o coloquialmente crear un vínculo entre) un espacio de memoria del proceso que lo llama, y un archivo (o varias otras cosas que no importan para esta guía).

## ¿Para qué sirve?

Un tema fundamental de la materia de Sistemas Operativos son los File Systems, o sistemas de archivos, estos aparecen de algúna manera ú otra en el trabajo práctico para ~~molestar~~ ayudar a comprender los conceptos vistos en la teoria, y las más veces se va a realizar como un archivo de la máquina virtual (de Linux) que es modificado "On the fly" por un módulo File System/Memoria/Interfáz/Terminator, pudiendo o no tener otros archivos agregados como un Bitmap.

## ¿Y como se usa?

Hay 2 funciones principales que debemos utilizar:

- ´mmap´: La función principal, retorna una dirección de memoria donde se creó el "vinculo" con el archivo. Sus parametros son: 
    1. Dirección: No interesa para la mayoria de implentaciones, sirve únicamente cuando se especifíca la bandera MAP_FIXED, pero esto no lo van a necesitar (espero), por lo que pueden poner ´NULL´.
    2. Tamaño: El tamaño que va a tener el archivo.
    3. Permisos: Los permisos que se le dan al mappeo sobre el archivo, las que se van a requerir son ´PROT_READ´ y ´PROT_WRITE´, que justamente le dan al proceso el permiso para leer y escribir este archivo.
    4. Banderas: Las banderas son formas más específicas de interactuar con el archivo, pero para esta guía solo se va a utilizar la opción ´MAP_FIXED´.
    5. "fildes": El fildes o File Descriptor, es una manera interna del sistema UNIX de describir a los archivos, se obtiene directamente del syscall ´open()´, pero para poder utilizar las funciones más comodas como ´fopen()´ se puede utilizar una función llamada ´fileno(FILE * stream)´ que retorna un File Descriptor para un FILE dado.
    6. Off: Simplemente un offset que no se va a utilizar.
- ´msync´: Mientras que mmap crea un vinculo entre archivo y memoria, lo que realmente mantiene este vinculo actualizado es MSync. MSync se encarga de guardar el tamaño especificado del archivo de forma sincrónica o asincrónica, pero usualmente se va a usar de forma sincrónica para asegurar el guardado correcto. Tiene tres parametros:
    1. Dirección: Donde se tiene el mmap preparado.
    2. Tamaño.
    3. Banderas: La única que se va a utilizar es MS_SYNC, para actualizar sincrónicamente el archivo.

## Un ejemplo

Consideremos el caso que se quiere levantar un archivo de tamaño fijo (digamos para este ejemplo 12 bytes, o suficientes para un "Hello World\\0") y preparar un mmap para modificarlo "On the fly":

Primero se abre un archivo y se lo modifica al tamaño utilizado:

´´´c
FILE *archivo = fopen(direccion_archivo, "a+"); // En este ejemplo uso el modo "a+" para que se genere si no existe y no se elimine todo si ya fue creado.
int fildes = fileno(archivo); // El file descriptor utilizado por el MMap.
ftruncate(fildes, tamanio) // Se trunca el archivo al tamaño que se va a utilizar, si el archivo ya se habia creado, no va a perder el contenido que ya tenia.
´´´

Luego se genera el mappeo:

´´´c
void *mappeo = mmap(0, tamanio, PROT_WRITE | PROT_READ, MAP_SHARED, fildes, 0);
´´´

Y con esto ya se puede comenzar a modificar el archivo directamente modificando el mappeo.

Por ejemplo:

´´´c
strncpy(mappeo, "Hello World", strlen("Hello World") + 1);
msync(mappeo, strlen("Hello World") + 1, MS_SYNC);
´´´

Va a escribir el mensaje "Hello World" al archivo.

Con esto se puede trabajar con off-sets para modificar el archivo:

´´´c
strncpy(mappeo + 6, "UTNSO", strlen("UTNSO") + 1);
msync(mappeo, tamanio, MS_SYNC);

char *texto = malloc(tamanio);
fread(texto, tamanio, 1, archivo);
printf("%s", texto);
´´´

Daria de output:

´´´
Hello UTNSO
´´´