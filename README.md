# 🍽️ Yumly — Recipe Management App

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

---

## 📖 About

**Yumly** is a Single Page Application for creating, storing, and discovering cooking recipes.

The project was built as a portfolio piece to practice a real-world frontend workflow: authentication, protected routes, CRUD operations, image uploads, filtering/search, and a scalable feature-based architecture — all backed by a real database instead of mock data.

The backend runs entirely on **Supabase**: PostgreSQL, Auth, Storage, and Row Level Security.

---

## ✨ Features

**Public**

- Browse and search all recipes
- Filter recipes by tags, cuisine, and category
- View full recipe details (ingredients, steps, cooking time, difficulty)
- Light / dark theme
- Fully responsive layout (mobile → desktop)

**Authentication**

- Registration with email verification
- Login / logout
- Persistent session (auto-restored on page reload)
- Protected and public-only routes

**For logged-in users**

- Create, edit, and delete your own recipes
- Multi-step recipe creation form (info → ingredients → steps → image)
- Upload a recipe photo
- Add/remove recipes to **Favorites**
- Manage your personal recipe collection ("My Recipes")
- Auto-calculated difficulty level, based on cooking time
- Client-side form validation with inline error messages

---

## 🛠 Tech Stack

**Frontend**

- React 19
- Redux Toolkit — global state (auth, recipes)
- React Router v7 — routing, protected/public route guards
- Styled Components — theming (light/dark), component styles
- Vite — build tool & dev server
- React Icons, Sonner (toast notifications), React Spinners

**Backend (BaaS)**

- Supabase
  - PostgreSQL — data storage
  - Supabase Auth — registration, login, email verification, sessions
  - Supabase Storage — recipe image uploads
  - Row Level Security (RLS) — users can only modify their own recipes

**Tooling**

- ESLint (flat config) — code quality
- GitHub Pages + `gh-pages` — deployment

---

## 🏗 Architecture

The project follows a **feature-based architecture**: code is grouped by business domain (auth, recipes, favorites) rather than by file type.

```
src
│
├── app                  # App entry, providers, Redux store
│   ├── providers
│   └── redux
│       ├── auth
│       └── recipes
│
├── assets               # Images, global styles, theme tokens
│
├── components            # Shared, feature-agnostic building blocks
│   ├── layout            # Header, Footer, navigation shell
│   ├── navigation         # Route guards (Private/Public route)
│   └── ui                # Buttons, inputs, loaders, skeletons, etc.
│
├── context               # Theme context (light/dark)
│
├── features
│   ├── auth               # Login/registration forms, validation
│   ├── favorites          # Favorites API calls
│   └── recipes            # Recipe API, forms, cards, home sections
│       ├── api
│       ├── components
│       ├── constants
│       ├── helpers
│       └── utils
│
├── pages                  # Route-level page components
└── supabase               # Supabase client instance
```

This structure keeps business logic isolated per domain, makes it easy to find related code, and scales better than a purely type-based (`components/`, `hooks/`, `utils/`) layout as the app grows.

---

## 🗄 Data Model

Each recipe stored in Supabase includes:

- title, description, image
- cuisine, category, tags
- difficulty _(auto-calculated from cooking time)_
- cooking time, servings
- ingredients (list, with amount/unit)
- step-by-step instructions
- author (linked to the authenticated user)

Row Level Security policies ensure a user can only edit or delete recipes they created, while all recipes remain publicly readable.

---

## 📦 Installation

```bash
git clone https://github.com/Maershaa/Yumly-Recipe-App.git
cd Yumly-Recipe-App
npm install
```

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Start the dev server:

```bash
npm run dev
```

---

## 📜 Available Scripts

| Script            | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Starts the local dev server               |
| `npm run build`   | Builds the app for production             |
| `npm run preview` | Serves the production build locally       |
| `npm run lint`    | Runs ESLint                               |
| `npm run deploy`  | Deploys the `dist` folder to GitHub Pages |

---

## 🔮 Possible Improvements

- TypeScript migration
- Pagination / infinite scroll for recipe lists
- User profiles & public author pages
- Comments and ratings
- Recipe collections
- Internationalization (i18n)
- Unit & integration tests

---

## 👩‍💻 Author

**Valeria** — Frontend Developer

GitHub: [github.com/Maershaa](https://github.com/Maershaa)

---

## 📄 License

Distributed under the MIT License.
