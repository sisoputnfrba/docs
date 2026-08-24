# Conseguir un entorno Linux

Tanto para el desarrollo como para la evaluación del Trabajo Práctico utilizamos
máquinas virtuales provistas por la cátedra con todo el software y
configuraciones necesarias.

Si bien no es _estrictamente necesario_ utilizarlas, sí es **altamente
recomendado**, ya que **el grupo debe asegurarse que el trabajo práctico
funcione en el entorno en el que va a ser evaluado**.

::: danger NO SEGURO

Si te es imposible instalar VirtualBox y _no te queda otra alternativa_
que utilizar un entorno nativo u otro software de virtualización, te
dejamos un par de recursos que pueden ser de utilidad.

::: details Sin usar VirtualBox

- En [este repositorio](https://faq.utnso.com.ar/entorno-vms) se
encuentran los scripts que usamos para descargar los paquetes instalados
en las VMs, junto con una guía paso a paso.

- Si tenés una Mac con procesador ARM (M1, M2, etc), podés [emular la VM
usando UTM](/guias/herramientas/macos-arm). Si tenés procesador ARM con
otro sistema operativo, todavía no tenemos guía armada, pero podés
basarte en esa para emular la VM con QEMU.

Tené en cuenta que, a fin de cuatrimestre, tu trabajo práctico tiene que
funcionar en la VM Server, ejecutando en VirtualBox. De ser posible,
mantené tu desarrollo en el ambiente más similar que puedas, para evitarte
problemas a último momento.

Además, probablemente nos cueste más darte soporte para configuraciones
distintas como las que mencionamos arriba. Podés elegir usarlas, pero
te recomendamos que lo pienses _bastante bien_ antes de hacerlo.

Una vez instalado todo, no te olvides de repasar por la
[última sección](#amigandose-con-la-consola) para ver cómo usarlas.

:::

## Descargar VirtualBox

Primero, debemos instalar
[VirtualBox](https://faq.utnso.com.ar/virtualbox), el software de
virtualización que utilizamos para correr las máquinas virtuales de la cátedra.

También se recomienda descargar e instalar el **Extension Pack**, el cual lo
pueden encontrar más abajo en el mismo link.

## Descargar la máquina virtual

La máquina virtual que se utiliza para evaluar el TP es una Ubuntu Server, una
distribución que no cuenta con entorno gráfico.

Por lo tanto, para facilitar el desarrollo utilizaremos otra imagen que incluye
un entorno gráfico liviano instalado encima de la Ubuntu Server de las entregas.
[Acá pueden encontrar los links de descarga](/recursos/vms#xubuntu).

::: tip

También se encuentra disponible la descarga de las VMs sin entorno gráfico para
las pruebas.

:::

::: tip

El archivo descargado tiene extensión **.ova** (Open Virtual Appliance), el cual
ya incluye el disco y toda la configuración necesaria para la máquina virtual.

:::

### Verificar la descarga

Luego, para verificar que la descarga fue correcta, vamos a comparar el
[hash MD5](https://es.wikipedia.org/wiki/MD5) de los archivos descargados con el
que aparece en la misma página, siguiendo este video:

<YouTube v="0CL9Os8IUcY"/>

Pueden copiar el comando de acá:

::: code-group

```cmd [Windows]
certutil -hashfile [archivo] md5
```

```bash [Linux]
md5sum [archivo]
```

```bash [MacOS]
md5 [archivo]
```

:::

## Importar la máquina virtual

Teniendo VirtualBox instalado y la imagen **.ova** descargada, el proceso es
mucho más simple ya que no necesitamos crear la VM desde cero, sino importarla:

1. Abrir VirtualBox.
2. Ir a `Archivo > Importar servicio virtualizado...` (o `Ctrl` + `I`).
3. Seleccionar el archivo `.ova` que descargamos.
4. Seguir los pasos del asistente dejando las opciones por defecto excepto el
   adaptador de Red
5. Hacer clic en **Terminar** (o **Importar**).
6. Ir a **Configuración** y desde la sección de **Red** y tildar la opción
   **Habilitar adaptador de red**.

::: warning ADVERTENCIA

En caso de no poder iniciar la VM en Windows, es probable que tengan habilitado
Hyper-V, un software de virtualización que no es compatible con VirtualBox.

De ser así, les recomendamos primero leer
[cómo deshabilitar Hyper-V](https://docs.microsoft.com/es-es/troubleshoot/windows-client/application-management/virtualization-apps-not-work-with-hyper-v).

:::

## Habilitar las Guest Additions

Las Guest Additions (que permiten **pantalla completa** o **compartir el
portapapeles**) ya se encuentran instaladas en las nuevas máquinas virtuales.
Sin embargo, para poder utilizarlas, debemos asegurarnos de que estén
habilitadas en la configuración de VirtualBox.

### Habilitar el portapapeles compartido

Ahora sí, podremos redimensionar la pantalla dinámicamente o habilitar el
portapapeles compartido de esta forma:

<YouTube v="xJ52dDTfCHo"/>

::: warning ADVERTENCIA

En caso de que la pantalla completa no funcione pero el portapapeles compartido
sí, en la mayoría de los casos esto se resuelve cambiando el controlador gráfico
a "VBoxVGA":

![virtualbox-01](/img/primeros-pasos/linux/virtualbox-01.png){data-zoomable}

Si este método no funciona, una alternativa es aumentar la pantalla a un tamaño
fijo accediendo a los ajustes del monitor.

:::

## Amigándose con la consola

¡Muy bien! Ya tenés el entorno Linux preparado y como siguiente paso estaría
bueno que puedas familiarizarte con una herramienta fundamental: la terminal de
Linux. La misma te va a permitir llevar a cabo distintas acciones como navegar
entre archivos, ejecutar programas o acceder a otros recursos que podes
encontrar más adelante como la herramienta de versionado Git o Valgrind.

Para eso, te dejamos acá algunos links que te pueden ser útiles:

- [Micro-repaso de Arquitectura](https://faq.utnso.com.ar/guia-repaso-arquitectura)
- [Guía de uso de Bash](/guias/consola/bash)

También, más adelante, usaremos la terminal para interactuar con
[Git](/primeros-pasos/git), una herramienta de versionado de código que nos va a
permitir trabajar en equipo de forma más eficiente.

Pero primero, veremos una
[introducción minimalista al lenguaje C](/primeros-pasos/lenguaje-c) en la
siguiente guía.
