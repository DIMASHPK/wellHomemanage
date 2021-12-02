#  Dockerfile for Node Express Backend

FROM node:14.18-alpine

# Create App Directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 7777

CMD ["npm","run","start:dev"]