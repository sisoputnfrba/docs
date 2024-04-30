# Cómo importar el TP en Eclipse IDE

Si sos recursante, ya estás familiarizado con Eclipse y querés seguir usándolo
para desarrollar el TP este cuatrimestre, esta sección es para vos.

A diferencia de Visual Studio Code, Eclipse no nos provee una forma sencilla de
guardar la configuración de un proyecto en un archivo de texto. Es por esto que
decidimos no incluirla en el repositorio del TP.

De hecho, como verás en los archivos `.gitignore` del repositorio, agregamos
explícitamente los archivos generados por Eclipse para evitar que se suban al
repositorio y conflictúen con las configuraciones de otros compañeros:

```txt:line-numbers
# Generated files
bin/
obj/
*.log

# Eclipse files // [!code focus]
.settings/ // [!code focus]
.cproject // [!code focus]
.project // [!code focus]

# Visual Studio Code files
.vscode/*
!.vscode/c_cpp_properties.json
!.vscode/launch.json
!.vscode/settings.json
!.vscode/tasks.json
```

La desventaja de esto es que **cada alumno** deberá configurar su proyecto de
forma manual siguiendo los pasos que se detallan a continuación, pero una vez
configurado no deberían volver a tener que hacerlo.

## Configurar el Workspace

Para importar un proyecto, primero vamos a cambiar la ruta del Workspace para
que apunte a nuestro repo. Para esto, iremos a
`File > Switch Workspace > Other...`:

![workspace-01](/img/guias/herramientas/eclipse/switch-workspace.png){data-zoomable}

Y luego, seleccionaremos la ruta ayudándonos con el botón `Browse...`, y haremos
click en `Launch`:

![workspace-02](/img/guias/herramientas/eclipse/select-workspace-folder.png){data-zoomable}

## Agregar un proyecto C al workspace

### Crear un Makefile Project

Empezaremos creando el proyecto de Eclipse a través de la opción
`File > New > Makefile Project with existing code`:

![project-01](/img/guias/herramientas/eclipse/file-new-makefile-project.png){data-zoomable}

::: warning IMPORTANTE

Si no aparece ahí, también la pueden encontrar en
`File > New > Other...` y buscando "makefile":

![project-02](/img/guias/herramientas/eclipse/select-a-wizard.png){data-zoomable}

:::

Luego, seleccionaremos la carpeta del proyecto ayudándonos con el botón
`Browse...` y dejaremos todo tildado como en la imagen:

![project-03](/img/guias/herramientas/eclipse/import-existing-code.png){data-zoomable}

Nos aparecerá la carpeta del proyecto en el `Project Explorer` de Eclipse:

![project-04](/img/guias/herramientas/eclipse/project-explorer.png){data-zoomable}

### Compilar el proyecto

Ahora, vamos a generar las configuraciones necesarias para poder compilar
cada proyecto.

Primero, desde el `Project Explorer` haremos click derecho sobre la carpeta de
nuestro proyecto y luego haremos click en `Build Project`:

![run-config](/img/guias/herramientas/eclipse/build-project.png){data-zoomable}

Esto nos generará el ejecutable en la carpeta `bin`:

![project-explorer-with-bin](/img/guias/herramientas/eclipse/project-explorer-with-bin.png){data-zoomable}

### Ejecutar el proyecto

Ahora, para ejecutarlo, haremos click derecho sobre ese ejecutable e iremos a
`Run As` > `Local C/C++ Application`:

![run-config](/img/guias/herramientas/eclipse/run-as-local-c-cpp-application.png){data-zoomable}

 Ya logramos ejecutar nuestro proyecto:

![project-08](/img/guias/herramientas/eclipse/run-console.png){data-zoomable}

¡Y listo! Arriba a la izquierda ya se nos generó una configuración por defecto
que podemos utilizar para compilar con :hammer:, ejecutar con :arrow_forward: o
usar el debugger :bug::

![run-panel](/img/guias/herramientas/eclipse/run-panel.png){data-zoomable}

## Agregar una static library al workspace

Por último, para poder importar nuestra biblioteca con código compartido
`utils`, debemos seguir un par de pasos extra, ya que Eclipse no va a detectar
automáticamente las funciones que se encuentran en la biblioteca dentro de
cada proyecto.

### Verificar el Workspace

Para importar una biblioteca (estática o compartida), primero debemos
asegurarnos que el workspace sea
[el mismo que usamos para importar el proyecto](#configurar-el-workspace):

![workspace-02](/img/guias/herramientas/eclipse/select-workspace-folder.png){data-zoomable}

### Crear otro Makefile Project

Luego, vamos a crear un nuevo Makefile Project de la misma forma que hicimos con
el [otro proyecto](#crear-un-makefile-project). Debe quedar así:

![static-01](/img/guias/herramientas/eclipse/project-explorer-with-utils.png){data-zoomable}

### Vincular la biblioteca al proyecto

Con la biblioteca ya importada veremos que el autocompletado no funciona si
intentamos llamar una función de la biblioteca:

![static-02](/img/guias/herramientas/eclipse/hello-world-not-working.png){data-zoomable}

Para corregir esto, haremos click derecho **en el proyecto** e iremos a
`Properties`:

![static-03](/img/guias/herramientas/eclipse/properties.png){data-zoomable}

Y en ese menú, iremos a `C/C++ General > Paths and Symbols > References` y
tildaremos la biblioteca como se ve en la captura:

![static-04](/img/guias/herramientas/eclipse/paths-and-symbols-references.png){data-zoomable}

Ahora sí podremos utilizar el autocompletado para incluir las funciones de la
biblioteca:

![static-05](/img/guias/herramientas/eclipse/hello-world-working.png){data-zoomable}

¡Y listo! Este último paso debemos repetirlo para todos los proyectos que
quieran utilizar la biblioteca.
