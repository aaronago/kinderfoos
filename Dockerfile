# Dockerfile

# Use node alpine as it's a small node image
FROM node:14.16.1-alpine3.10

# Create the directory on the node image 
# where our Next.js app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json /app

# Install dependencies in /app
RUN yarn install

RUN yarn add sharp

# Copy the rest of our Next.js folder into /app
COPY . /app

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 
CMD ["yarn", "dev"]

# RUN yarn install
# FROM node:12.18-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "yarn.lock", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]