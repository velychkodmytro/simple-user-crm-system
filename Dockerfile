FROM node:12-alpine
WORKDIR /simple-user-crm-system
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]