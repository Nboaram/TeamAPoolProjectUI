FROM node:12-alpine as build
WORKDIR /build
COPY . . 
RUN NG_CLI_ANALYTICS=ci npm -g install @angular/cli
RUN NG_CLI_ANALYTICS=ci npm install
RUN ng build
#///////////////////
# NEW STAGE
#///////////////////
FROM nginx:alpine
WORKDIR /app
COPY --from=build /build/dist/TeamAPoolProjectUI /app/angularproject
COPY nginx.conf /etc/nginx/nginx.conf

