FROM node:14-alpine
WORKDIR /opt/app
# Устанавливаем зависимости для sharp и node-gyp
RUN apk add --no-cache \
    ca-certificates \
    python3 \
    make \
    g++ \
    vips-dev \
    && update-ca-certificates
    
ADD package.json package.json
ENV NODE_ENV=development
RUN npm install && npm install --save-dev @types/mongoose@5.10.3
ADD . .
RUN npm run build
RUN npm prune --production
CMD ["node", "./dist/main.js"]