FROM node:latest as node-build

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest as app-build

COPY --from=node-build /usr/src/app/dist/angularzijian /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

