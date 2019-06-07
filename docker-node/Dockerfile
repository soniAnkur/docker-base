FROM node:10-alpine

# dont runas root user as if someone manages to get into the container, 
# at best they are user nodejs which does not have root permissions, 
# and does not exist on the host 
# best practice to set up a user and not run as root

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY . /app

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]