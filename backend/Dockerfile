FROM python:3
 
RUN mkdir /taf-backend
WORKDIR /taf-backend
COPY ./ ./

RUN pip install -r ./requirements.txt
 
EXPOSE 8080

CMD ["python3", "./app.py"]