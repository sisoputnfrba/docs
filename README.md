# so-docs

Este repo contiene todas las guías de la cátedra de Sistemas Operativos - UTN.FRBA.

## Dependencias

- Node.js v16

## Levantar el proyecto en local

```bash
npm run dev
```

## Probar despliegue en Docker

- Buildear la imagen e iniciar el container:

```bash
make PORT=8080
```

- Solo buildear la imagen:

```bash
make build
```

- Solo iniciar el container:

```bash
make run PORT=8080
```
- Detener el container:

```bash
make stop
```

- Borrar la imagen:

```bash
make clean
```

- Abrir una consola interactiva dentro del container:

```bash
make exec
```

- Escuchar los logs del container (se puede salir con `Ctrl` + `c`):

```bash
make logs
```
