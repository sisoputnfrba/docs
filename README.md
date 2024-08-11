# so-docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/40f7a7b5-ca78-4730-815d-c20b1c354db3/deploy-status)](https://app.netlify.com/sites/utnso-docs/deploys)

Este repo contiene todas las guías de la cátedra de Sistemas Operativos - UTN.FRBA.

## Dependencias

- Node.js v20

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
