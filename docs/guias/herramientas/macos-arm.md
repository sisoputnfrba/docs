# Emular la VM Server en macOS con procesador ARM

::: warning ATENCIÓN

Puede que esta guía aplique también para otros casos similares (por
ejemplo, para ejecutar desde Linux/Windows con procesadores ARM), pero
todavía no lo probamos - así que hay _todavía menos_ garantías.

:::
Si tenés una computadora ejecutando macOS con un procesador ARM (M1, M2,
y demás), por ahora no vas a poder usar VirtualBox para ejecutar las
VMs, dado que las mismas están hechas para la arquitectura AMD64.

Podés intentar un montón de caminos distintos para desarrollar el TP,
pero nuestro más sano consejo es que _por lo menos **pruebes** el TP en
las VMs que les damos_.

::: danger EXPERIMENTAL

Toda esta guía (y las VMs que resulten de ella) es experimental, y no es
una manera oficial de ejecutar las VMs. Vamos a intentar darte una mano
para que funcionen, pero la forma oficial y soportada de probar el TP es
usando VirtualBox en procesadores AMD64.

Avanzá bajo tu propio riesgo[^1].

:::

Para lograrlo en tu computadora, podemos aprovechar
[UTM](https://mac.getutm.app/), una herramienta que soporta tanto
virtualización como emulación de sistemas operativos. Es decir, podés
ejecutar una máquina virtual de la misma arquitectura que tu hardware de
base, o bien emular otro hardware: ejecutar un proceso extra que traduce
en tiempo de ejecución las instrucciones de una arquitectura a la otra.

::: warning OJOTA

No sólo emular otra arquitectura es lento, si no que, _además_, como
todo programa de software **puede tener bugs**. Como spoileamos en la
primer advertencia de esta página: todo este proceso tiene muy pocas
garantías.

Nada mejor que probar el TP en el ambiente más idéntico al de la entrega
que puedas, pero _quizá_ esta solución sea un poco más cómoda que
comprarte o andar paseando una segunda computadora con arquitectura
AMD64.

:::

## Pre-requisitos

Vamos a asumir que podés hacer todo esto por tu cuenta:

- **Descargar y descomprimir [el disco de las VMs Server](/recursos/vms#ubuntu-server-64-bit)**. No te preocupes por no contar con una interfaz gráfica, ¡eso lo resolveremos más adelante!
- **Descargar e instalar [UTM](https://mac.getutm.app)**. Es de código
abierto, es gratuito, y se baja e instala más o menos como siempre.
- **Descargar e instalar [qemu](https://www.qemu.org/download/#macos)**.
Necesitamos la herramienta `qemu-img`, que podés instalar via Homebrew
haciendo `brew install qemu`. Si no tenés Homebrew, primero deberás
[instalartelo](https://brew.sh/).

## Convertir la imagen de disco

Cuando descargás y descomprimís el disco de la VM que te proporcionamos,
el resultado es un archivo con extensión `.vdi`, que es el formato de
discos virtuales que soporta VirtualBox.

::: tip

No te olvides de [comparar el hash MD5](/primeros-pasos/entorno-linux#verificar-la-descarga)
para asegurarnos de que la descarga fue exitosa.

:::

UTM es, básicamente, una interfaz del sistema de virtualización y
emulación QEMU, que usa discos en formato `qcow2`. Así que el primer
paso será convertir de un disco al otro. Teniendo QEMU instalado (y, por
lo tanto, el programa `qemu-img` disponible), la conversión la podés
hacer abriendo una terminal y ejecutando:

```
qemu-img convert -f vdi -O qcow2 /ruta/al/Server.vdi Server.qcow2
```

En este comando, `convert` es la operación específica que queremos
pedirle a `qemu-img`, `-f vdi` especifica el formato de la imagen
origen, `-O qcow2` (es una O mayúscula) especifica el formato de imagen
al que convertir, y después van las rutas del archivo fuente y el de
destino.

El programa se toma sus 15 segundos en convertir, durante los que no da
ningún output. Si te devuelve el prompt sin ningún mensaje de error,
anduvo todo bien.

```bash
$ ls -lh
total 14061568
-rwxr-xr-x@ 1 user  staff   6.7G Sep 27  2022 Server.vdi
$ qemu-img convert -f vdi -O qcow2 ./Server.vdi Server.qcow2
$ ls -lh
total 27598976
-rw-r--r--@ 1 user  staff   6.5G Jun 28 01:09 Server.qcow2
-rwxr-xr-x@ 1 user  staff   6.7G Sep 27  2022 Server.vdi
$ 
```

## Crear la máquina virtual en UTM

Abrí UTM y dale a `Create a New Virtual Machine`.

Te va a ofrecer Virtualizar o Emular: como estamos haciendo todo esto
para ejecutar la VM que usa otra arquitectura, dale a Emular.

Elegí ejecutar Linux, y cuando te pida que le des una ISO, elegí Browse
y seleccioná _cualquier archivo_: UTM pretende bootear desde esta ISO
para instalar el sistema operativo de tu nueva máquina virtual, pero acá
ya tenemos un disco con un sistema operativo instalado, así que le
estamos mintiendo un poco al wizard simplemente porque no nos deja crear
la VM sin ISO - pero ya lo vamos a solucionar.

En la ventana siguiente, elegí la arquitectura `x86_64` (el nombre
técnico de "AMD64", que, además, probablemente sea el default de esta
opción), dejá el System que tengas por defecto (podría intentar mentirte
_un montón_ sobre qué son esas opciones, pero aún no tenemos mucha idea y
preferimos ahorrarnos ese inconveniente), dale 1024 MB de RAM (podés poner
más, pero en la entrega final van a probar con 1024 MB), dejale los CPU
cores en default, y dale siguiente.

Dejale el tamaño de disco que tenga al storage (total ahora lo vamos a
borrar), dejá el Shared Directory vacío, y en la página final dale un
nombre a la VM y creala - **pero no la arranques aún**.

De vuelta en la ventana principal de UTM, seleccioná la VM nueva y
editala.

![Captura de la ventana de UTM, con la máquina virtual seleccionada y el
botón de Preferencias
resaltado](/img/herramientas/macos-arm/vm-preferencias.png)

Una vez en las preferencias, buscá en la barra lateral la opción QEMU,
y ahí dentro des-seleccioná la opción `UEFI Boot`.

![Captura de la ventana de Preferencias de UTM, con la solapa QEMU
seleccionada, mostrando la opción UEFI Boot
destildada](/img/herramientas/macos-arm/preferencias-qemu.png)

De vuelta en la barra lateral, seleccioná el primer IDE Drive que hay
abajo. Debería tener Image type `CD/DVD (ISO) Image`, y el `Path` del
archivo cualquiera que seleccionaste antes. Dale `Clear` para vaciar el
Path.

::: tip

Si por algún motivo el primer IDE Drive no es de este tipo, revisá el
siguiente. Capaz pueda pasar que estén en otro orden, no sé.

:::

![Captura de la ventana de Preferencias de UTM, con la solapa IDE Drive
seleccionada, mostrando el Path
vacío](/img/herramientas/macos-arm/preferencias-ide-iso.png)

Seleccioná la segunda solapa IDE Drive de la barra lateral, y esta vez
el Image type debería ser `Disk Image`. Este es el disco virtual en el
que UTM pretendía instalar nuestro sistema operativo - como ya tenemos
otro preparado, dale `Delete Drive` y confirmá la pregunta.

![Captura de la ventana de Preferencias de UTM, con la solapa IDE Drive
seleccionada, mostrando el disco virtual
creado](/img/herramientas/macos-arm/preferencias-ide-disk-image.png)

::: tip Nota

En otras versiones de UTM el botón de delete está escondido bien abajo, sobre el final de la ventana
![Captura de otra versión de UTM donde el bóton de delete esta más escondido](/img/herramientas/macos-arm/boton-delete-utm.png)

:::

Por último, tocá el botón de `New...` en la barra lateral para agregar
el disco que convertimos antes. En la ventanita flotante, tocá
`Import...` (es decir: no toques Create), y buscá el archivo `qcow2` que
creaste hace un rato con `qemu-img`.

![Captura de la ventana de Preferencias de UTM, con la opción New Drive
seleccionada, mostrando el botón de
Import](/img/herramientas/macos-arm/preferencias-new.png)

Ahora sí, dale `Save`, y ejecutá la VM dándole al botón de Play. ¡Listo!

::: tip Si la VM no enciende, ¡todavia tenemos una posibilidad!

Vamos a editar la configuracion de la VM de nuevo, esta vez vamos a `System` y cambiamos la configuración de System `Standard PC (Q35 + ICH9, 2009) (pc-q35-7.2)` es una opción muy parecida a la default
![Captura de la ventana de Preferencias de UTM, con la opcion de system deseada](/img/herramientas/macos-arm/preferencias-qemu-system.png)

Cuando elijan la nueva opcion al cartel de warning le dan aceptar.

Luego, buscamos de nuevo la opción QEMU y ahí dentro volvemos
a des-seleccionar la opción `UEFI Boot`. Esto es porque al
cambiar de sistema se vuelve a poner el check de UEFI.

Ahora le damos a play nuevamente. ¿Listo?

:::

## Corregir la configuración de red

Probablemente la configuración de red de la VM no te funcione, porque
QEMU seguramente le asigne a la placa de red un nombre de dispositivo
distinto al que tenía el disco que bajaste.

Para corregirlo, iniciá sesión en la VM, ejecutá `ip addr`, y fijate si
la entrada con nombre del estilo `enp0s1` (quizá ese mismo) tiene una
línea que comience con `inet` y una IP. Si está: fiesta, tenés internet,
ganaste.

![Output del comando ip addr. remarcando el nombre de la interfaz de red](/img/herramientas/macos-arm/ip-addr-interfaz.png){data-zoomable}

Si la interfaz de red no está configurada, editá el archivo
`/etc/netplan/00-installer-config.yml` con tu editor favorito (¡acordate
de usar `sudo`!), y reemplazá en la línea que dice `enp0s3:` el nombre
de dispositivo que te haya listado `ip addr` (_¡dejale el `:` al final,
eh!_):
```yaml
network:
    ethernets:
        enp0s3: // [!code --]
        enp0s1: // [!code ++]
            dhcp4: true
    version: 2
```

::: tip

Si no tenés un editor de textos favorito, podés revisar la [guía de
nano](/guias/consola/bash#nano).

Como TL;DR, ejecutá `sudo nano /etc/netplan/00-installer-config.yml`,
poné la contraseña de tu usuario `utnso`, hacé los cambios al archivo, y
después tocá CTRL+X (_Exit_), después `Y` ("Yes") cuando te pregunta si
querés guardar el "buffer", y por último dale `Enter` para que guarde en
la misma ruta que habías abierto.

:::

Una vez corregido el archivo, ejecutá `sudo netplan apply` para aplicar
los cambios, y, después de eso, confirmá con `ip addr` que ahora sí
tenés una conexión de red funcionando (buscá la línea de `inet`).

![Output del comando ip addr, mostrando la interfaz enp0s1 con dirección
IP asignada](/img/herramientas/macos-arm/ip-addr-ip-asignada.png)

> _¡Mirá, mirá!: tengo internet[^2]_ \- Carlitox

::: danger Ojalá que nunca te pase

Si, después de seguir estos pasos, seguís sin tener conectividad, pasate
[por el foro](https://faq.utnso.com.ar/foro) con bastante paciencia,
porque andá a saber qué anda pasando.

:::

Ahora sí, deberías _más o menos_ tener una VM funcionando. Disfrutala
todo lo que puedas, no te olvides de que esto es todo experimental y que
puede fallar, y tenele mucha paciencia a tus ayudantes con las consultas
que hagas respecto a la VM, porque vamos a tratar de darte una mano,
pero estamos improvisando acá también.


## ¿Y cómo codeo desde la VM Server?

En el caso de VirtualBox, nosotros les proveemos una VM con interfaz gráfica para poder desarrollar. Pero si intentamos utilizar esa misma probablemente te resulte **insoportablemente lento** (por esto de la emulación).

Pero no te preocupes, ¡hay una opción más que podemos usar! Y esto es la magia de trabajar remotamente por SSH.

En Visual Studio Code vamos a descargar la extensión [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack), y a continuación[^3]:

- Abrimos el Command Palette (⇧⌘P)
- Buscamos la opción `Remote-SSH: Connect to Host...`
- Ponemos `utnso@{la ip enp0s1}`
- Si pregunta que sistema estamos usando ponemos Linux, si pregunta que ssh file seleccionamos el que este en nuestra carpeta de usuario
- Nos va a pedir la contraseña es la del sistema (`utnso`)
- Y ahora ya podemos continuar abriendo un [simple proyecto C](/primeros-pasos/primer-proyecto-c).

::: tip

Podemos abrir una consola remota desde Visual Studio Code haciendo click en `Terminal` > `New Terminal`.

:::


<br><br>

[^1]:
    O no avances. Vos fijate.

[^2]:
    Tener una IP local no necesariamente significa que tengas internet,
    pero no recuerdo ninguna serie web con un personaje tan fisura como
    Carlitox diciendo "¡Tengo LAN!" :shrug:

[^3]:
    Guia basada en https://code.visualstudio.com/docs/remote/ssh
