FROM node:20-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prisma:migrate

EXPOSE 3000

CMD [ "npm", "run", "dev" ]