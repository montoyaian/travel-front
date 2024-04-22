# Use the official Node.js 16 image as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lighter weight image for the production build
FROM node:16-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy only the build output from the previous stage
COPY --from=build /app/build ./build

# Install serve to serve the static site
RUN npm install -g serve

EXPOSE 8080

CMD ["npm", "run", "start"]
