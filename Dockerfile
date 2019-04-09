FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --silent

COPY . .

EXPOSE 4800

CMD ["npm", "start"]
