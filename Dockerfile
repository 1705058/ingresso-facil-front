# Imagem de Origem
FROM node:16-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
COPY package-lock.json ./
RUN npm install --silent
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

# Inicializa a aplicação
CMD ["npm", "start"]