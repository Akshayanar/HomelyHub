

Readme · MD
# 🏠 HomelyHub — MERN Stack Internship Project
 
Welcome to the official repository for **HomelyHub**, an AI-powered stay-booking web application built during a 4-week MERN Stack Internship (Batch B8) at **WebStack Academy**.
 
🔗 **Live App:** [homely-hub-beta.vercel.app](https://homely-hub-beta.vercel.app)
 
---
 
## 📖 About the Project
 
HomelyHub is a full-stack stay-booking platform — a MERN-based alternative to Airbnb — where users can browse, filter, and book properties, hosts can list stays, and an integrated AI feature (powered by Groq) helps generate property descriptions and plan trips. The project was built end-to-end over the internship, from backend architecture and authentication to frontend UI, AI integration, and production deployment.
 
---
 
## 🛠️ Technology Stack
 
| Layer | Technologies |
|---|---|
| **Frontend** | React, Redux Toolkit, React Router DOM, Axios |
| **Backend** | Node.js, Express.js (ES Modules syntax) |
| **Database** | MongoDB, Mongoose |
| **Authentication & Security** | JWT, Bcrypt, Validator |
| **Media Storage** | Cloudinary (image & avatar uploads) |
| **AI Integration** | Groq API (AI-assisted trip planning & descriptions) |
| **API Testing** | Postman |
| **Deployment** | Vercel (Frontend), Render (Backend), MongoDB Atlas (Database) |
 
---
 
## 📂 Project Structure
 
```
HomelyHub/
├── backend/
│   ├── src/
│   │   ├── Models/
│   │   │   └── userModel.js
│   │   ├── utils/
│   │   │   └── db.js
│   │   └── index.js
│   ├── .env
│   └── package.json
├── public/
├── src/
├── index.html
├── vite.config.js
└── README.md
```
 
---
 
## 📊 Database Models
 
### 👤 User Model (`backend/src/Models/userModel.js`)
 
| Field | Details |
|---|---|
| `name` | String, trimmed, max 50 characters |
| `email` | String, unique, lowercase, validated via `validator.isEmail` |
| `password` | String, min 6 characters, excluded from default queries (`select: false`) |
| `passwordConfirm` | String, validated to match `password` |
| `phoneNumber` | String, unique, required |
| `role` | String, enum `["user", "admin"]`, defaults to `"user"` |
| `avatar` | Object — `{ url, public_id }` (Cloudinary) |
| Timestamps | Auto-generated `createdAt` / `updatedAt` |
 
---
 
## 🔌 API Endpoints (Plan)
 
| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | `/` | Test endpoint to verify backend status | ✅ Live |
| POST | `/api/v1/users/signup` | Register a new user | ✅ Live |
| POST | `/api/v1/users/login` | Login user & issue JWT | ✅ Live |
| POST | `/api/v1/users/forgotPassword` | Request password reset email | ⏳ Planned |
| GET | `/api/v1/properties` | Fetch property listings | ✅ Live |
| POST | `/api/v1/bookings` | Create a new booking | ✅ Live |
| POST | `/api/v1/ai/trip-plan` | AI-generated trip plan (Groq) | ✅ Live |
 
*(Update statuses as endpoints are finalized.)*
 
---
 
## 📅 Internship Log — MERN Stack Internship (Batch B8)
 
| Day | Topic | What I Worked On |
|---|---|---|
| Day 1 | Kickoff Session | Program introduction and internship roadmap overview |
| Day 2 | Introduction & Setup | Installed VS Code, Node.js, MongoDB, Git & GitHub; set up the dev environment and MongoDB Atlas |
| Day 3 | Backend Foundation & Express Setup | Initialized the Node.js/Express backend structure for HomelyHub |
| Day 4 | MongoDB, Middleware, User Model | Connected MongoDB via Mongoose, learned middleware, built the User schema |
| Day 5 | JWT, Async/Await, HTTP Methods | Studied JWT authentication, asynchronous JS, and REST HTTP methods |
| Day 6 | API Testing in Postman | Learned request/response flow and tested endpoints in Postman |
| Day 7 | Property Model & Listing Backend | Built the Property schema and listing API endpoints |
| Day 8 | Route Protection & Booking System | Implemented protected routes and core booking logic |
| Day 9 | Signup → Login Flow | Connected registration and authentication end-to-end |
| Day 10 | React: Welcome to Frontend | Introduction to React and frontend project setup |
| Day 11 | Frontend Structure & App Flow | Structured the React app and component/data flow |
| Day 12 | Property Listing & Details Pages | Built listing/detail pages; learned Redux Toolkit workflow |
| Day 13 | Authentication UI & Redux | Built login/signup UI and wired it to Redux state |
| Day 14 | Feature Development | Continued core feature build-out (property & booking UI) |
| Day 15 | AI Feature — Trip Planner | Built the AI-powered Trip Planner feature using Groq |
| Day 16 | AI API Integration in MERN | Learned the backend AI integration workflow with Groq's API |
| Day 17 | Test Project | End-to-end testing and project presentation prep |
| — | Deployment | Deployed frontend (Vercel) and backend (Render) to production |
| — | Oral Presentation | Recorded and submitted the final project walkthrough video |
 
---
 
## ⚙️ How to Set Up and Run
 
### 1. Clone the repository
```bash
git clone https://github.com/Akshayanar/HomelyHub.git
cd HomelyHub
```
 
### 2. Backend Setup
```bash
cd backend
npm install
```
 
Create a `.env` file inside `backend/`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GROQ_API_KEY=your_groq_api_key
```
 
Start the backend:
```bash
npm run dev
```
 
### 3. Frontend Setup
```bash
cd ..
npm install
npm run dev
```
 
---
 
## 📚 Internship Progress Summary
 
**Backend**
- [x] Node.js & Express setup
- [x] MongoDB & Mongoose integration
- [x] Middleware & User Model
- [x] JWT authentication
- [x] API testing with Postman
- [x] Property Model & listing backend
- [x] Route protection & booking system
- [x] Signup → Login flow
- [x] Groq AI API integration
**Frontend**
- [x] React project setup
- [x] Application structure & data flow
- [x] Redux Toolkit state management
- [x] Authentication UI
- [x] Property listing & details pages
- [x] AI Trip Planner UI
---
 
## 🎓 Acknowledgment
 
This project was built as part of the **MERN Stack Internship (Batch B8)** at **WebStack Academy**. Special thanks to the mentors and team for their guidance throughout the program.
 
---
 
## 📬 Contact
 
**Author:** [Your Name]
**GitHub:** [@Akshayanar](https://github.com/Akshayanar)
**Live Demo:** [homely-hub-beta.vercel.app](https://homely-hub-beta.vercel.app)
 

Claude finished the response
