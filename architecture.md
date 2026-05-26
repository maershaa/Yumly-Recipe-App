# 🍽 Yumly

**Yumly** — это SPA-приложение для хранения, создания и управления кулинарными рецептами. Пользователи могут просматривать общую ленту рецептов, вести личную коллекцию, а также добавлять и редактировать собственные рецепты.

Проект демонстрирует работу с современным frontend-стеком: маршрутизация, авторизация, CRUD-операции и работа с server-state.

---

## 🚀 Основной функционал

### 🌍 Публичная часть

- Просмотр общей ленты рецептов
- Просмотр детальной страницы рецепта
- Регистрация пользователя
- Авторизация пользователя

### 🔐 Приватная часть

- Личный список рецептов пользователя
- Создание нового рецепта
- Редактирование и удаление своих рецептов

---

## 🧭 Страницы приложения

### 🌐 Public routes

- `/` — главная страница (редирект / лендинг)
- `/recipes` — общая лента рецептов
- `/recipes/:id` — детальная страница рецепта
- `/auth/login` — вход
- `/auth/register` — регистрация

### 🔒 Private routes

- `/my-recipes` — мои рецепты
- `/recipes/new` — создание рецепта
- `/my-recipes/:id` — просмотр / редактирование рецепта

---

## 🍲 Сущности приложения

### 👤 User

```ts
{
  id: string;
  email: string;
  token: string;
}
```

````

### 🍽 Recipe

```ts
{
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image?: string;
  authorId: string;
  isPublic: boolean;
  createdAt: string;
}
```

---

## 🧠 Бизнес-логика

### 🔐 Аутентификация

- Пользователь проходит регистрацию или логин
- После успешной авторизации получает токен
- Токен сохраняется в приложении и используется для защищённых запросов

---

### 🍽 Рецепты

- Общая лента доступна всем пользователям
- Каждый пользователь может:
  - создавать рецепты
  - редактировать и удалять только свои рецепты

- Рецепты могут быть публичными или приватными

---

## 🧱 Архитектура проекта

Приложение построено по слоистой архитектуре:

- **UI слой** — React компоненты
- **Routing слой** — React Router
- **State management** — Redux Toolkit
- **Server state** — RTK Query

---

## 📦 Структура проекта

```
src/
  app/
    store.ts
    api/
      recipesApi.ts

  features/
    auth/
      authSlice.ts
      LoginForm.tsx
      RegisterForm.tsx

    recipes/
      RecipeCard.tsx
      RecipeList.tsx
      RecipeForm.tsx

  pages/
    RecipesPage.tsx
    RecipeDetailsPage.tsx
    MyRecipesPage.tsx
    CreateRecipePage.tsx
    LoginPage.tsx
    RegisterPage.tsx

  components/
    Header.tsx
    Layout.tsx
    ProtectedRoute.tsx
    Modal.tsx

  routes/
    AppRouter.tsx
```

---

## 🔄 Работа с API

Проект использует REST API (или mock сервер).

### Auth endpoints

- `POST /auth/register`
- `POST /auth/login`

### Recipe endpoints

- `GET /recipes` — все рецепты
- `GET /recipes/:id` — рецепт по ID
- `GET /my/recipes` — мои рецепты
- `POST /recipes` — создать рецепт
- `PUT /recipes/:id` — обновить рецепт
- `DELETE /recipes/:id` — удалить рецепт

---

## ⚙️ UI/UX особенности

- Адаптивный дизайн (mobile-first)
- Карточки рецептов
- Поиск по названию
- Фильтрация (все / мои / публичные)
- Добавление рецепта:
  - отдельная страница
  - или модальное окно

---

## 🔐 Защита маршрутов

Приватные страницы доступны только авторизованным пользователям.

Если пользователь не авторизован → редирект на `/auth/login`.

---

## 🧪 План разработки (MVP)

1. Инициализация проекта (Vite + React)
2. Настройка React Router
3. Реализация авторизации
4. Подключение RTK / RTK Query
5. Общая лента рецептов
6. Личный кабинет рецептов
7. CRUD рецептов
8. Добавление модального окна создания

---

## 📦 Зависимости проекта

- react (npm i react) — библиотека UI
- react-dom (npm i react-dom) — рендер React в DOM
- react-router-dom (npm i react-router-dom) — маршрутизация SPA
- @reduxjs/toolkit (npm i @reduxjs/toolkit) — state management
- react-redux (npm i react-redux) — связка Redux с React
- axios (npm i axios) — HTTP клиент -не факт ???
- react-icons (npm i react-icons) — иконки
- clsx (npm i clsx) — условные классы -не факт ???
- sass (npm i sass) — SCSS поддержка -не факт ???
- vite (npm i vite) — сборщик проекта
- styled-components (npm i styled-components)

---

## 📌 Цель проекта

Проект создан для практики:

- React архитектуры
- Redux Toolkit
- RTK Query (server state)
- React Router
- авторизации и protected routes
- построения CRUD SPA приложения

---

## 🚀 Возможные улучшения

- лайки рецептов
- избранное
- комментарии
- рейтинги
- категории и теги
- загрузка изображений
- рекомендации рецептов
- совместное редактирование

---

```

````
