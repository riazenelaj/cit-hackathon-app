FROM node:lts As development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:alpine3.15 As production

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps --omit=dev
COPY . .
COPY --from=development /usr/src/app/dist ./dist

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000

# Start the app
CMD npm run start:prod