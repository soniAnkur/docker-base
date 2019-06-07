# docker-base

## Project contains barebones starter kits for docker 
It's a first step towards getting up and running in minutes with CI/CD.


### Prerequisites

Docker and some 🍺🍺

### For Node 

Please run the step of commands 

```
cd docker-node
docker build -t docker-node-soniankur .
docker run -p 9000:3000 docker-node-soniankur

```
Application should be running on port 9000 of your system - which is forwarding all the request to the node app running on port 3000 in docker container.

### For Python 

Please run the step of commands 

```
cd docker-py
docker build -t docker-py-soniankur .
docker run -p 9001:80 docker-py-soniankur

```
Application should be running on port 9001 of your system - which is forwarding all the request to the Pythion flask app running on port 80 in docker container.



