FROM node:14-buster-slim as builder

WORKDIR /colorgame
COPY package.json /colorgame
COPY yarn.lock /colorgame

RUN yarn

COPY . /colorgame
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=builder /colorgame/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
