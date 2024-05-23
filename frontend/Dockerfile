FROM node:20.12 

WORKDIR /recipes_app/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "docker-run"]