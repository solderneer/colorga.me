FROM node:8-jessie as builder

WORKDIR /colorgame
COPY package.json /colorgame

RUN yarn

COPY . /colorgame
RUN yarn build

FROM kyma/docker-nginx
COPY --from=builder /colorgame/dist /var/www
CMD 'nginx'

