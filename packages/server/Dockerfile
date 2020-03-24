FROM node:alpine

#docker-compose run server bash Error: Cannot find module '/opt/server/bash'
#docker-compose run server sh 

COPY src /opt/server/src
COPY package.json /opt/server/package.json
COPY tsconfig.json /opt/server/tsconfig.json

WORKDIR /opt/server

RUN npm install --registry=http://registry.npm.taobao.org

EXPOSE 3000:3000