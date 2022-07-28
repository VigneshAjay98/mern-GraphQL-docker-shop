FROM node

RUN mkdir -p /var/www/mern-shop

WORKDIR /var/www/mern-shop

COPY package*.json ./

COPY . .

RUN cd frontend \ 
    && npm install \
    && npm run build \
    && cd ..

RUN cd backend \ 
    && npm install \
    && cd ..

# RUN npm install && npm i -g nodemon

EXPOSE 5000

# CMD [ "npm", "run", "dev" ]
CMD [ "npm", "run", "server" ]