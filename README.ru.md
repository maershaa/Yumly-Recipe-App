# 🍽️ Yumly — приложение для управления рецептами

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-6-DB7093?logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

<p align="center">
  <a href="https://maershaa.github.io/Yumly-Recipe-App/"><b>🚀 Live Demo</b></a>
</p>

_[Read this in English](./README.md)_

---

## 📖 О проекте

**Yumly** — одностраничное приложение (SPA) для создания, хранения и поиска кулинарных рецептов.

Проект создан как портфолио-работа, чтобы на практике отработать полноценный frontend-цикл: аутентификацию, защищённые роуты, CRUD-операции, загрузку изображений, фильтрацию/поиск и масштабируемую feature-based архитектуру — всё поверх настоящей базы данных, а не моковых данных.

Бэкенд полностью на **Supabase**: PostgreSQL, Auth, Storage и Row Level Security.

---

## ✨ Функциональность

**Без авторизации**

- Просмотр и поиск всех рецептов
- Фильтрация по тегам, кухне и категории
- Просмотр деталей рецепта (ингредиенты, шаги, время готовки, сложность)
- Светлая / тёмная тема
- Адаптивная вёрстка (мобильные устройства → десктоп)

**Аутентификация**

- Регистрация с подтверждением email
- Вход / выход
- Сохранение сессии (авто-восстановление после перезагрузки страницы)
- Защищённые и «только для гостей» роуты

**Для авторизованных пользователей**

- Создание, редактирование и удаление своих рецептов
- Многошаговая форма создания рецепта (инфо → ингредиенты → шаги → фото)
- Загрузка фотографии блюда
- Добавление/удаление рецептов в **избранное**
- Управление своей коллекцией рецептов («Мои рецепты»)
- Автоматический расчёт сложности рецепта по времени готовки
- Валидация форм на клиенте с подсказками об ошибках

---

## 🛠 Технологии

**Frontend**

- React 19
- Redux Toolkit — глобальное состояние (auth, recipes)
- React Router v7 — маршрутизация, защита приватных/публичных роутов
- Styled Components — тема (светлая/тёмная), стилизация компонентов
- Vite — сборка и dev-сервер
- React Icons, Sonner (тост-уведомления), React Spinners

**Backend (BaaS)**

- Supabase
  - PostgreSQL — хранение данных
  - Supabase Auth — регистрация, вход, подтверждение email, сессии
  - Supabase Storage — загрузка изображений рецептов
  - Row Level Security (RLS) — пользователь может редактировать только свои рецепты

**Инструменты**

- ESLint (flat config) — контроль качества кода
- GitHub Pages + `gh-pages` — деплой

---

## 🏗 Архитектура

Проект построен по принципу **feature-based архитектуры**: код группируется по бизнес-домену (auth, recipes, favorites), а не по типу файлов.

```
src
│
├── app                  # Точка входа, провайдеры, Redux store
│   ├── providers
│   └── redux
│       ├── auth
│       └── recipes
│
├── assets               # Изображения, глобальные стили, токены темы
│
├── components            # Переиспользуемые, независимые от фичей блоки
│   ├── layout            # Header, Footer, каркас навигации
│   ├── navigation         # Гарды роутов (Private/Public route)
│   └── ui                # Кнопки, инпуты, лоадеры, скелетоны и т.д.
│
├── context               # Контекст темы (светлая/тёмная)
│
├── features
│   ├── auth               # Формы логина/регистрации, валидация
│   ├── favorites          # API-запросы для избранного
│   └── recipes            # API рецептов, формы, карточки, секции главной
│       ├── api
│       ├── components
│       ├── constants
│       ├── helpers
│       └── utils
│
├── pages                  # Компоненты уровня страниц (роутов)
└── supabase               # Клиент Supabase
```

Такая структура держит бизнес-логику изолированной по доменам, упрощает поиск связанного кода и лучше масштабируется по мере роста приложения, чем классическое деление по типу файлов (`components/`, `hooks/`, `utils/`).

---

## 🗄 Модель данных

Каждый рецепт в Supabase содержит:

- название, описание, изображение
- кухню, категорию, теги
- сложность _(рассчитывается автоматически по времени готовки)_
- время готовки, количество порций
- список ингредиентов (с количеством и единицей измерения)
- пошаговую инструкцию приготовления
- автора (привязан к авторизованному пользователю)

Политики Row Level Security гарантируют, что пользователь может редактировать или удалять только свои рецепты, при этом все рецепты остаются доступны для чтения публично.

---

## 📦 Установка

```bash
git clone https://github.com/Maershaa/Yumly-Recipe-App.git
cd Yumly-Recipe-App
npm install
```

Создайте файл `.env` в корне проекта:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Запустите dev-сервер:

```bash
npm run dev
```

---

## 📜 Доступные скрипты

| Скрипт            | Описание                             |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Запускает локальный dev-сервер       |
| `npm run build`   | Собирает production-версию           |
| `npm run preview` | Локально запускает production-сборку |
| `npm run lint`    | Запускает ESLint                     |
| `npm run deploy`  | Деплоит папку `dist` на GitHub Pages |

---

## 🔮 Возможные улучшения

- Миграция на TypeScript
- Пагинация / бесконечная прокрутка списков рецептов
- Профили пользователей и публичные страницы авторов
- Комментарии и рейтинги
- Подборки рецептов
- Интернационализация (i18n)
- Юнит- и интеграционные тесты

---

## 👩‍💻 Автор

**Valeria** — Frontend Developer

GitHub: [github.com/Maershaa](https://github.com/Maershaa)

---

## 📄 Лицензия

Распространяется по лицензии MIT.
