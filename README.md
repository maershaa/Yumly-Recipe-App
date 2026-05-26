npm create vite@latest . -- --template react
если вы хотите развернуть проект непосредственно в той папке, где вы сейчас находитесь (без создания подпапки), используйте точку . вместо имени проекта

npm install

git init
git add .
git commit -m "Initial commit: create project with Vite"
git branch -M main

Создаём репозиторий на GitHub

Связь локального репозитория с удалённым и отправка изменений

git remote add origin https://github.com/maershaa/Yumly-Recipe-App.git
git push -u origin main
