FROM node:20

COPY . /app

WORKDIR /app

RUN npm install && apt-get update && apt-get install -y sqlite3

CMD [ "npm", "start" ]

EXPOSE 3000