# 🚀 Yumly — старт и настройка проекта

## 📦 Создание проекта (Vite + React)

```bash
npm create vite@latest . -- --template react
```

````

---

## 📥 Установка зависимостей

```bash
npm install
```

---

## 🧠 Инициализация Git

```bash
git init
git add .
git commit -m "Initial commit: create project with Vite"
git branch -M main
```

---

## 🌐 Подключение к GitHub

1. Создать репозиторий на GitHub

2. Связать локальный проект с удалённым:

```bash
git remote add origin https://github.com/maershaa/Yumly-Recipe-App.git
git push -u origin main
```

---

## ⚙️ Настройка Vite (GitHub Pages)

`vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/Yumly-Recipe-App/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

---

## 🧭 jsconfig.json / tsconfig.json

Для автоподсказок, перехода по импортам и поддержки алиасов в VS Code необходимо вручную создать файл `jsconfig.json` (или `tsconfig.json`, если используется TypeScript).

Без этого файла Vite будет работать нормально, но VS Code не будет понимать алиас `@` и не сможет автодополнять импорты.

---

### 📄 Содержимое файла

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

---

## 🚀 Деплой на GitHub Pages

### 📦 Установка gh-pages

```bash
npm install --save-dev gh-pages
```

---

### ⚙️ Добавить script в `package.json`

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

---

## 📤 Деплой

```bash
npm run build
npm run deploy
```

---

# 🔁 Работа с изменениями

## 📌 Обычный пуш

```bash
git status
git add .
git commit -m "feat: описание изменений"
git push
```

---

## 🌿 Создание новой ветки и пуш

```bash
git checkout -b feature/branch-name
git add .
git commit -m "feat: описание фичи"
git push -u origin feature/branch-name
```

---

## 🔀 Слияние ветки с main

```bash
git checkout main
git merge feature/branch-name
git push
```

---

# 🧠 Примечание

- `main` — основная стабильная ветка
- `feature/*` — ветки для новых фич
- Каждый логичный блок работы оформляй отдельным коммитом

```

---
```
````
