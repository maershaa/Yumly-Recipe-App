1.  Заходим на сайт документации https://supabase.com/docs/guides/getting-started
    выбираем фреймфорк React

Заходим на сайт: https://supabase.com/ => в правом верзнем углу dashboard => выбираем нашу организацию => жмем кнопку +New project
указываем Project name, Database password
Create new project

чтобы зайти в наш проект => Заходим на сайт: https://supabase.com/ => в правом верзнем углу dashboard => выбираем нашу организацию => выбираем наш проект

Когда ваш проект будет запущен и начнет работать, перейдите в раздел Table Editor на панели управления слева. создайте новую таблицу и добавьте данные.

//не понимаю что это и зачем -> Затем в разделе Integrations > Data API на панели управления откройте доступ к нужным таблицам или функциям. Чтобы автоматически предоставлять доступ для новых таблиц и функций в публичном режиме, включите функцию Default privileges for new entities.

В качестве альтернативы вы можете написать код для создания таблиц в редакторе SQL вашего проекта. для этого заходим в SQL Editor на панели управления слева.

пример:
insert into recipes (
recipe_name,
ingredients,
instructions
)
values

(
'Chicken Pasta',
'["Chicken fillet", "Pasta", "Cream", "Cheese", "Garlic"]'::jsonb,
'Boil pasta. Fry chicken with garlic. Add cream and cheese.'
),

(
'Avocado Toast',
'["Bread", "Avocado", "Egg", "Lemon juice"]'::jsonb,
'Toast bread. Mash avocado. Add fried egg on top.'
);
-- Create a policy to allow the anon role to read from the recipes table
create policy "public can read recipes"
on public.recipes
for select to anon
using (true);

2. Создаем проект на Vite (как обычно) npm create vite@latest my-app -- --template react

Устанавливаем библиотеку Supabase => cd my-app && npm install @supabase/supabase-js

3.  В корне проекта создаем файл .env
    VITE_SUPABASE_URL=вставляем без кавычек.
    VITE_SUPABASE_PUBLISHABLE_KEY=вставляем без кавычек

если вы движетесь по алгоритму начала работы из документации то можно прямо с него скопирвоать и то и другое на шаге 4 Declare Supabase Environment Variables

если нет то =>
SUPABASE_URL можно найти:
наш проект => в менюс слева Integrations => Data API => API URL
(почемуто он тут выглядит как "https://tohghzxxwkgogeahlsho.supabase.co/rest/v1/")

SUPABASE_PUBLISHABLE_KEY можно найти:
наш проект => в менюс слева project settings => API Keys => Publishable key

2 вариант:
гдето еще онопрм

4. В корне проекта создаем файл supabaseClient.js
   import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

5. Чтобы достать данные с теблиц (то есть с базы данных -

const { data, error } = await supabase.from("instruments").select();
)

from("instruments") - указываем с какой таблицы достаем
.select() - сюда прописываем что именно достаем
// .select(\*) - отдай все столбцы
// .select('recipe_name, ingredients' ) - отдай перечисленные столбцы

6. Регистрация нового пользователя. Он ввел в форму логин, пароль =>
   const { data, error } = await supabase.auth.signUp({
   email: 'example@email.com',
   password: 'example-password',
   })

Регисорация пользователя если м ыхотим с формы сохранить еще какието данные то мы их сохраняем в options.data=>
const { data, error } = await supabase.auth.signUp({
email: 'example@email.com',
password: 'example-password',

options: {
data: {
userName,
},
},

})

Логинизация

const { data, error } = await supabase.auth.signInWithPassword({
email: 'example@email.com',
password: 'example-password',
})
