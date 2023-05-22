FROM node:16.0.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ls ; yarn migration:run ; yarn deploy:localhost