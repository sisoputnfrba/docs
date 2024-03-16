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

Si ejecutamos el comando `tree -a`, veremos que se nos descargaron los
siguientes archivos:

```bash
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
```

En el archivo `src/main.c` es donde vamos a empezar escribiendo nuestro código.

## Ejecutar el proyecto en Visual Studio Code

Ahora, vamos a abrir el directorio que creamos en Visual Studio Code con el
comando:

```bash
code .
```

Finalmente, para compilar y ejecutar el proyecto, nos moveremos a la pestaña
de _Run and Debug_ y haremos a hacer click en el botón de _Run_:

![vscode-run-debug](/img/primeros-pasos/primer-proyecto-c/vscode-run-debug.gif)

Si aparece un mensaje diciendo "Hola, Operativos!!", ¡felicidades! Ya tenés tu
primer proyecto en C funcionando.

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

También podemos configurar el gestor de credenciales para que almacene
nuestro [token](https://github.com/settings/tokens) la próxima vez que lo
ingresemos al hacer `git pull` o `git push`:

```bash
git config --global credential.helper store
```

De esta forma, una vez lo ingresemos por primera vez no será necesario volverlo
a hacer cada vez que querramos interactuar con el repo del Trabajo Práctico.


## Próximos pasos

- Para ir entrando más de lleno en el Lenguaje C, recomendamos arrancar a
  chusmear nuestra sección de guías de programación en C.
- También este [tutorial interactivo de C](https://www.learn-c.org/) (en inglés)
  puede ser de utilidad.
- Si te sentís con confianza, arranquemos con el [TP0](/primeros-pasos/tp0).

<br><br>

[^1]:
    ¿Por qué en modo debug? Es una herramienta que nos ayudará
    [más adelante](/guias/herramientas/debugger) (?)
