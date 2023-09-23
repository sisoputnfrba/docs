FROM cgr.dev/chainguard/node:latest-dev

ARG UID
ARG GID

USER root

RUN apk update && apk add git

RUN addgroup -g $GID workspace && \
    adduser -u $UID -G workspace -s /bin/sh -D workspace

USER workspace

WORKDIR /home/workspace

COPY --chown=workspace:workspace package.json yarn.lock ./

RUN yarn install

EXPOSE 5173

ENTRYPOINT [ "yarn", "dev", "--host" ]
