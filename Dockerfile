# Use official Node.js 14 image as base
FROM node:14

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your app runs
EXPOSE 8081

# Command to run your application
CMD ["node", "index.js"]
