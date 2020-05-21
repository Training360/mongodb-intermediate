############################################################
# Dockerfile to build MongoDB container images
# Based on Ubuntu
############################################################

# Set the base image to Ubuntu
FROM ubuntu:bionic

# File Author / Maintainer
# MAINTAINER Cserkó József

# Update the repository sources list
RUN apt-get update
RUN apt-get install gnupg -y
RUN apt-get install sudo -y
RUN apt-get install wget -y

################## BEGIN INSTALLATION ######################
# Install MongoDB Following the Instructions at MongoDB Docs
# Ref: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
RUN sudo apt-get update
RUN sudo apt-get install -y mongodb-org

# Create data directory for mongoDB.
RUN mkdir -p /data/db

##################### INSTALLATION END #####################

# Expose the default port
EXPOSE 27017

# Default port to execute the entrypoint (MongoDB)
# CMD ["--port 27017"]
# CMD ["--bind_ip 0.0.0.0"]

# Set default container command
ENTRYPOINT usr/bin/mongod --bind_ip 0.0.0.0