FROM node:16.14.0-alpine3.14

RUN apk update && apk add git

USER node

WORKDIR /home/node

COPY package.json yarn.lock ./

RUN yarn install

EXPOSE 5173

ENTRYPOINT [ "yarn", "dev", "--host" ]
