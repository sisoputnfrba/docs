# Conseguir un entorno Linux

Tanto para el desarrollo como para la evaluación del Trabajo Práctico utilizamos
máquinas virtuales provistas por la cátedra con todo el software y
configuraciones necesarias.

Si bien no es _estrictamente necesario_ utilizarlas, sí es **altamente
recomendado**, ya que **el grupo debe asegurarse que el trabajo práctico
funcione en el entorno en el que va a ser evaluado**.

::: danger

De todas formas, si te es imposible instalar VirtualBox y _no te queda otra
alternativa_ que utilizar un entorno nativo u otro software de virtualización
(por ejemplo, si contás con un procesador M1 podés probar
[UTM](https://www.youtube.com/watch?v=hnwK-nkXolc)), te dejamos acá los paquetes
para que puedan instalarlos:

::: details Abrir solo si estás seguro de que NO podés usar VirtualBox

1. [Descargar Ubuntu Server for ARM](https://ubuntu.com/download/server/arm)
2. Instalar los siguientes paquetes:

```bash:no-line-numbers
# Ubuntu Server
sudo apt-get install aptitude gcc gdb git vim libncurses5 valgrind tig make \
  autotools-dev strace emacs nano openjdk-8-jdk libcunit1 libevent1-dev ssh \
  libfuse-dev build-essential g++ libcunit1-dev curl htop tree wget \
  libreadline8 libreadline-dev docker docker-compose
gpg --keyserver hkp://keys.gnupg.net --recv-keys \
  409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
source /home/utnso/.rvm/scripts/rvm
rvm install --default ruby-head

# Entorno gráfico (Lubuntu)
sudo apt-get install lubuntu-desktop terminator gitg meld geany pidgin \
  wireshark xclip bless gnome-do chromium-browser
```

3. [Instalar Eclipse for C/C++ Developers](https://www.eclipse.org/downloads/packages/release/2022-03/r/eclipse-ide-cc-developers)
4. [Instalar Visual Studio Code](https://code.visualstudio.com/download)

:::

## Descargar VirtualBox

Primero, debemos instalar VirtualBox, el software de virtualización que
utilizamos para correr las máquinas virtuales de la cátedra.

Como las VMs ya tienen unos años, recomendamos utilizar la versión
[6.0.18](https://www.virtualbox.org/wiki/Download_Old_Builds_6_0):

![virtualbox-00](/img/primeros-pasos/linux/virtualbox-00.png)

También se recomienda descargar e instalar el **Extension Pack**, el cual lo
pueden encontrar accediendo al mismo link.

## Descargar la máquina virtual

La máquina virtual que se utiliza para evaluar el TP es una Ubuntu Server, una
distribución que no cuenta con entorno gráfico.

Por lo tanto, para facilitar el desarrollo utilizaremos otra imagen que incluye
un entorno gráfico liviano Lubuntu instalado encima de la Ubuntu Server de las
entregas.

Está comprimida en 5 partes (hosteadas en Google Drive):
- [utnso-lubuntu-5.0.1.7z.001](https://faq.utnso.com.ar/vm-gui-1)
- [utnso-lubuntu-5.0.1.7z.002](https://faq.utnso.com.ar/vm-gui-2)
- [utnso-lubuntu-5.0.1.7z.003](https://faq.utnso.com.ar/vm-gui-3)
- [utnso-lubuntu-5.0.1.7z.004](https://faq.utnso.com.ar/vm-gui-4)
- [utnso-lubuntu-5.0.1.7z.005](https://faq.utnso.com.ar/vm-gui-5)

Para descomprimirlas, pueden utilizar:
- En Windows: [WinRAR](https://www.win-rar.com/)
- En Linux: [`7z`](http://manpages.ubuntu.com/manpages/bionic/man1/7z.1.html)
- En MacOS: [The Unarchiver](https://theunarchiver.com/)

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
certutil -hashfile ./nombrearchivo.extension md5
```

</CodeGroupItem>
<CodeGroupItem title="Linux">

```:no-line-numbers
md5sum ./nombrearchivo.extension
```

</CodeGroupItem>
<CodeGroupItem title="MacOS">

```:no-line-numbers
md5 ./nombrearchivo.extension
```

</CodeGroupItem>
</CodeGroup>

Y los hashes son los siguientes:

```:no-line-numbers
md5 (utnso-lubuntu-5.0.1.7z.001): 3b04c3261f8d301419b53158d8770499
md5 (utnso-lubuntu-5.0.1.7z.002): ffd6f99a42cc18f45632001088ae2a1f
md5 (utnso-lubuntu-5.0.1.7z.003): cdeeb5b7db34695bcb6b5bf04f398472
md5 (utnso-lubuntu-5.0.1.7z.004): c034783583b0f64c64ebfda84031c2b7
md5 (utnso-lubuntu-5.0.1.7z.005): afcc25d1f8ed0f722553af708811966e
md5 (utnso-lubuntu-5.0.1.vdi) -descomprimido- bdc2acbf759805ef1c7855af2089d975
```

::: details También se encuentra disponible la descarga de las VMs sin entorno gráfico

Los links de descarga son los siguientes:
- [ubuntu-server-5.0.1.7z.001](https://faq.utnso.com.ar/vm-server-1)
- [ubuntu-server-5.0.1.7z.002](https://faq.utnso.com.ar/vm-server-2)

Y los hashes MD5:
```:no-line-numbers
md5 (ubuntu-server-5.0.1.7z.001): 6d8ed10e4862495975e8450e799c658a
md5 (ubuntu-server-5.0.1.7z.002): 38df246a4ebf0ed11953dd0861d0028d
md5 (ubuntu-server-5.0.1.vdi) -descomprimido- 8424a22b2e93b73bf5cd3f13568dbbe9
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
VirtualBox nos provea ciertas funcionalidades al adaptar nuestra máquina
virtual con el sistema operativo (por ejemplo, hacer **pantalla completa** o
**compartir el portapapeles**). También tenemos un video para eso :smile:

<YouTube v="uMoO58tPc5c"/>

### Habilitar el portapapeles compartido

Ahora sí, podremos redimensionar la pantalla dinámicamente o habilitar el
portapapeles compartido de esta forma:

<YouTube v="xJ52dDTfCHo"/>

::: details En caso de que el portapapeles compartido funcione pero la pantalla completa no...

En la mayoría de los casos, esto se resuelve cambiando el controlador gráfico
de la pantalla a VBoxVGA:

![virtualbox-01](/img/primeros-pasos/linux/virtualbox-01.png)

Si este método no funciona, una alternativa es aumentar la pantalla a un tamaño
fijo accediendo a los ajustes del monitor:

![virtualbox-02](/img/primeros-pasos/linux/virtualbox-02.png)


:::

¡Y listo! Ahora, arranquemos a conocer un poco más sobre el entorno Linux y su
consola en la siguiente guía :smile:
