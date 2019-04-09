FROM ubuntu

RUN apt-get update

RUN apt install nodejs -y

RUN apt install npm -y

WORKDIR /usr/src/app

COPY . .

EXPOSE 4200

