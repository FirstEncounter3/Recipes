FROM node:20.12 

WORKDIR /recipes_app/frontend

COPY package*.json ./

RUN npm install
RUN npm install -g webpack-dev-server
RUN npm install -g webpack-cli

COPY . .

EXPOSE 8080

CMD ["npm", "run", "docker-run"]