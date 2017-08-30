FROM cloud.canister.io:5000/sunloving/angular-base:v13.master as build-static
WORKDIR /static-build/
COPY . .
RUN npm install
RUN ng build --prod

FROM nginx:latest
COPY --from=build-static /static-build/dist /usr/share/nginx/html
