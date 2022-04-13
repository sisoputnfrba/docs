FROM node:16.14.0 as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

FROM node:16.14.0-alpine

RUN npm install -g http-server

WORKDIR /app

COPY --from=builder /app/docs/.vuepress/dist/ dist/

EXPOSE 8080

ENTRYPOINT [ "http-server", "-p8080", "dist"]
