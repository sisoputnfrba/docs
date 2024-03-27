# Crear e importar varios módulos

En esta guía vamos a aprender a configurar nuestro propio _workspace_ en Visual
Studio Code para poder trabajar cómodamente en todos los módulos del Trabajo
Práctico de forma simultánea.

## Crear todos los módulos

Para empezar, debemos clonarnos el repositorio del Trabajo Práctico provisto en
la [organización de la cátedra](https://faq.utnso.com.ar/github) utilizando el
comando `git clone`.

Dentro de la carpeta del repositorio, vamos a ir creando un proyecto C para cada
módulo del Trabajo Práctico de la misma forma que lo hicimos en la
[guía de primeros pasos](/primeros-pasos/primer-proyecto-c):

```bash
mkdir kernel
cd kernel
wget -qO- https://faq.utnso.com.ar/project.tar.gz | tar -xzvf - --strip-components 1
cd ..
# y así sucesivamente para cada módulo
```
::: tip

`cd ..` nos permite volver a la carpeta del repositorio para poder crear el
siguiente módulo. Si quieren aprender a familiarizarse más con la consola, les
recomendamos seguir el tutorial interactivo
[Mario Bash](https://faq.utnso.com.ar/mariobash).

:::

## Crear el workspace

El siguiente paso será abrir Visual Studio Code, y **desde una ventana vacía**
nos iremos a la pestaña de `File` > `Add Folder to Workspace...`:

![vscode-add-folder-to-workspace](/img/guias/estructura/crear-modulos/vscode-add-folder-to-workspace.gif){data-zoomable}

Luego se nos desplegará un menú para seleccionar las carpetas que queremos
agregar al workspace. Vamos a ir una por una seleccionando cada carpeta de cada
módulo que creamos.

Una vez hecho esto, deberíamos poder irnos a la pestaña de `Run and Debug` y
seleccionar cualquier módulo para compilar y ejecutar, de la misma forma que
hicimos en el [TP0](/primeros-pasos/tp0):

![vscode-run-debug](/img/guias/estructura/crear-modulos/vscode-run-debug.gif){data-zoomable}

> En lugar de `run (client)` y `run (server)`, vamos a tener `run (kernel)`,
> `run (memoria)`, `run (filesystem)`, etc...

## Guardar el workspace

Finalmente, para no tener que hacer esto cada vez que abramos Visual Studio
Code, vamos a guardar el workspace. Para eso, nos vamos a la pestaña de
`File` > `Save Workspace As...` y guardamos el archivo con el nombre que
queramos, por ejemplo, `tp.code-workspace`.

### Antes de terminar...

Para que el workspace funcione correctamente, les recomendamos agregar la
siguiente configuración al archivo `tp.code-workspace` que creamos:

::: code-group

```json:line-numbers [tp.code-workspace]
{
	"settings": { // [!code ++]
		"debug.onTaskErrors": "abort", // [!code ++]
		"files.associations": { // [!code ++]
			"*.h": "c", // [!code ++]
		}, // [!code ++]
		"C_Cpp.errorSquiggles": "disabled", // [!code ++]
	}, // [!code ++]
	"folders": [
		{
			"name": "kernel",
			"path": "kernel"
		},
		// ... y el resto de módulos
	]
}
```

::: tip

- `debug.onTaskErrors` nos permite definir la acción a realizar en caso de que
   alguna tarea previa a ejecutar el debugger falle (en nuestro caso,
	 compilarlo). Recomendamos abortar la ejecución ya que no queremos estar
	 debuggeando sobre una versión desactualizada del proyecto si éste no compila.

- `files.associations` nos sirve para que el editor reconozca todos los
   archivos `*.h` como código C (y no código C++, que es el valor por defecto).
   De no hacer esto, el editor lo va a hacer individualmente por cada archivo
   `*.h` que abramos, lo cual puede ser bastante molesto.

- `C_Cpp.errorSquiggles` nos permite deshabilitar algunos mensajes de error que
   nos pueden llegar a aparecer por utilizar algunas features de `gcc` que
   pueden usar pero no forman parte del estándar de C[^1], como por ejemplo las
   [nested functions](https://www.youtube.com/watch?v=1kYyxZXGjp0). Además,
   esto permite que el editor tome en cuenta solo los errores al compilar, que
   son los verdaderamente importantes.

:::

¡Y listo! Una vez hecho esto, podemos commitear el archivo `tp.code-workspace`
para que nuestros compañeros de grupo puedan importar el workspace directamente.

## Próximos pasos

¡Buenísimo! Ya configuramos los módulos, pero ¿qué pasa si quiero hacer código
compartido entre los mismos? ¿Debo copiar y pegar el código en cada módulo?

Bueno, no necesariamente. En la [siguiente guía] vamos a crear e incluir una
biblioteca estática para poder compartir código entre módulos.

[siguiente guía]: /guias/estructura/codigo-compartido


<br><br>

[^1]: Existe una feature request al respecto en el repo de Visual Studio Code,
  les invitamos a dar su +1 para que se pueda incorporar esta feature en un
  futuro: [microsoft/vscode-cpptools#1035](https://github.com/microsoft/vscode-cpptools/issues/1035)
