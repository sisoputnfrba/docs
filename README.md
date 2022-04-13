# so-docs

Guías de la cátedra de Sistemas Operativos - UTN.FRBA.

## Requisitos

- Node.js v16

## Levantar el proyecto en local

```bash
npm run dev
```

## Probar despliegue en Docker

- Buildear la imagen y ejecutar el container:

```bash
make PORT=8080
```

- Solo buildear la imagen:

```bash
make build
```

- Solo ejecutar el container:

```bash
make run PORT=8080
```
- Stoppear el container:

```bash
make stop
```

- Borrar la imagen:

```bash
make clean
```

- Abrir una consola interactiva en el container:

```bash
make exec
```

- Escuchar los logs del container (se puede salir con `Ctrl` + `c`):

```bash
make logs
```
