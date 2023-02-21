FROM node:16.14.0 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:16.14.0-alpine

RUN npm install -g http-server

WORKDIR /app

COPY --from=builder /app/docs/.vitepress/dist/ dist/

EXPOSE 8080

ENTRYPOINT [ "http-server", "-p8080", "dist"]
