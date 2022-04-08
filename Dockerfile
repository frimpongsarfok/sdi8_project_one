FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm upgrade svgo
RUN npm install react-scripts@latest
RUN npm install
COPY . .
CMD ["npm", "start"]