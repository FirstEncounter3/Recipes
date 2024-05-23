FROM python:3.12

WORKDIR /recipes_app/backend
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000

WORKDIR /recipes_app/backend/fullstack_web_app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]