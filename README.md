# Here's the Live Link : https://anas-book-store.netlify.app/

# 📚 MERN Book Store Application

A full-stack Book Management Web Application built using the MERN Stack that allows users to perform complete CRUD operations (Create, Read, Update, Delete) on books.

This project demonstrates REST API development, MongoDB integration, modern React UI design, and full deployment to production.

🚀 Live Demo

🌐 Frontend (Vercel):
👉 https://anas-book-store.netlify.app/

📡 Backend API:
👉 https://book-store-puce-ten.vercel.app/books

🛠️ Tech Stack
🔹 Frontend

React (Vite)

React Router DOM

Axios

Tailwind CSS

Notistack (Snackbar Notifications)

React Icons

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

dotenv

🔹 Deployment

Frontend: Vercel

Backend: Vercel (Serverless)

Database: MongoDB Atlas

✨ Features

📚 Add new books

📖 View all books (Table & Card View)

🔍 View book details

✏️ Edit book information

🗑️ Delete books

📊 Dynamic statistics (Total books, authors, year range)

🔄 Real-time UI updates

📱 Fully responsive design

🎨 Modern Tailwind UI

📂 Project Structure
book-store/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── config.js
│   └── index.js
│
└── README.md

⚙️ Installation & Setup (Local Development)
1️⃣ Clone the Repository
git clone https://github.com/anasamin100100-eng/book-store.git
cd book-store

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

MONGODB_URL=your_mongodb_connection_string
PORT=5555


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get single book
POST	/books	Create new book
PUT	/books/:id	Update book
DELETE	/books/:id	Delete book
🧠 What This Project Demonstrates

RESTful API design

MongoDB schema modeling using Mongoose

Serverless backend deployment

React state management with hooks

Dynamic routing with React Router

Clean UI design with Tailwind

Production-ready full-stack structure

🔐 Environment Variables

The following variables must be added in backend .env:

MONGODB_URL=your_mongodb_atlas_connection_string
PORT=5555


⚠️ Do NOT commit .env to GitHub.

👨‍💻 Author

Anas Amin
BSCS Student | MERN Stack Developer
GitHub: https://github.com/anasamin100100-eng

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

⭐ Show Your Support

If you like this project:

⭐ Star this repository

🍴 Fork it

📩 Connect with me on LinkedIn
