FROM cgr.dev/chainguard/node:latest-dev

USER root

RUN apk update && apk add git

USER node

WORKDIR /home/node

COPY package.json yarn.lock ./

RUN yarn install

EXPOSE 5173

ENTRYPOINT [ "yarn", "dev", "--host" ]
