FROM node:14-alpine AS build

ARG REACT_APP_APP_URL
ENV REACT_APP_APP_URL=$REACT_APP_APP_URL
ARG REACT_APP_ACCOUNT_COOKIE
ENV REACT_APP_ACCOUNT_COOKIE=$REACT_APP_ACCOUNT_COOKIE
ARG REACT_APP_ENV
ENV REACT_APP_ENV=$REACT_APP_ENV

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

# Production image, copy static files into directory nginx is serving
FROM nginx:1-alpine AS runner
WORKDIR /usr/share/nginx/html

COPY --from=build /app/build ./
