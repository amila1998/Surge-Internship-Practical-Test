FROM node:14.16.0-alpine3.10

WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qyg react-router-dom@5.2.0
RUN npm install -qy

COPY . .

CMD ["npm" "start"]