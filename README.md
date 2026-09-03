# 🏠 HomelyHub - MERN STACK Internship Project

Welcome to the official repository for **HomelyHub**! This project is being developed and updated daily during my month-long web development internship.

---

## 📂 Project Structure

```text
Internship/
├── HomelyHub/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── Models/
│   │   │   │   └── userModel.js
│   │   │   ├── utils/
│   │   │   │   └── db.js
│   │   │   └── index.js
│   │   ├── .env
│   │   ├── package.json
│   │   └── node_modules/
└── README.md
```

---

## 🛠️ Technology Stack

* **Backend:** Node.js & Express.js (ES Modules syntax)
* **Database:** MongoDB & Mongoose
* **Validation & Security:** Validator, Bcrypt
* **API Testing:** Postman
* **Authentication:** JWT
* **Frontend:** React
* **State Management:** Redux Toolkit

---

## 📊 Database Models

### 👤 User Model (`backend/src/Models/userModel.js`)

The database schema handles user registration and role management with built-in validation:

* **`name`**: String, trimmed, maximum 50 characters.
* **`email`**: String, unique, lowercase, validated using `validator.isEmail`.
* **`password`**: String, minimum length of 6 characters, excluded from default queries (`select: false`).
* **`passwordConfirm`**: String, validated to match the input password.
* **`phoneNumber`**: String, unique, required.
* **`role`**: String, enum `["user", "admin"]`, defaults to `"user"`.
* **`avatar`**: Object containing image `url` and Cloudinary `public_id`.
* **Timestamps**: Automatic `createdAt` and `updatedAt` logs.

---

## 🔌 API Endpoints Plan (MERN)

| Method   | Endpoint                       | Description                            | Status    |
| :------- | :----------------------------- | :------------------------------------- | :-------- |
| **GET**  | `/`                            | Test endpoint to verify backend status | ✅ Live    |
| **POST** | `/api/v1/users/signup`         | Register a new user                    | ⏳ Planned |
| **POST** | `/api/v1/users/login`          | Login user & issue JWT/session         | ⏳ Planned |
| **POST** | `/api/v1/users/forgotPassword` | Request password reset email           | ⏳ Planned |

---

## 📅 30-Day Internship Log

|     Day    | Date               | Tasks Completed                                                                                                 | Key Takeaways & Learned Skills                                                                               |   Status  |
| :--------: | :----------------- | :-------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-------: |
|  **Day 1** | August 19, 2026    | Initialized Node.js backend environment, configured Express, and established database connection with Mongoose. | Learned dotenv, CORS, Express JSON middleware, and basic backend setup.                                      |   ✅ Done  |
|  **Day 2** | August 20, 2026    | Set up the development environment with VS Code, Node.js, MongoDB, Git, and GitHub.                             | Learned the basic tools required for MERN development and MongoDB Atlas setup.                               |   ✅ Done  |
|  **Day 3** | August 21, 2026    | Set up the backend foundation and Express application for HomelyHub.                                            | Learned Express application structure and backend initialization.                                            |   ✅ Done  |
|  **Day 4** | August 22, 2026    | Connected MongoDB, worked with middleware, and created the User Model.                                          | Learned how middleware works with Express and how Mongoose models are structured.                            |   ✅ Done  |
|  **Day 5** | August 23, 2026    | Studied JWT, async/await, and HTTP methods.                                                                     | Learned asynchronous programming, JWT concepts, and the purpose of different HTTP methods.                   |   ✅ Done  |
|  **Day 6** | August 24, 2026    | Tested APIs using Postman and studied request flow.                                                             | Learned how client requests move through the backend and how APIs can be tested using Postman.               |   ✅ Done  |
|  **Day 7** | August 25, 2026    | Worked on the Property Model and Listing Backend.                                                               | Learned how property data can be modeled and handled in the backend.                                         |   ✅ Done  |
|  **Day 8** | August 26, 2026    | Worked on route protection and the booking system.                                                              | Learned the basics of protecting backend resources and implementing booking-related functionality.           |   ✅ Done  |
|  **Day 9** | August 27, 2026    | Implemented the flow from user signup to login.                                                                 | Learned the relationship between registration, authentication, and login functionality.                      |   ✅ Done  |
| **Day 10** | August 28, 2026    | Started the React frontend and learned the basics of React.                                                     | Learned the basic concepts and workflow of building the frontend with React.                                 |   ✅ Done  |
| **Day 11** | August 29, 2026    | Worked on the frontend structure and application flow.                                                          | Learned how the frontend is organized and how data/application flow works in a React application.            |   ✅ Done  |
| **Day 12** | August 30, 2026    | Studied Redux Toolkit workflow for frontend state management.                                                   | Learned the basic Redux Toolkit workflow and how centralized state management fits into a React application. |   ✅ Done  |
| **Day 13** | August 31, 2026    | *Update based on internship work.*                                                                              | *The provided LMS source does not specify the Day 13 internship task.*                                       | ⏳ Pending |
| **Day 14** | September 1, 2026  | *Update based on internship work.*                                                                              | *The provided LMS source does not specify the Day 14 internship task.*                                       | ⏳ Pending |
| **Day 15** | September 2, 2026  | *Update based on internship work.*                                                                              | *The provided LMS source does not specify the Day 15 internship task.*                                       | ⏳ Pending |
| **Day 16** | September 3, 2026  | *Update based on internship work.*                                                                              | *The provided LMS source does not specify the Day 16 internship task.*                                       | ⏳ Pending |
| **Day 17** | September 4, 2026  | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 18** | September 5, 2026  | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 19** | September 6, 2026  | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 20** | September 7, 2026  | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 21** | September 8, 2026  | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 22** | September 9, 2026  | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 23** | September 10, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 24** | September 11, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 25** | September 12, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 26** | September 13, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 27** | September 14, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 28** | September 15, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 29** | September 16, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |
| **Day 30** | September 17, 2026 | *Update this...*                                                                                                | *Key takeaways...*                                                                                           | ⏳ Pending |

---

## ⚙️ How to Setup and Run

### 1. Navigate to the Backend

```bash
cd HomelyHub/backend
```

### 2. Install Node Packages

```bash
npm install
```

### 3. Environment Setup

Configure a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 📚 Internship Progress

### Backend Progress

* Node.js and Express setup
* MongoDB and Mongoose integration
* Middleware
* User Model
* JWT concepts
* Async/await
* HTTP methods
* API testing with Postman
* Property Model
* Property listing backend
* Route protection
* Booking system
* Signup and login flow

### Frontend Progress

* React introduction
* React frontend setup
* Frontend application flow
* Redux Toolkit workflow

The internship has progressed from **backend setup and database integration** toward **authentication, property/booking functionality, and React frontend development**.
