# Use the official Cypress image as the base image
FROM cypress/base:latest

# Set the working directory
WORKDIR /e2e

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Run Cypress tests
CMD ["npx", "cypress", "run"]
