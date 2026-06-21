# 🍽️ Yumly – Recipe Management Application

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-6-DB7093?logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

## 📖 About

**Yumly** is a modern Single Page Application for creating, managing, and discovering cooking recipes.

The project was built as a portfolio application to demonstrate practical experience with modern frontend development, including state management, routing, authentication, CRUD operations, image uploads, and scalable application architecture.

The backend is powered by **Supabase**, providing PostgreSQL, Authentication, Storage, and Row Level Security (RLS).

---

## 🚀 Live Demo

🔗 **Application**

https://maershaa.github.io/Yumly-Recipe-App/

---

## ✨ Features

### Public

- Browse all recipes
- Search recipes
- View recipe details
- Responsive interface
- Dark / Light theme

### Authentication

- User registration
- Login / Logout
- Protected routes
- Persistent authentication

### Authorized Users

- Create new recipes
- Edit own recipes
- Delete own recipes
- Upload recipe images
- Manage personal recipe collection

---

## 🛠 Tech Stack

### Frontend

- React 19
- Redux Toolkit
- React Router
- Styled Components
- Vite
- React Icons
- Sonner

### Backend

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security (RLS)

---

## 🏗 Architecture

The project follows a **feature-based architecture**, where business logic is grouped by domain instead of file type.

```
src
│
├── app
│   ├── providers
│   └── redux
│
├── assets
├── components
│   ├── navigation
│   └── ui
│
├── context
│
├── features
│   ├── auth
│   └── recipes
│
├── pages
├── supabase
├── utils
```

This structure improves:

- scalability
- maintainability
- code reuse
- separation of concerns

---

## 🗄 Database

The application uses **Supabase PostgreSQL**.

### Main entities

- Recipes
- Authentication (Supabase Auth)
- Images (Supabase Storage)

Each recipe contains:

- title
- description
- image
- cuisine
- difficulty
- cooking time
- servings
- ingredients
- instructions
- tags
- author
- likes

---

## 🔐 Authentication

Authentication is implemented using **Supabase Auth**.

Protected functionality includes:

- creating recipes
- editing recipes
- deleting recipes
- personal recipe management

Row Level Security policies ensure users can modify only their own recipes.

---

## 🎨 UI Features

- Dark / Light theme
- Responsive layout
- Styled Components
- Loading indicators
- Error handling
- Toast notifications
- Reusable UI components

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Maershaa/Yumly-Recipe-App.git
```

Go to the project folder:

```bash
cd Yumly-Recipe-App
```

Install dependencies:

```bash
npm install
```

Create an environment file:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Start the development server:

```bash
npm run dev
```

---

## 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the production version.

```bash
npm run preview
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run deploy
```

Deploys the application to GitHub Pages.

---

## 📁 Project Highlights

- Feature-based architecture
- Redux Toolkit state management
- Reusable UI components
- Protected routing
- CRUD functionality
- Image upload
- Theme switching
- Form validation
- Production-ready project structure

---

## 🔮 Future Improvements

- Favorites system
- Advanced recipe filters
- Pagination
- User profiles
- Comments
- Ratings
- Recipe collections
- Internationalization (i18n)
- Unit & integration tests
- Performance optimization

---

## 👩‍💻 Author

**Valeria**

Frontend Developer

GitHub:
https://github.com/Maershaa
