# Supabase + React. Полный алгоритм настройки проекта и авторизации

# 1. Создание проекта Supabase

Переходим на сайт:

[Supabase](https://supabase.com?utm_source=chatgpt.com)

Далее:

1. Dashboard
2. Выбираем организацию
3. New Project
4. Указываем:

- Project Name
- Database Password
- Region

5. Нажимаем Create Project

После создания проекта открываем его через Dashboard.

---

# 2. Создание таблиц

После запуска проекта:

```text
Table Editor
↓
New Table
```

Создаем необходимые таблицы.

Например:

```text
recipes
```

Поля:

```text
id
title
ingredients
instructions
created_at
```

---

## Создание таблиц через SQL

Вместо ручного создания можно использовать:

```text
SQL Editor
```

Пример добавления данных:

```sql
insert into recipes (
  recipe_name,
  ingredients,
  instructions
)
values
(
  'Chicken Pasta',
  '["Chicken fillet","Pasta","Cream"]'::jsonb,
  'Boil pasta and cook chicken.'
);
```

---

# 3. Настройка доступа к таблицам (RLS)

По умолчанию Supabase использует:

```text
Row Level Security (RLS)
```

Без политик запросы часто не работают.

Пример разрешения чтения:

```sql
create policy "public can read recipes"
on public.recipes
for select
to anon
using (true);
```

Это означает:

```text
Любой пользователь может читать данные.
```

⚠️ Для production-проектов доступ обычно ограничивают.

---

# 4. Создание React-проекта

```bash
npm create vite@latest my-app -- --template react
```

Устанавливаем зависимости:

```bash
cd my-app

npm install
npm install @supabase/supabase-js
```

---

# 6. Настройка переменных окружения

Создаем файл: .env

Содержимое:

VITE_SUPABASE_URL=https://your-project.supabase.co

VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key

---

## Где взять URL

Project Settings
↓
API
↓
Project URL

Пример: https://xxxxxxxx.supabase.co

⚠️ Используем именно Project URL.
Не нужно брать: https://xxxxxxxx.supabase.co/rest/v1/
SDK сам формирует нужные маршруты.

---

## Где взять ключ

Project Settings
↓
API Keys
↓
Publishable Key

---

# 7. Создание Supabase Client

Создаем: src/api/supabaseClient.js

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

---

# 8. Получение данных из базы

Получить все поля:

```js
const { data, error } = await supabase.from('recipes').select('*');
```

---

Получить конкретные поля:

```js
const { data, error } = await supabase
  .from('recipes')
  .select('recipe_name, ingredients');
```

---

Где:
.from('recipes') - указывает таблицу.

.select() - указывает столбцы.

---

# 9. Регистрация пользователя

Простейшая регистрация:

```js
const { data, error } = await supabase.auth.signUp({
  email,
  password,
});
```

---

## Сохранение дополнительных данных пользователя

```js
const { data, error } = await supabase.auth.signUp({
  email,
  password,

  options: {
    data: {
      userName,
    },
  },
});
```

Эти данные попадут в:

```js
user.user_metadata;
```

---

## Подтверждение email

!!!Во время разработки можно отключить подтверждение почты:

```text
Authentication
↓
Providers
↓
Email
↓
Confirm email
```

Но для production подтверждение лучше оставить включенным.

---

# 10. Авторизация пользователя

```js
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
});
```

После успешного входа Supabase вернет:

```js
data.user;
data.session;
```

---

# 11. Выход из системы

```js
const { error } = await supabase.auth.signOut();
```

После выхода:

```js
session = null;
user = null;
```

---

# 12. Восстановление сессии после перезагрузки

При запуске приложения проверяем:

```js
const {
  data: { session },
} = await supabase.auth.getSession();
```

Если:

```js
session !== null;
```

то пользователь уже авторизован.

---

# 13. Отслеживание изменений авторизации

Для React используется:

```js
const {
  data: { subscription },
} = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event);
  console.log(session);
});
```

Очистка:

```js
return () => {
  subscription.unsubscribe();
};
```

---

## Возможные события

```text
SIGNED_IN
SIGNED_OUT
TOKEN_REFRESHED
USER_UPDATED
INITIAL_SESSION
```

---

# 14. Refresh Token

Дополнительно реализовывать refresh token не нужно.

Supabase автоматически:

1. Хранит сессию.
2. Обновляет access token.
3. Использует refresh token.
4. Восстанавливает сессию после перезагрузки страницы.

Поэтому обычно не нужно:

```js
localStorage.setItem(...)
localStorage.getItem(...)
```

для хранения токенов вручную.

---

# 15. Redux Toolkit + createAsyncThunk

Регистрация:

```js
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data, error } = await supabase.auth.signUp(credentials);

      if (error) throw error;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
```

---

Авторизация:

```js
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data, error } =
        await supabase.auth.signInWithPassword(credentials);

      if (error) throw error;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
```

---

# 16. Protected Routes

Пример:

```jsx
<Route
  path="/profile"
  element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" replace />}
/>
```

Или через отдельный компонент:

```jsx
<PrivateRoute>
  <ProfilePage />
</PrivateRoute>
```

---

# Что происходит под капотом

Когда пользователь входит:

```text
email + password
        ↓
Supabase Auth
        ↓
создает session
        ↓
выдает access token
        ↓
выдает refresh token
        ↓
сохраняет сессию
        ↓
восстанавливает её после перезагрузки
```

При истечении access token:

```text
refresh token
        ↓
получение нового access token
        ↓
пользователь остается авторизованным
```

---
