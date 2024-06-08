# frontend/Dockerfile

# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies using the package.json file.
COPY package*.json ./
RUN npm install

# Copy the local code to the container image.
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npx", "serve", "-s", "build"]
