# Normas del Trabajo Práctico

## Introducción

La parte práctica de la materia estará compuesta por un trabajo práctico grupal
que gradualmente guiará el aprendizaje del alumno a lo largo del cuatrimestre.
Se apunta a que el alumno desarrolle conocimientos de investigación, diseño e
implementación relacionados con los sistemas operativos.

El mismo consistirá en el desarrollo de una aplicación, cuyos componentes se
ejecutarán sobre una o diversas plataformas, teniendo como objetivo permitir al
alumno afianzar distintos conceptos teóricos vistos a lo largo de la cursada.

El trabajo práctico será evaluado en una instancia práctica y grupal, y
posteriormente en una instancia individual (coloquio). El mismo se considerará
aprobado cuando ambas instancias hayan sido aprobadas.

## 1. Estructura del trabajo práctico grupal

La especificación del trabajo práctico estará compuesta por una serie de
**checkpoints**. Los mismos sirven como guía para el desarrollo de un sistema.
Cada uno de ellos representa un conjunto cohesivo de requerimientos que deberán
ser satisfechos para que, de manera evolutiva, se genere el sistema final. Son
evaluaciones, y como tales pueden ser aprobadas o no. La ausencia implicará la
desaprobación del checkpoint en cuestión.

### 1.1. Tipos de Checkpoint

#### Checkpoint

Los checkpoints serán una instancia parcial de verificación de avance con los
ayudantes designados. Los grupos deberán coordinar con al menos uno de sus
ayudantes un espacio en el que mostrar su avance, a fin de que los ayudantes
puedan proveer feedback y consejos sobre el estado del grupo y el trabajo
realizado. También podrán aprovechar para este fin los horarios de consulta
dispuestos los sábados.

La fecha publicada del checkpoint es la fecha **límite** para realizar la
presentación. El ayudante evaluador será el encargado de informar si la
instancia fue aprobada.

#### Checkpoint de laboratorio

La revisión del checkpoint, permitirá que el grupo exponga sus avances y que el
ayudante brinde un feedback del desarrollo realizado hasta el momento y
responder consultas sobre futuros checkpoints. Se realizará en un laboratorio,
para que el grupo pueda participar de una experiencia similar a una evaluación
final.

La fecha se encuentra definida en el enunciado del Trabajo Práctico. Se
informará con anticipación el lugar a través del Campus Virtual y
[el blog](https://www.utnso.com.ar/).

### 1.2. Características de la forma entrega

- Para la evaluación, el grupo obtendrá su código fuente descargando la última
  versión disponible de su repositorio.

- Será responsabilidad del grupo la obtención y descarga de todas las
  **dependencias** requeridas para el correcto funcionamiento del práctico.

- La evaluación de los requerimientos se realizará en las **máquinas virtuales
  sin interfaz gráfica proporcionadas por la Cátedra**, que se encontrarán
  instaladas en el laboratorio de sistemas.

### 1.3. Requisitos para la aceptación de la entrega

- Contener un archivo makefile que ejecute correctamente.
- Que no se produzcan errores de compilación.
- Que no existan archivos ejecutables ni objetos[^1].
- Haber cumplido con los requerimientos técnicos y funcionales indicados en el
  enunciado del trabajo práctico.

### 1.4. Entrega final

Utilizada para determinar la aprobación del trabajo práctico. Esta tendrá dos
instancias de recuperatorio.

#### Características de la entrega

- Posee las características del checkpoint de laboratorio, con la diferencia que
  la entrega podrá ser aprobada o desaprobada, en el primer caso permitiendo al
  grupo rendir el coloquio, mientras que en el segundo caso el grupo deberá
  volver a presentarse en alguna de las instancias de recuperatorio posteriores.

- No es necesario haber aprobado los checkpoints para aprobar la entrega final,
  pero estos influirán en la nota final del trabajo práctico.

- A partir del momento en que el código fuente haya sido descargado sobre cada
  máquina y el ayudante haya establecido al grupo los parámetros de
  configuración para iniciar la prueba, el grupo contará con un tiempo límite
  pre-establecido para configurar su sistema. En caso de extenderse del tiempo
  estipulado y no resultar posible dar inicio a la evaluación, el grupo no podrá
  ser evaluado, considerándose la entrega como desaprobada.

- Todos los integrantes del grupo deberán participar de la configuración del
  sistema y conocer el procedimiento de start-up del sistema y de cualquiera de
  sus componentes

#### Requisitos para la inscripción a la entrega final

- Haber asistido al **Checkpoint de Laboratorio**.
- Cumplir con todos los requerimientos **técnicos** y **funcionales**
  especificados en el enunciado.
- Comprender los conceptos técnicos estrictamente relacionados con la teoría de
  los sistemas operativos vistos a lo largo de la cursada. Por ejemplo: memoria
  compartida, mecanismos de comunicación interproceso, sincronización de
  procesos, planificación, etc.

#### Procedimiento de inscripción

- El alumno representante del grupo deberá ingresar al
  [Sistema de Inscripciones](https://inscripciones.utnso.com.ar) y deberá
  indicar la franja horaria en que el grupo pueda presentarse.

- El grupo luego recibirá la fecha y horario estimado de evaluación. Los mismos
  se asignarán en base a la cantidad de grupos inscriptos. La inscripción
  cerrará el día anterior a la fecha de entrega a las **18:00hs**.

- El día de evaluación, el grupo deberá notificar su llegada a los ayudantes
  cuando todos los integrantes se encuentren presentes.

#### Etapas de la Evaluación

Se les recuerda a los alumnos que ambas etapas de evaluación son de carácter
obligatorio y presencial debiendo ser tomadas con la seriedad que un examen debe
tener.

**Ambas instancias deberán estar aprobadas** para que el alumno apruebe el
trabajo práctico.

##### Evaluación práctica

Consistirá en la evaluación exhaustiva del sistema desarrollado, validando que
los requerimientos declarados en la especificación del trabajo práctico sean
satisfechos adecuadamente. La misma será realizada por un ayudante, que no
necesariamente será el que el grupo tenga asignado. En caso de no ser aprobada,
el grupo podrá inscribirse a la siguiente instancia de recuperación, si la
hubiera.

Durante las últimas 2 (dos) semanas antes de la fecha de la evaluación práctica
se comunicará un documento de pruebas tentativas a realizarse durante la
evaluación práctica. Sin embargo, el mismo será de carácter informativo
solamente, pudiendo cambiar el formato de evaluación de acuerdo a cómo sea
considerado por el evaluador.

##### Coloquio

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

2. Es importante que el grupo valide con su ayudante las decisiones de diseño y
   criterios utilizados para la implementación del trabajo práctico. En casos
   particulares puede que este les solicite que lleven esto impreso y podrá ser
   tomado en cuenta durante la evaluación del TP y el coloquio.

3. Validar el funcionamiento del trabajo práctico en las máquinas virtuales de
   prueba en el laboratorio de la facultad, previamente restauradas al último
   SNAPSHOT provisto por la Cátedra.

4. Debido a que el día de la entrega existe un tiempo establecido para la puesta
   en marcha del sistema es importante concurrir con **al menos un** archivo de
   configuración previamente creado.

### Aclaraciones sobre el desarrollo

El desarrollo de las funcionalidades del trabajo práctico debe ser codificado
íntegramente utilizando el lenguaje de programación C y, cada uno de los
programas que lo componen deben poder ser compilados utilizando el comando GCC.
Sin embargo, es posible utilizar makefiles para automatizar el proceso de
compilación y deploy del trabajo práctico. Siguiendo esta línea se sugiere
utilizar makefiles creados por herramientas de desarrollo, como el IDE Eclipse,
a fin de simplificar las tareas.

A excepción de la
[Commons Library](https://github.com/sisoputnfrba/so-commons-library) y otras
bibliotecas o herramientas desarrolladas por la cátedra, **no** está permitido
que el código que compone el trabajo práctico utilice bibliotecas de terceros
que no hayan sido instaladas previamente por la cátedra en las máquinas
virtuales provistas para el desarrollo y pruebas del mismo.

## 2. Presentación oficial del trabajo práctico

Tanto la fecha como el horario de la presentación serán informados en el Campus
Virtual y mediante el [blog](https://www.utnso.com.ar/). Es obligatoria la
asistencia del grupo completo a dicha presentación, y se recomienda asistir a la
misma habiendo leído y discutido la especificación completa del trabajo.

## 3. Inscripción de grupos

El grupo conformado deberá ser **obligatoriamente** de 5 integrantes, pudiendo
ser los mismos alumnos de cualquier curso de la materia. En caso de no cumplir
con esta restricción la cátedra podrá asignar alumnos de manera tal de cumplir
con la misma.

Para realizar la inscripción al trabajo práctico el grupo deberá completar el
proceso de inscripción en el
[Sistema de Inscripciones](https://inscripciones.utnso.com.ar)[^2]. Transcurrida
aproximadamente una semana de la confirmación del grupo se le designará un
ayudante.

La fecha límite de inscripción de los alumnos y de los grupos será anunciada en
los medios de comunicación anteriormente mencionados.

Recomendamos acceder al issue titulado
[¿Buscás grupo / integrantes?](https://faq.utnso.com.ar/issue-grupos) para
contactar potenciales integrantes del grupo.

#### Cambios de Grupo

Podrá existir un período de cambios de grupo durante el desarrollo del trabajo
práctico, siendo el objetivo del mismo unir grupos que no alcancen la cantidad
de 5(cinco) integrantes debido a bajas de sus compañeros. Es menester aclarar,
que cada alumno poseerá **una única chance de cambiarse de grupo**.

La fecha de inicio de dicho período será anunciada debidamente mediante los
medios de comunicación oficiales. De la misma forma, será anunciada la fecha de
finalización de los cambios de grupos, siendo la misma cercana a la fecha del
Checkpoint Presencial, y la hora de finalización a las **18:00hs del mismo
día**.

Para pedir un cambio de grupo, la cátedra provee una
[herramienta](https://inscripciones.utnso.com.ar/cambio.php) en el sistema de
inscripciones mencionado anteriormente. Dicha petición realizará un aviso a
todas las partes interesadas, las cuales poseerán **72 horas** para objetar el
mismo a través de su ayudante asignado o
[inscripciones@utnso.com.ar](mailto:inscripciones@utnso.com.ar). Pasadas las 72
horas, se hará efectivo el cambio y se avisará a las partes interesadas.

Solamente se aceptarán cambios de grupo mediante dicha herramienta, con
excepción de casos particulares.

#### Baja de la materia

Ante los casos en el que un alumno decida no continuar la materia, es
responsabilidad los integrantes del grupo dar de baja a su compañero. La
modalidad de baja será la misma que para los cambios de grupos anteriormente
mencionada y deberá ser realizada mediante la misma herramienta o mediante un
mail a [inscripciones@utnso.com.ar](mailto:inscripciones@utnso.com.ar) con copia
a todos los integrantes del grupo (activos y a dar de baja).

## 4. Uso del Repositorio de Versionado

Con el objetivo de facilitar el desarrollo del trabajo en equipo y poder
realizar un seguimiento del trabajo de cada integrante del grupo, se utilizará
un repositorio alojado en el servidor GitHub.

Cada alumno deberá [crear una cuenta en GitHub](https://github.com/join), e
incluir su nombre de usuario en el sistema de inscripción.

Luego será la Cátedra quien cree un repositorio para el grupo y les asignará los
permisos de escritura a sus integrantes, y de lectura a sus ayudantes.

Finalmente, cuando todas las evaluaciones finalicen, se enviará un mail
indicando que todos los repositorios serán borrados para que el alumno pueda
bajarse una copia si así lo desea.

Es importante recalcar que **es OBLIGATORIO el uso del repositorio**. Si bien el
código se podrá traer en un pendrive para la fecha de la entrega por cuestiones
de practicidad, se verificará que los archivos del pendrive coincidan con los
del repositorio a la fecha de la evaluación.

Aquel grupo que no cumpla con este requisito no será evaluado.

## 5. Soporte

### Ayudantes

Cada grupo inscripto al trabajo tendrá dos ayudantes asignados, cuyo principal
objetivo será el de guiar a sus grupos durante el desarrollo del trabajo
práctico. Para ello, los mismos se encargaran de:

- Satisfacer, de manera oficial, consultas técnicas y teóricas relacionadas con
  el trabajo en los tiempos razonablemente preestablecidos entre los ayudantes y
  el grupo.
- Proporcionar feedback en los diferentes checkpoints.
- Alentar a los alumnos para que estos logren superar los desafíos planteados
  por el trabajo práctico.
- Guiar al grupo hacia una forma de trabajo responsable, respetando los grados
  de compromiso y participación adecuados, para así cumplir con los requisitos
  necesarios para la aprobación del TP.

Ante cualquier caso de irregularidad, es responsabilidad del alumno notificar
dicha situación, enviando un email a
[Adriano Filgueira](mailto:afilgueira@frba.utn.edu.ar) o
[Esteban Masoero](mailto:esigma5@gmail.com), en favor de solucionar la situación
lo más rápido posible.

### Contacto directo con los ayudantes

Las consultas relacionadas con temas puntuales de la implementación que está
llevando a cabo el grupo, ya sea problemas con el código o decisiones de diseño
basadas en su desarrollo, deben ser formuladas directamente a los ayudantes
asignados. Para estas situaciones se le facilitará al grupo sus casillas de
correo electrónico.

Los emails dirigidos hacia los ayudantes y sus respuestas serán enviados con
copia a todos los miembros del grupo y respetando el siguiente formato en el
asunto: **"[nombre del grupo] :: CONSULTA: TemaDeLaConsulta"**. Es importante
respetar esto ya que la gran mayoría de los ayudantes maneja filtros de mails.

### Soporte a través de los foros

El medio de comunicación oficial de la cátedra será el Campus Virtual, así como
el [blog de la cátedra](https://www.utnso.com.ar). Las notificaciones masivas se
realizarán a través de este medio, en el foro
[Cátedra - Novedades](https://aulasvirtuales.frba.utn.edu.ar/mod/forum/view.php?id=221441).

Además, existe un [foro](http://github.com/sisoputnfrba/foro) destinado a
consultas relacionadas con el desarrollo del TP. Todas las preguntas
relacionadas con dudas sobre el enunciado, ya sean técnicas o conceptuales,
temas relacionados con el lenguaje de programación C y sus bibliotecas, sobre
las máquinas virtuales o sobre los sistemas operativos instalados en ellas,
deben realizarse inicialmente a través de este medio.

Es importante recalcar que se recomienda que las consultas sean enviadas primero
al foro, y luego al ayudante. Esto surge del hecho que una consulta realizada en
el foro le llega a todos los alumnos que pueden o bien saber la respuesta o
tener la misma duda que la que fue consultada, así al momento de responder se
satisface la duda a más de uno, evitando la repetición de preguntas.

Si la pregunta no es respondida en un tiempo considerable se puede enviar al
ayudante, el cual luego responderá por el foro para dejar asentada la respuesta.

### Clases de consulta

Cuando la disponibilidad horaria lo permita, existirán clases de consulta en los
laboratorios de Sistemas de la facultad y en aulas de Campus. La fecha y hora de
las mismas podrán ser comunicadas oportunamente mediante el foro del Campus
Virtual o el [blog](https://www.utnso.com.ar), anunciando ayudantes presentes y
horarios de disponibilidad.

## 6. Régimen de Promoción

Existe un régimen de promoción de la materia, según la Ordenanza N°1549. Para la
promoción del alumno, además de los requerimientos de la parte teórica de la
materia, el mismo **deberá aprobar el trabajo práctico con una nota final de 8
(ocho) o superior en la instancia de coloquio**.

Cualquier alumno cuya nota final no supere el dicho valor no se encontrará en
condiciones de aprobar la materia por dicho régimen, incluso si se cumplimentan
los requerimientos de los parciales. En tal caso, la materia solamente se
encontrará regularizada.

## 7. Comunicación con la cátedra

La comunicación se hará a través del Campus Virtual, al cual es obligatorio
suscribirse, para recibir novedades u obtener apuntes útiles para el desarrollo
del trabajo práctico y de la cursada en general. Además, la cátedra cuenta con
un blog ya anteriormente mencionado, en el que también se comunicará novedades.

- [**Link al Campus Virtual**](https://www.utnso.com.ar/campusvirtual)
- [**Blog**](https://www.utnso.com.ar)
- [**Organización con repositorios**](https://github.com/sisoputnfrba)
- [**Aplicación para Android**](https://play.google.com/store/apps/details?id=com.utnso.contentmanager)

[^1]:
    Solo está permitido utilizar bibliotecas externas que la Cátedra autorice. A
    menos que se indique lo contrario, el alumno deberá implementar por sus
    propios medios la funcionalidad que se requiera.

[^2]: No será necesario imprimir la planilla de los integrantes
