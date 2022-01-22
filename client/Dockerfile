FROM node:14.16.0-alpine3.10

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -qyg react-router-dom@5.2.0
RUN npm install -qy

COPY . .
# Run the "dev" script in package.json
CMD ["npm", "start"]
