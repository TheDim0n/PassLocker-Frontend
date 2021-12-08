FROM node:16 AS build

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm ci

COPY angular.json tsconfig*.json ./
COPY ./src ./src

RUN npm run build-prod

FROM nginx:latest

RUN mkdir /app

COPY --from=build /src/dist/PassLocker-Frontend /app
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
