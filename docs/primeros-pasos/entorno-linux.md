# Conseguir un entorno Linux

Tanto para el desarrollo como para la evaluación del Trabajo Práctico utilizamos
máquinas virtuales provistas por la cátedra con todo el software y
configuraciones necesarias.

Si bien no es _estrictamente necesario_ utilizarlas, sí es **altamente
recomendado**, ya que **el grupo debe asegurarse que el trabajo práctico
funcione en el entorno en el que va a ser evaluado**.

::: danger Solo bajo tu propio riesgo...

De todas formas, si te es imposible instalar VirtualBox y _no te queda otra
alternativa_ que utilizar un entorno nativo u otro software de virtualización,
te dejamos un par de scripts para poder instalar todos los paquetes en
[este repositorio](https://github.com/sisoputnfrba/entorno-vms).

Por ejemplo, si contás con un procesador M1 y necesitás una alternativa a
VirtualBox podés probar [UTM](https://www.youtube.com/watch?v=hnwK-nkXolc).

Luego de seguir con el manual de instalación, ya podés pasar a la
[última sección de esta guía](#amigandose-con-la-consola).

:::

## Descargar VirtualBox

Primero, debemos instalar
[VirtualBox](https://www.virtualbox.org/wiki/Downloads), el software de
virtualización que utilizamos para correr las máquinas virtuales de la cátedra.

También se recomienda descargar e instalar el **Extension Pack**, el cual lo
pueden encontrar más abajo en el mismo link.

## Descargar la máquina virtual

La máquina virtual que se utiliza para evaluar el TP es una Ubuntu Server, una
distribución que no cuenta con entorno gráfico.

Por lo tanto, para facilitar el desarrollo utilizaremos otra imagen que incluye
un entorno gráfico liviano Lubuntu instalado encima de la Ubuntu Server de las
entregas.

Está comprimida en ?? partes (hosteadas en Google Drive):

- [WIP](https://faq.utnso.com.ar/vm-gui-1)

::: tip

Para descomprimirlas, pueden utilizar:

| SO      | Software                                                                                     |
|---------|----------------------------------------------------------------------------------------------|
| Windows | [WinRAR](https://www.win-rar.com/)                                                           |
| Linux   | [7z](http://manpages.ubuntu.com/manpages/jammy/man1/7z.1.html) `sudo apt install p7zip-full` |
| MacOS   | [The Unarchiver](https://theunarchiver.com/)                                                 |

:::

::: warning

Es importante que las 5 partes se encuentren en la misma carpeta al momento de
descomprimir.

:::

### Verificar la descarga

Luego, para verificar que la descarga fue correcta, vamos a calcular el
[MD5](https://es.wikipedia.org/wiki/MD5) de los seis archivos siguiendo este
video:

<YouTube v="0CL9Os8IUcY"/>

Pueden copiar el comando de acá:

<CodeGroup>
<CodeGroupItem title="Windows">

```:no-line-numbers
certutil -hashfile [archivo] md5
```

</CodeGroupItem>
<CodeGroupItem title="Linux">

```:no-line-numbers
md5sum [archivo]
```

</CodeGroupItem>
<CodeGroupItem title="MacOS">

```:no-line-numbers
md5 [archivo]
```

</CodeGroupItem>
</CodeGroup>

Y los hashes son los siguientes:

```:no-line-numbers
WIP
```

::: details También se encuentra disponible la descarga de las VMs sin entorno gráfico

Los links de descarga son los siguientes:

- [WIP](https://faq.utnso.com.ar/vm-server-1)

Y los hashes MD5:

```:no-line-numbers
WIP
```

:::

## Crear la máquina virtual

Teniendo VirtualBox instalado y la imagen descomprimida, vamos a crear la
máquina virtual siguiendo este video:

<YouTube v="DmkSXv_Xa-U"/>

::: tip

Ambas máquinas virtuales tienen creado un usuario **utnso** con contraseña
**utnso**.

:::

## Instalar las Guest Additions

Las Guest Additions son un conjunto de herramientas extras que permiten que
VirtualBox nos provea ciertas funcionalidades al adaptar nuestra máquina virtual
con el sistema operativo (por ejemplo, hacer **pantalla completa** o **compartir
el portapapeles**). También tenemos un video para eso :smile:

<YouTube v="uMoO58tPc5c"/>

::: warning IMPORTANTE

En las versiones más recientes, el mensaje que aparece luego de ejecutar el
script de instalación es el siguiente:
```:no-line-numbers
VirtualBox Guest Additions: Running kernel modules will not be replaced until
the system is restarted
```
Esto significa que es necesario reiniciar la VM para aplicar los cambios.

:::

### Habilitar el portapapeles compartido

Ahora sí, podremos redimensionar la pantalla dinámicamente o habilitar el
portapapeles compartido de esta forma:

<YouTube v="xJ52dDTfCHo"/>

::: details En caso de que el portapapeles compartido funcione pero la pantalla completa no...

En la mayoría de los casos, esto se resuelve cambiando el controlador gráfico de
la pantalla a VBoxVGA:

![virtualbox-01](/img/primeros-pasos/linux/virtualbox-01.png)

Si este método no funciona, una alternativa es aumentar la pantalla a un tamaño
fijo accediendo a los ajustes del monitor:

![virtualbox-02](/img/primeros-pasos/linux/virtualbox-02.png)

:::

## Amigándose con la consola

¡Muy bien! Ya tenés el entorno Linux preparado y como siguiente paso estaría
bueno que puedas familiarizarte con una herramienta fundamental: la terminal de
Linux. La misma te va a permitir llevar a cabo distintas acciones como navegar
entre archivos, ejecutar programas o acceder a otros recursos que podes
encontrar más adelante como la herramienta de versionado Git o Valgrind.

Para eso, te dejamos acá algunos links que te pueden ser útiles:

- [Micro-repaso de Arquitectura](https://faq.utnso.com.ar/guia-repaso-arquitectura)
- [Mario Bash](https://faq.utnso.com.ar/mariobash) :joystick:
- [Guía de uso de Bash](../guias/consola/bash.md)
- [Control de versionado con Git](../guias/consola/git.md)
