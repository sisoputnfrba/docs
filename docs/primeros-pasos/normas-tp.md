# Normas del Trabajo Práctico

## Introducción

La parte práctica de la materia está compuesta por un trabajo práctico grupal
que gradualmente guiará el aprendizaje del alumno a lo largo del cuatrimestre.
Se apunta a que el alumno desarrolle conocimientos de investigación, diseño e
implementación relacionados con los sistemas operativos.

El mismo consistirá en el desarrollo de una aplicación, cuyos componentes se
ejecutarán sobre una o diversas plataformas, teniendo como objetivo permitir al
alumno afianzar distintos conceptos teóricos vistos a lo largo de la cursada.

El trabajo práctico será evaluado de 3 maneras:
- En una instancia virtual en la mitad del cuatrimestre a través de los tres primeros checkpoints (evaluados por Tags en el repositorio de la catedra explicado en Checkpoint de Control Obligatorio).
- En una instancia práctica y grupal en el laboratorio (normalmente en Medrano)
- Una instancia individual y oral posteriormente a la aprobación del punto anterior (coloquio).

Para dar por aprobada la materia se deben tener los 3 puntos aprobados. En caso de no cumplir ya el primero no se permite realizar una presentación de los puntos siguientes.

## Inscripción de grupos

El grupo deberá estar conformado **obligatoriamente** por 5 integrantes, pudiendo
ser los mismos de cualquier curso de la materia. En caso de no cumplir
con esta restricción la cátedra podrá asignar alumnos de manera tal de cumplir
con la misma.

Para realizar la inscripción al trabajo práctico, el grupo deberá completar el
proceso de inscripción en el
[Sistema de Inscripciones](https://faq.utnso.com.ar/inscripciones)[^2].

La fecha límite de inscripción de grupos será anunciada a través del Campus Virtual, [el blog](https://faq.utnso.com.ar/blog) y el servidor de Discord de la materia.

Recomendamos acceder al issue titulado
[¿Buscás grupo / integrantes?](https://faq.utnso.com.ar/issue-grupos) para
contactar potenciales integrantes del grupo.

Si una persona no se encuentra con un grupo dentro de la fecha límite indicada, se dará por sentado que **no cursará la materia**, independientemente que se haya inscripto individualmente o no.

## Cambios de Grupo

Podrá existir un período de cambios de grupo durante el desarrollo del trabajo
práctico, siendo el objetivo del mismo unir grupos que no alcancen la cantidad
de 5(cinco) integrantes debido a bajas de sus compañeros. Es menester aclarar,
que cada alumno poseerá **una única chance de cambiarse de grupo**.

La fecha de inicio de dicho período será anunciada debidamente mediante los
medios de comunicación oficiales. De la misma forma, será anunciada la fecha de
finalización de los cambios de grupos, siendo la misma cercana a la fecha del
ultimo Checkpoint de Control Obligatorio, y la hora de finalización a las **18:00hs del mismo
día**.

Para pedir un cambio de grupo, la cátedra provee una
[herramienta](https://faq.utnso.com.ar/cambios) en el sistema de
inscripciones mencionado anteriormente. Dicha petición realizará un aviso a
todas las partes interesadas, las cuales poseerán **72 horas** para objetar el
mismo a través de [inscripciones@utnso.com.ar](mailto:inscripciones@utnso.com.ar). Pasadas las 72
horas, se verificará primero que se cumplan las condiciones, luego se hará efectivo el cambio de grupos, y por último se avisará a las partes interesadas vía mail.

Solamente se aceptarán cambios de grupo mediante dicha herramienta, con
excepción de casos particulares.

## Baja de la materia

Ante los casos en el que un alumno decida no continuar la materia, será su
responsabilidad darse de baja del grupo. Existe también la posibilidad de que el grupo pida la baja de un compañero pudiendo ser rechazada dentro de las 72 horas de haberse peticionado la baja.

Para ambos casos la modalidad de baja será la misma que para los cambios de grupos anteriormente
mencionada y deberá ser realizada mediante la misma herramienta o mediante un
mail a [inscripciones@utnso.com.ar](mailto:inscripciones@utnso.com.ar) con copia
a todos los integrantes del grupo (activos y a dar de baja). 

**Una vez aplicada la baja de la materia, el alumno no tendrá 
la posibilidad de volver a darse de alta en otro grupo hasta el
próximo cuatrimestre**.

## Uso del Repositorio de Versionado

Con el objetivo de facilitar el desarrollo del trabajo en equipo y poder
realizar un seguimiento de cada integrante del grupo, se utilizará
un repositorio alojado en el servidor GitHub.

Cada alumno deberá [crear una cuenta en GitHub](https://github.com/join), e
incluir su nombre de usuario en el sistema de inscripciones.

Luego será la Cátedra quien cree un repositorio para el grupo y les asignará los
permisos de escritura a sus integrantes y de lectura a los ayudantes.

Finalmente, cuando todas las evaluaciones finalicen, se realizará la comunicación pertinente
indicando que todos los repositorios serán borrados para que pueda
bajarse una copia quien así lo desee.

Es importante recalcar que **es OBLIGATORIO el uso del repositorio** ya que desde allí se tomarán las referencias para evaluar al grupo en la instancia a mitad de cuatrimestre y donde deberán obtener el código fuente que será compilado y ejecutado en las pruebas de laboratorio.

Aquel grupo que no cumpla con este requisito no será evaluado.

## Soporte

Para conocer los medios de soporte, visitar el
[post de dudas/consultas de la materia](/consultas)

## Régimen de Promoción

Existe un régimen de promoción de la materia, según la Ordenanza N°1549. Para la 
promoción de la materia, además de los requerimientos de la parte teórica de la
materia, el mismo **deberá aprobar el trabajo práctico con una nota final de 8
(ocho) o superior en la instancia de coloquio**.

Cualquier alumno cuya nota final no supere dicho valor no se encontrará en
condiciones de aprobar la materia por dicho régimen, incluso si se cumplimentan
los requerimientos de los parciales. En tal caso, la materia solamente se
encontrará regularizada.

## Guardado del TP

A partir del **2do cuatrimestre de 2024**, en caso de aprobar el trabajo práctico, se reconocerá la aprobación del mismo **solamente para el cuatrimestre siguiente al haber aprobado**.

Las condiciones para acceder a este régimen serán informadas en detalle por los docentes a cargo de los cursos, teniendo como punto de partida que el alumno deberá demostrar haber intentado aprobar tanto la cursada como el trabajo práctico.

## Estructura del trabajo práctico grupal

La especificación del trabajo práctico estará compuesta por una serie de
**checkpoints**. Los mismos sirven como método de evaluación del progreso del grupo y como guía para el desarrollo de un sistema.
Cada uno de ellos representa un conjunto cohesivo de requerimientos que deberán
ser satisfechos para que, de manera evolutiva, se genere el sistema final. Esta metodología de desarrollo se conoce como prototipado evolutivo.

### Checkpoint de avance

Los checkpoints serán una instancia parcial de verificación de avance. Los grupos deberán coordinar un espacio en el que mostrar su avance a fin de que los ayudantes
puedan proveer feedback y consejos sobre el estado del grupo y el trabajo
realizado, pudiendo aprovechar para este fin los horarios de consulta
dispuestos los sábados.

### Checkpoint de Control Obligatorio

El trabajo práctico contará con un mínimo de 3 **Checkpoints
de Control Obligatorio**. Completado el último, la cátedra verificará el avance de los 
grupos y, en caso de no cumplir con un avance mínimo requerido en dos de ellos **en tiempo y forma**, se les informará que
**no podrán continuar con la materia**. Todos los grupos deberán informar los avances requeridos de los 3 Checkpoints por medio de la 
creación de Tags en el repositorio provisto por la cátedra.

Esto implica que, al llegar a la fecha de cada uno de los primeros tres Checkpoints, un integrante 
del grupo deberá crear un Tag en el repositorio indicando que ese Checkpoint fue cumplido. Al llegar 
a la fecha del tercer Checkpoint, la cátedra verificará en el repositorio tanto la existencia de los 
Tags como el código que fue incluído en él. **No cumplir con los requisitos de por lo menos
dos de los tres checkpoints será motivo de desaprobación del Trabajo Práctico**.

## Entrega final

Determina la aprobación del trabajo práctico, la misma constará de tres instancias pudiendo presentarse a cualquiera de ellas y/o a todas en caso de que el grupo así lo requiera para su aprobación.

### Características de la entrega

- Para la evaluación, el grupo obtendrá su código fuente descargando la última
  versión disponible de su repositorio.

- Será responsabilidad del grupo la obtención y descarga de todas las
  **dependencias** requeridas para el correcto funcionamiento del práctico.

- La evaluación de los requerimientos se realizará en las **máquinas virtuales
  sin interfaz gráfica proporcionadas por la Cátedra**, que se encontrarán
  instaladas en el laboratorio de Sistemas.

- La entrega podrá ser aprobada o desaprobada, en el primer caso permitiendo al
  grupo rendir el coloquio, mientras que en el segundo caso el grupo deberá
  volver a presentarse en alguna de las instancias otras instancias de entrega posteriores.

- A partir del momento en que el código fuente haya sido descargado sobre cada
  máquina y el ayudante haya establecido al grupo los parámetros de
  configuración para iniciar la prueba, el grupo contará con un tiempo límite
  pre-establecido para configurar su sistema. En caso de extenderse del tiempo
  estipulado y no resultar posible dar inicio a la evaluación, el grupo no podrá
  ser evaluado, considerándose la entrega como desaprobada.

- Todos los integrantes del grupo deberán participar de la configuración del
  sistema y conocer el procedimiento de start-up del sistema y de cualquiera de
  sus componentes.

### Requisitos para la inscripción a la entrega final

- Haber cumplido y pasado el Checkpoint de Control Obligatorio
- Cumplir con todos los requerimientos **técnicos** y **funcionales**
  especificados en el enunciado.
- Comprender los conceptos técnicos estrictamente relacionados con la teoría de
  los sistemas operativos vistos a lo largo de la cursada. Por ejemplo: memoria
  compartida, mecanismos de comunicación interproceso, sincronización de
  procesos, planificación, etc.

### Procedimiento de inscripción

- Cualquier integrante del grupo podrá ingresar al
  [Sistema de Inscripciones](https://faq.utnso.com.ar/inscripciones) y deberá
  indicar la franja horaria en que el grupo pueda presentarse.

- El grupo luego recibirá la fecha y horario estimado de evaluación. Los mismos
  se asignarán en base a la cantidad de grupos inscriptos. La inscripción
  cerrará el día anterior a la fecha de entrega a las **20:00hs**.

- El día de la evaluación, el grupo deberá notificar su llegada a los ayudantes
  cuando todos los integrantes se encuentren presentes.

### Etapas de la Evaluación

Ambas etapas de evaluación son de carácter
obligatorio y presencial debiendo ser tomadas con la seriedad que un examen debe
tener.

**Ambas instancias deberán estar aprobadas** para aprobar el
trabajo práctico.

#### Evaluación práctica

Consiste en la evaluación exhaustiva del sistema desarrollado, validando que
los requerimientos declarados en la especificación del trabajo práctico sean
satisfechos adecuadamente. La misma será realizada por uno o más ayudantes. En caso de no ser aprobada,
el grupo podrá inscribirse a la siguiente instancia de recuperación, si la hubiera.

El **tiempo de despliegue y configuración** en el laboratorio para comenzar la prueba es de **15 minutos como máximo**. 
Pasado ese tiempo, el grupo se dará como desaprobado.

Durante las últimas 2 (dos) semanas antes de la fecha de la evaluación práctica
se comunicará un documento de pruebas tentativas a realizarse durante la
misma. Sin embargo, el mismo será de carácter informativo
solamente, pudiendo cambiar el formato de evaluación de acuerdo a cómo sea
considerado por los evaluadores.

#### Coloquio

Consistirá en una charla con uno o más docentes de la materia, orientada a:

- Comprobar el grado de participación de cada uno de los integrantes del grupo
  en el desarrollo del sistema.
- Verificar los conocimientos adquiridos a lo largo del cuatrimestre.
- Determinar los conceptos de diseño y los conceptos teóricos de sistemas
  operativos aplicados al desarrollo del Trabajo Práctico.
- Conocer y debatir sobre las herramientas provistas por el sistema operativo
  que el alumno utilizó para resolver la problemática planteada así como también
  las alternativas descartadas.

Dado que tanto los conocimientos obtenidos como las competencias desarrolladas
solamente pueden manifestarse a partir de la experiencia adquirida en el trabajo
continuo a lo largo de todo el cuatrimestre, y considerando que el coloquio
solamente puede realizarse al aprobar la evaluación práctica, el mismo carece de
instancia de recuperación.

### Recomendaciones para la entrega final

En base a la experiencia obtenida en cuatrimestres anteriores, se recomienda a
los grupos:

1. Controlar que la última versión de su código se encuentra subida en el
   repositorio del grupo. Durante las entregas, el grupo trabajará únicamente
   con el código que se encuentre allí.

2. Es importante que el grupo valide con los ayudantes las decisiones de diseño y
   criterios utilizados para la implementación del trabajo práctico. En casos
   particulares puede que se les solicite que lleven esto impreso y para ser
   tomado en cuenta durante la evaluación del TP y el coloquio.

3. Validar el funcionamiento del trabajo práctico en las máquinas virtuales de
   prueba en el laboratorio de Sistemas, previamente restauradas al último
   SNAPSHOT provisto por la Cátedra.

4. Debido a que el día de la entrega existe un tiempo establecido para la puesta
   en marcha del sistema es importante concurrir con **al menos un** archivo de
   configuración previamente creado.

## Aclaraciones sobre el desarrollo

El desarrollo de las funcionalidades del trabajo práctico debe ser codificado
íntegramente utilizando el lenguaje de programación C y, cada uno de los
programas que lo componen deben poder ser compilados utilizando el comando GCC.
Sin embargo, es posible utilizar makefiles para automatizar el proceso de
compilación y deploy del trabajo práctico.

A excepción de la
[Commons Library](https://github.com/sisoputnfrba/so-commons-library) y otras
bibliotecas o herramientas desarrolladas por la cátedra, **no** está permitido
que el código que compone el trabajo práctico utilice bibliotecas de terceros
que no hayan sido instaladas previamente por la cátedra en las máquinas
virtuales provistas para el desarrollo y pruebas del mismo.

<br><br>

[^1]:
    Solo está permitido utilizar bibliotecas externas que la Cátedra autorice. A
    menos que se indique lo contrario, el alumno deberá implementar por sus
    propios medios la funcionalidad que se requiera.

[^2]: No será necesario imprimir la planilla de los integrantes
