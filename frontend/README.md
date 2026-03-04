# 🎬 Movie Library Application

## Project Description
The Movie Library Application is a full-stack web application that allows users to manage a collection of movies. Users can add, view, edit, delete, and search movies through a simple and responsive user interface.

This project is built using **React, Node.js, Express, MongoDB, Tailwind CSS, and DaisyUI**.

---

## 🚀 Features

- Add new movies
- View all movies
- Edit movie details
- Delete movies with confirmation popup
- Search movies by **Director Name**
- Search movies by **IMDb Rating**
- Filter movies using **Genre Dropdown**
- Dark themed UI with **Batman banner**
- Responsive design using **Tailwind CSS**
- Modern UI components using **DaisyUI**

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios
- Lucide React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

---

## 📂 Project Structure

```
Movie_library
│
├── backend
│   ├── src
│   │   ├── config/db.js
│   │   ├── controllers/MovieControllers.js
│   │   ├── models/MovieModel.js
│   │   ├── routes/MovieRoutes.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── asset/batman2.jpg
│   │   ├── components
|   |   |       ├── MovieCard.jsx
|   |   |       ├── MovieNotFound.jsx
|   |   |       ├── navbar
│   │   ├── pages
|   |   |       ├── CreatePage.jsx
|   |   |       ├── EditMoviePage.jsx
|   |   |       ├── HomePage.jsx
|   |   |       ├── MovieDetailsPage.jsx
│   │   └──lib
|   |        ├── axios.js
|   |        ├── utils.js
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 3️⃣ Run Backend Server

```bash
npm run dev
```

Backend will run on:

```
http://localhost:3000
```

---

### 4️⃣ Run Frontend

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 📊 Application Workflow

1. User can **add a new movie** using the create page.
2. Movie data is stored in **MongoDB database**.
3. All movies appear on the **home page**.
4. Users can:
   - Search movies by director
   - Filter movies by genre
   - Search movies by IMDb rating
5. Users can edit movie details anytime.
6. Users can delete movies with confirmation popup.

---

## 🎨 UI Design

The UI of the application is built using:

- **Tailwind CSS** for styling
- **DaisyUI components**
- Dark themed layout with **Batman banner**

---

## 📚 Future Improvements

- Add movie poster upload
- Add favorite movies feature
- Add movie statistics dashboard
- Add user authentication system

---

## 👨‍💻 Author

Movie Library Project  
Full Stack Web Development Project