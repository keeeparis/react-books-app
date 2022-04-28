FROM node:15.12.0

WORKDIR /app

ADD . .

ENV NODE_ENV=development

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]