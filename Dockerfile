deeellemw
erstelle# syntax=docker/dockerfile:1

# ---- Build Stage ----
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
# Using npm ci for faster, more reliable builds in CI environments
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# ---- Production Stage ----
FROM node:22-alpine

# Install serve to run the static files
RUN npm install -g serve@latest

WORKDIR /app

# Copy only the build output from the build stage
COPY --from=build /app/build ./build

EXPOSE 3000

CMD [ "serve", "-s", "build" ]