# Dockerize-Activity

Using an EC2 run a url shortener flask app with gunicorn and nginx then test it with cypress all using docker containers. 

Runs best on a T3 micro

# Notes

- Gunicorn is on port 8000 on the docker network web, not reachable on the host machine. 

- Nginx is on the docker network web and can reach Gunicorn so it reverse proxys it to port 80. 

- Nginx is running on port 80 and uses the host machines port 80 to make the app reachable on the internet. 

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

## Get the specific logs

```
sudo docker compose logs cypress | sudo tee cypress/test-logs/cypress-run.log > /dev/null 2>&1
```

# One Liner 

```
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && git clone https://github.com/RichardDeodutt/Dockerize-Activity.git && cd Dockerize-Activity && mkdir cypress/test-reports && mkdir cypress/test-logs && git pull && sudo docker compose up --build && sudo docker compose logs cypress | sudo tee cypress/test-logs/cypress-run.log > /dev/null 2>&1
```

# Rerun Cypress

```
git pull && sudo docker compose up --build && sudo docker compose logs cypress | sudo tee cypress/test-logs/cypress-run.log > /dev/null 2>&1
```