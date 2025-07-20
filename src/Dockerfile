# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Install the app dependencies
RUN npm install

# Build the Vite app for production
RUN npm run build

# Install a lightweight HTTP server to serve the static files
RUN npm install -g serve

# Expose port 5173 for Vite dev server or 8080 for serve
EXPOSE 8080

# Command to serve the build folder
CMD ["serve", "-s", "dist", "-l", "8080", "--single"]
