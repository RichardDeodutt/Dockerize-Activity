FROM python:latest

RUN apt-get update && apt-get install -y git curl nginx

RUN git clone https://github.com/kura-labs-org/kuralabs_deployment_4.git

RUN mv kuralabs_deployment_4 app

RUN pip install -U pip

RUN pip install -r app/requirements.txt

RUN pip install gunicorn

COPY ./nginx.config /etc/nginx/sites-enabled/default

RUN apt-get clean && apt-get autoclean

WORKDIR app

CMD python3 -m gunicorn -w 4 application:app -b 0.0.0.0 --daemon