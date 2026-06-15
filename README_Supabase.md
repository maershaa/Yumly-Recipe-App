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

Для того чтобы ваша база данных была полностью рабочей, безопасной и «профессионально настроенной» (как мы и сделали в процессе вашего обучения), я добавил важные разделы по работе с целостностью данных (`user_id`, `Foreign Key`) прямо в ваш алгоритм.

Вот дополненный блок для вашего `README.md`:

---

# 17. Настройка целостности данных (Обязательный этап)

Чтобы таблица корректно работала с пользователями, важно привязать каждый рецепт к конкретному автору.

### 1. Привязка `user_id` к пользователю

Добавьте колонку `user_id` в таблицу (тип `uuid`). Установите для неё значение по умолчанию `auth.uid()`, чтобы при вставке данных ID пользователя подставлялся автоматически:

```sql
-- 1. Установка значения по умолчанию
ALTER TABLE recipes
ALTER COLUMN user_id SET DEFAULT auth.uid();

-- 2. Делаем поле обязательным
ALTER TABLE recipes
ALTER COLUMN user_id SET NOT NULL;

```

### 2. Создание внешнего ключа (Foreign Key)

Это гарантирует, что рецепт не может существовать без реального пользователя (целостность данных):

```sql
ALTER TABLE recipes
ADD CONSTRAINT fk_recipes_user_id
FOREIGN KEY (user_id) REFERENCES auth.users(id)
ON DELETE CASCADE;

```

_Примечание: Если у вас уже есть записи, сначала обновите `NULL` значения на существующий UUID пользователя._

---

# 18. Политики безопасности (RLS) для CRUD

После включения RLS в таблице, вам нужно явно разрешить операции.

### Публичное чтение

```sql
create policy "Anyone can read recipes"
on recipes
for select
using (true);

```

### Создание рецепта (только для своих)

```sql
create policy "Authenticated users can create recipes"
on recipes
for insert
to authenticated
with check (auth.uid() = user_id);

```

### Редактирование и удаление (только владельцем)

```sql
create policy "Users can update own recipes"
on recipes
for update
to authenticated
using (auth.uid() = user_id);

create policy "Users can delete own recipes"
on recipes
for delete
to authenticated
using (auth.uid() = user_id);

```

---

# 19. Принцип работы RLS "под капотом"

Когда вы делаете запрос из React, Supabase автоматически подставляет `auth.uid()` из текущего JWT-токена пользователя.

- **SELECT**: Если `using (true)` — вернет все записи.
- **INSERT/UPDATE**: Если `auth.uid() = user_id` — Supabase проверит, совпадает ли ID создателя с ID пользователя в сессии. Если не совпадает, база данных отклонит запрос с ошибкой `403 Forbidden`.

---

# 20. Совет: Фильтрация в приложении

Теперь, когда связь `recipes -> users` жесткая, вы можете легко получать только свои рецепты на стороне React:

```js
const fetchMyRecipes = async (userId) => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('user_id', userId); // Безопасная фильтрация
  return data;
};
```

---
Пример работі с SQL

select * from recipes limit 1; - Покажи один реальный рецепт из своей БД.

DELETE FROM recipes; - отчищает всю БД таблицу с рецептми


Сбросить автоинкремент ID. Так новые рецепты снова начнутся с id = 1.
Необходимо Если id создан через GENERATED AS IDENTITY, выполни:
ALTER TABLE recipes
ALTER COLUMN id RESTART WITH 1;