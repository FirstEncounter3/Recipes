## Ручной запуск и установка
git clone https://github.com/FirstEncounter3/Recipes.git

## Backend
1. Зайдите в папку backend
2. Откройте терминал и выполните команду python -m venv venv для создания виртуального окружения
3. Активируйте виртуальное окружение командой из вашей ОС, например, для Windows ./venv/Scripts/Activate
4. Установите зависимости в виртуальное окружение командой pip install -r "requirements.txt"
5. Зайдите в папку fullstack_web_app командой cd fullstack_web_app
6. Запустите backend сервер python manage.py runserver

## Frontend
1. Зайдите в папку frontend
2. Выполните установку зависимостей npm install
3. Запустите webpack-dev-server командой npm run start. Страница приложения автоматически откроется

## Запуск при помощи Docker

# Backend
1. Зайдите в папку backend и откройте в ней терминал
2. Выполните docker build -t backend .
3. Выполните docker run -p 8000:8000 backend

# Frontend
1. Зайдите в папку frontend и откройте в ней терминал
2. Выполните docker build -t frontend .
3. Выполните docker run -p 8080:8080 frontend

## Запуск при помощи Dockercompose 
В разработке
