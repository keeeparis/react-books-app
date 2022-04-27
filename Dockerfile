FROM node:15.12.0

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]