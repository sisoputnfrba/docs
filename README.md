# so-docs

Este repo contiene todas las guías de la cátedra de Sistemas Operativos - UTN.FRBA.

## Dependencias

- Node.js v18

## Levantar el proyecto

- En local:
```bash
yarn dev
```
- Desde container:

```bash
make
```

En cualquiera de los dos casos se puede ingresar `q` para salir.

## Otros comandos útiles

- Buildear la imagen de Docker:

```bash
make build
```

- Iniciar el container sin buildear:

```bash
make run
```

- Borrar la imagen:

```bash
make clean
```

- Abrir una consola interactiva dentro del container:

```bash
make exec
```
