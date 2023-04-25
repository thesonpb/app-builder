# Use Node.js v14 as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY dist ./dist

RUN npm install -g serve

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "serve", "-s", "dist" ]
