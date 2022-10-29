FROM python:latest

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/kura-labs-org/kuralabs_deployment_4.git

RUN mv kuralabs_deployment_4 app

WORKDIR /app

RUN pip install -U pip

RUN pip install -r requirements.txt

RUN pip install gunicorn

RUN apt-get clean && apt-get autoclean

CMD python3 -m gunicorn -w 4 application:app -b 0.0.0.0:8000