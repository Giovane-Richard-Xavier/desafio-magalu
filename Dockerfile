FROM node:20-slim

RUN apt-get update && apt-get install -y openssl bash

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

#  DEBUG COMPLETO
RUN npm run build

#  MOSTRA SE O DIST EXISTE
RUN echo "LISTANDO DIST..." && ls -la dist || echo "DIST NÃO EXISTE"

RUN chmod +x .docker/entrypoint.sh

ENTRYPOINT ["/home/node/app/.docker/entrypoint.sh"]