FROM ubuntu as build
WORKDIR /opt/ui
USER root
RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
COPY . . 
RUN NG_CLI_ANALYTICS=ci npm -g install @angular/cli
RUN NG_CLI_ANALYTICS=ci npm -g install
RUN npm build
#///////////////////
# NEW STAGE
#///////////////////
FROM nginx:alpine
WORKDIR /app
COPY --from=build /opt/ui/dist/TeamAPoolProjectUI /app/angularproject
COPY nginx.conf /etc/nginx/nginx.conf

