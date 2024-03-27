# Help! I need somebody!

El motivo de esta página es para tener un poco centralizado el tema del soporte,
ya que, como siempre decimos, el trabajo práctico es extenso y complejo, por lo
que tratamos de dar todo el soporte posible.

En esta página queremos centralizar un poco la información acerca de los canales
de soporte y cómo usarlos correctamente.

::: details Teoría y/o ejercicios

En el [Campus Virtual](https://faq.utnso.com.ar/cv) vas a encontrar un foro de
consultas sobre la parte teórica de la materia.

:::

::: details Inscripciones, temas de grupos y dudas administrativas

Como saben, al poder hacer grupos intercurso les pedimos que se registren en el
[Sistema de Inscripciones](https://faq.utnso.com.ar/inscripciones) para poder
después informarle correctamente las notas a cada profesor de teoría.

Sin embargo, como es posible que surjan inconvenientes (ya sea con el login de
Github, con permisos en los repositorios una vez confirmado el grupo o temas
relacionados a los cambios de grupo) las consultas deben ser via
mail a [inscripciones@utnso.com.ar](mailto:inscripciones@utnso.com.ar).

::: tip

Si estás buscando grupo o integrantes, las búsquedas se encuentran centralizadas
en [este issue](https://faq.utnso.com.ar/issue-grupos).

:::

::: details Consultas sobre el enunciado (desde el foro)

Es muy común que durante el desarrollo del TP surjan dudas respecto al
enunciado: son enunciados largos, complejos y que a veces pueden quedar cosas
poco claras. En ese caso la mejor opción es que creen un issue al
[Foro de consultas](https://faq.utnso.com.ar/foro).

La ventaja de este medio es que no tienen que esperar al sábado de soporte para
hacer las consultas y pueden tener respuestas muchisimo mas rápido. Además,
ayudan a sus compañeros porque rara vez una duda de enunciado la tiene un solo
grupo.

De hecho, pueden verificar si algún otro alumno ya tuvo la misma duda y fue
respondida usando el buscador de issues para filtrar según su _label_:

![consultas-01](/img/consultas/consultas-01.png){data-zoomable}

::: tip

Antes de subir un issue, recordá leer primero el
[readme](https://faq.utnso.com.ar/github/foro/blob/master/README.md), tiene
algunos tips sobre su funcionamiento ;)

:::

::: details Consultas sobre el enunciado (desde Discord)

Si se sienten con más comodidad planteando la duda en forma sincrónica,
otro medio de consulta son los sábados de soporte a través del servidor de
[Discord](https://faq.utnso.com.ar/discord-invite).

::: warning IMPORTANTE

El Discord va a estar activo para consultas de forma sincrónica solo los días
de sábado de soporte en los que la fila del canal `#general` se encuentre
iniciada:

![image](https://user-^s.githubusercontent.com/39303639/229314091-3524500a-a2fd-4d07-8b76-5255d2956ab3.png){data-zoomable}{data-zoomable}

Las fechas de soporte van a ser anunciadas cuatrimestre a cuatrimestre en el
[blog](https://faq.utnso.com.ar/blog).

:::

::: details Dudas conceptuales para encarar el TP o código del equipo

Este es el caso mas complicado, ya que acá muy posiblemente tengan que mostrar
parte de su código o de su solución. En estos casos, lo que más les recomendamos
es que se pasen por [Discord](https://faq.utnso.com.ar/discord-invite), ya que
ahi no solo vamos a poder ver el código, sino que además la comunicación va a
ser muchísimo más efectiva porque evitamos los errores de interpretación por
alguna coma o algún punto mal puesto.

:::

::: details Dudas sobre cómo utilizar una función

Recuerden que **el `man` es su amigo**. Pueden consultar la documentación
oficial de cualquier función en C consultando por la consola, por ejemplo:

```bash
man fopen
```

O también pueden encontrar los mismos manuales en línea:
[fopen(3) - Linux manual page](https://man7.org/linux/man-pages/man3/fopen.3.html)

Si es una función de las **commons**, pueden consultar la descripción de cada
una en los [headers](https://faq.utnso.com.ar/commons-src)
y ejemplos de uso en los
[unit tests](https://faq.utnso.com.ar/commons-unit-tests).

También pueden hacernos consultas a través del
[foro](https://faq.utnso.com.ar/foro), o buscar si alguien más tuvo la
misma duda.

::: tip

Una duda muy común sobre las commons es cómo pasarle parámetros extra a las
funciones de orden superior (por ejemplo, `list_filter` o `list_find`):

<YouTube v="1kYyxZXGjp0"/>

:::

::: details Problemas con las VMs o errores de compilación

En el caso de que tengan un problema técnico con VirtualBox u otra herramienta
(y que te aparezca un texto de error del estilo: `VERR_ACCESS_DENIED` o
`Can't find source file at`), les aconsejamos consultar primero:

- El material que se encuentra en esta página
- [El buscador de issues del foro](https://faq.utnso.com.ar/issues)
  (recuerden que pueden filtrar por texto o por label)
- Si se trata de algún mensaje de error que no aparece en el foro (o la solución
  del foro no funcionó), existe la posibilidad de que alguien más por fuera de
  la facultad se haya topado con el mismo problema, por lo que una búsqueda
  rápida en [Google](https://google.com/) suele ser lo más inmediato.

En caso de que lo anterior no haya funcionado, siéntanse libres de subir un
issue al [foro](https://faq.utnso.com.ar/foro) o consultar el próximo sábado
de soporte en [Discord](https://faq.utnso.com.ar/discord-invite).

::: tip

Si necesitan compartirnos un error de compilación desde Visual Studio Code, nos
servirá de gran ayuda contar con la salida del compilador. Para obtenerla,
podemos navegar a la pestaña de _Terminal_ y **copiar el texto** que aparece al
ejecutar la tarea de compilación:

![vscode-copy-compiler-output](/img/primeros-pasos/primer-proyecto-c/vscode-copy-compiler-output.gif){data-zoomable}

Un texto de error es mucho más útil que una captura de pantalla, ya que nos
permite copiarlo e investigarlo sin tener que transcribirlo manualmente. Además,
si alguien más tiene el mismo problema, va a poder encontrar la solución
utilizando el buscador del foro.

:::

## ¿Y los ayudantes asignados?

Algo que hicimos durante mucho tiempo fue el asignar ayudantes a cada grupo,
pero la virtualidad y el feedback de los alumnos de los cuatrimestres anteriores
(donde todo fue virtual) nos llevó a pensar seriamente si era algo que fuera
efectivo ya que la mayoría de las dudas se resolvieron vía foro o vía discord y
no dependían tanto de la disponibilidad de un ayudante en particular.

Entonces, a partir del 1c2021, decidimos ir dejando de lado la idea de asignar
ayudantes y hacer más foco en el foro y en Discord buscando mejorar la
experiencia de cursada.

Sin mucho más para contarles, y en alusión al título de la página, les dejamos
el tema de Los Beatles **Help!**

<YouTube v="2Q_ZzBGPdqE"/>
