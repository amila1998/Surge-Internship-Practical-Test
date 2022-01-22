FROM node:14.17.3
RUN mkdir -p /node-app
WORKDIR /node-app

COPY ./package*.json //node-app
RUN npm install
COPY . /node-app

EXPOSE 8000

CMD npm run start

