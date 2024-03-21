FROM node:20-alpine

ARG USER
ARG UID
ARG GID

USER root

RUN apk add --no-cache git

RUN deluser --remove-home node && \
    addgroup -g $GID $USER && \
    adduser -u $UID -G $USER -D $USER

USER $USER

WORKDIR /app

COPY --chown=$USER:$USER package.json yarn.lock ./

RUN yarn install

EXPOSE 5173

ENTRYPOINT [ "yarn", "dev", "--host" ]
