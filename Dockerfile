FROM node:16.14.0 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/docs/.vitepress/dist/ ./

EXPOSE 80
