# Docker cheatSheet

## Run a container
`docker run -p 27017:27017 --name test01 mongo`

## Create a volume
`docker volume create myVolumeName`

## Attach a volume to a container
`docker run -v myVolumeName:/data/db -p 27017:27017 --name test02 mongo`

## Build image from a dockerfile
- Make a new empty directory
- Create a "Dockerfile" (with exact name) in it
- Example content for create a mongoDB database based on an ubuntu system: 
```dokcer
FROM ubuntu:bionic
RUN apt-get update
RUN apt-get install gnupg -y
RUN apt-get install sudo -y
RUN apt-get install wget -y
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
RUN sudo apt-get update
RUN sudo apt-get install -y mongodb-org
RUN mkdir -p /data/db
EXPOSE 27017
ENTRYPOINT usr/bin/mongod --bind_ip 0.0.0.0
```
- `docker build -t ubuntu/mongo9 .` crated a new image named ubuntu/mongo9
- `docker run -d --rm -p 27017:27017 -t ubuntu/mongo9` new image is running in 
background because we added the -d switch
  
[Optional] login to the server:  
`docker ps` look at the name of container
`docker exec -it <name> bash` enter to the bash
