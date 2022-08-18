# Preparar el entorno para codear

Una vez [instaladas las VMs](./entorno-linux.md) (o el entorno Linux que hayas
elegido), debemos continuar con un par de configuraciones antes de arrancar a
desarrollar.

## Descargar las Commons

Para facilitar el desarrollo del TP, desde la cátedra proveemos una biblioteca
con TADs de uso común (por ejemplo, colecciones vistas en Algoritmos como listas
y queues), funciones para simplificar el manejo de strings y fechas, entre
otras: las Commons.

Para descargarla, vamos a abrir una consola y nos vamos a clonar
[el repo](https://github.com/sisoputnfrba/so-commons-library) para instalarlas
en modo debug[^1]:

```bash:no-line-numbers
git clone https://github.com/sisoputnfrba/so-commons-library
cd so-commons-library
make debug
make install
```

::: tip

En los
[archivos `*.h` del repo](https://github.com/sisoputnfrba/so-commons-library/tree/master/src/commons)
van a encontrar todas las funciones que pueden usar junto con una breve
descripción.

:::

## Crear un proyecto en Eclipse

Una vez instaladas las commons, vamos a probar de incluirlas en nuestro primer
proyecto en **Eclipse**.

<YouTube v="Q8wfpu38PMc"/>

¿Por qué Eclipse? Con una configuración mínima, incluye por defecto una gran
cantidad de features para ayudarnos a desarrollar el TP como, por ejemplo,
Makefiles para compilar el código sin tener que usar `gcc` directamente desde la
consola, un [debugger integrado](../guias/herramientas/debugger.md),
[ejecución con Valgrind](../guias/herramientas/valgrind.md)...

Además, los ayudantes ya estamos familiarizados con su uso, por lo que ante
cualquier [duda o consulta](../dudas.md) vamos a saber por dónde orientarlos.

::: tip

En la sección de "herramientas" de las guías podrás encontrar más contenido para
conocer las features más útiles de Eclipse.

:::

## Configurar Git

Por último, antes de empezar a subir nuestro código en GitHub, vamos a
configurar nuestro usuario de Git para que al hacer `git commit` quede
registrado nuestro nombre y email:

```bash:no-line-numbers
git config --global user.email "tumail@tucasilla.com"
git config --global user.name "Tu Nombre"
```

::: warning

El email configurado debe ser uno de los mails verificados en tu
[cuenta de GitHub](https://github.com/settings/emails).

:::

También podemos configurar el gestor de credenciales para que almacene
nuestro [token](https://github.com/settings/tokens) la próxima vez que lo
ingresemos al hacer `git pull` o `git push`:

```bash:no-line-numbers
git config --global credential.helper store
```

De esta forma, una vez lo ingresemos por primera vez no será necesario volverlo
a hacer cada vez que querramos interactuar con el repo del Trabajo Práctico.

## Próximos pasos

- Para ir entrando más de lleno en el Lenguaje C, recomendamos arrancar a
  chusmear nuestra sección de guías de programación en C.
- También este [tutorial interactivo de C](https://www.learn-c.org/) (en inglés)
  puede ser de utilidad.
- Si te sentís con confianza, arranquemos con el [TP0](./tp0.md).

<br><br>

[^1]:
    ¿Por qué en modo debug? Es una herramienta que nos ayudará
    [más adelante](../guias/herramientas/debugger.md) (?)
