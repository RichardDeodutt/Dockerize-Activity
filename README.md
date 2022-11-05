# Dockerize-Activity

Using an EC2 run a url shortener flask app with gunicorn and nginx then test it with cypress all using docker containers. 

Runs well on a T3 micro but it isn't free tier

# Notes

- Gunicorn is on port 8000 on the docker network web, not reachable on the host machine. 

- Nginx is on the docker network web and can reach Gunicorn so it reverse proxys it to port 80. 

- Nginx is running on port 80 maps to the host machine on port 80 to make the app reachable on the internet. 

- Cypress tests port 80 on the docker network web for nginx.

- Cypress Uses a shared folder 'cypress/test-reports' as a volume.

- The cypress test report is in the folder 'cypress/test-reports'

- The logs of the cypress test should be in the folder 'cypress/test-logs/'

## Install Docker

```
curl -fsSL https://get.docker.com -o get-docker.sh
```

```
sudo sh get-docker.sh
```

## Get this Repo

```
git clone https://github.com/RichardDeodutt/Dockerize-Activity.git
```

```
cd Dockerize-Activity && mkdir cypress/test-reports && mkdir cypress/test-logs
```

## Docker compose Build

```
sudo docker compose up --build
```

When the cypress test is done press Ctrl + C to quit

## Read and get the logs

```
sudo docker compose logs cypress | sudo tee cypress/test-logs/cypress-run.log
```

## Get the logs

```
sudo docker compose logs cypress | sudo tee cypress/test-logs/cypress-run.log > /dev/null 2>&1
```

# One Liner which runs in the background

```
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && git clone https://github.com/RichardDeodutt/Dockerize-Activity.git && cd Dockerize-Activity && mkdir cypress/test-reports && mkdir cypress/test-logs && git pull && sudo docker compose up --build -d
```

# Take down running containers from compose

```
sudo docker compose down
```

# Rerun in the background

```
git pull && sudo docker compose down && sudo docker compose up --build -d
```

# Diagram

<p align="center">
<a href="https://github.com/RichardDeodutt/Dockerize-Activity/blob/main/images/Dockerize-Activity.drawio.png"><img src="https://github.com/RichardDeodutt/Dockerize-Activity/blob/main/images/Dockerize-Activity.drawio.png" />
</p>
