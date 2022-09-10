# Shared Libraries

Un video cortito sobre como crear una biblioteca compartida (Shared Library) con
Eclipse IDE para C, integrarla en un proyecto en C sobre Eclipse IDE. Viene con
un par de aclaraciones de cómo Eclipse traspasa esas configs al compilador GCC
para entender un poco más los mensajes de error.

<YouTube v="A6dhc9cCI18"/>

**¿Qué comando usamos para ejecutar el proyecto en la consola?**

```bash:no-line-numbers
LD_LIBRARY_PATH=/home/utnso/eclipse-workspace/pepes-threads/Debug ./pepes-main/pepes-main
```

Es importante que la variable es solo para el programa que estamos ejecutando,
pero hay formas de que quede seteada en la consola mientras está encendida, o
incluso, aunque la VM se apague!

Si querés saber más sobre las variables de entorno, pegale una leída a la última
sección de nuestra
[guía de uso de Bash](/guias/consola/bash#variables-de-entorno).
