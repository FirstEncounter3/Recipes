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


## Запуск при помощи Dockercompose
1. Запустите приложение, выполнив команду docker-compose up в корневой директории проекта