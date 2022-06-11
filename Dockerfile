# Imagem de Origem
FROM node:16
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
# COPY package.json /app/package.json
# COPY package-lock.json ./
# RUN npm install --silent
# RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
# RUN npm install react-scripts@3.4.1 -g --silent

# COPY . ./

# # Inicializa a aplicação
# CMD ["npm", "start"]


# Install nginx
RUN apt-get update
RUN apt-get install nginx -y
COPY nginx.conf /etc/nginx/sites-available/default
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf


# install and cache app dependencies
COPY ./ /app/
RUN yarn install
RUN ls
RUN yarn 
RUN yarn build
RUN cp -R build/* /var/www/html/

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
# start app
CMD ["nginx"]