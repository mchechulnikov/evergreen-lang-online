FROM node:8.4 as build
WORKDIR /static-build/
RUN npm install -g @angular/cli
COPY . .
RUN ng build --prod

FROM nginx:latest
COPY --from=build /static-build/dist /usr/share/nginx/html
