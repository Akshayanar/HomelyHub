# 🏠 HomelyHub - MERN STACK Internship Project

Welcome to the official repository for **HomelyHub**! This project is being developed and updated daily during my month-long web development internship.

---

## 📂 Project Structure

Below is the directory structure of the project:

```text
Internship/
├── HomelyHub/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── Models/
│   │   │   │   └── userModel.js       # User database schema & validation
│   │   │   ├── utils/
│   │   │   │   └── db.js              # MongoDB connection setup
│   │   │   └── index.js               # Entry point of the Express app
│   │   ├── .env                       # Environment configuration files
│   │   ├── package.json               # Backend dependencies & scripts
│   │   └── node_modules/
└── README.md                          # Daily logs & documentation
```

---

## 🛠️ Technology Stack

- **Backend:** Node.js & Express.js (ES Modules syntax)
- **Database:** MongoDB & Mongoose
- **Validation & Security:** Validator (format validation), Bcrypt (password hashing)

---

## 📊 Database Models

### 👤 User Model (`backend/src/Models/userModel.js`)
The database schema handles user registration and role management with built-in validation:
- **`name`**: String, trimmed, maximum 50 characters.
- **`email`**: String, unique, lowercase, validated using `validator.isEmail`.
- **`password`**: String, minimum length of 6 characters, excluded from default queries (`select: false`).
- **`passwordConfirm`**: String, validated to match the input password.
- **`phoneNumber`**: String, unique, required.
- **`role`**: String, enum `["user", "admin"]`, defaults to `"user"`.
- **`avatar`**: Object containing image `url` and Cloudinary `public_id`.
- **Timestamps**: Automatic `createdAt` and `updatedAt` logs.

---

## 🔌 API Endpoints Plan (MERN)

Here is the planned roadmap of backend routes:

| Method | Endpoint | Description | Status |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Test endpoint to verify backend status | ✅ Live |
| **POST** | `/api/v1/users/signup` | Register a new user (hashing password) | ⏳ Planned |
| **POST** | `/api/v1/users/login` | Login user & issue JWT/session | ⏳ Planned |
| **POST** | `/api/v1/users/forgotPassword` | Request password reset email | ⏳ Planned |

---

## 📅 30-Day Internship Log

This table tracks progress daily for the duration of the internship.

| Day | Date | Tasks Completed | Key Takeaways & Learned Skills | Status |
| :---: | :--- | :--- | :--- | :---: |
| **Day 1** | August 19, 2026 | Initialized Node.js backend environment, configured Express, and established database connection with Mongoose. | Set up dotenv, CORS, and Express JSON middleware. | ✅ Done |
| **Day 2** | August 20, 2026 | *Update this tomorrow...* | *Key takeaways...* | ⏳ Pending |
| **Day 3** | August 21, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 4** | August 22, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 5** | August 23, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 6** | August 24, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 7** | August 25, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 8** | August 26, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 9** | August 27, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 10** | August 28, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 11** | August 29, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 12** | August 30, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 13** | August 31, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 14** | September 1, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 15** | September 2, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 16** | September 3, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 17** | September 4, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 18** | September 5, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 19** | September 6, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 20** | September 7, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 21** | September 8, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 22** | September 9, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 23** | September 10, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 24** | September 11, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 25** | September 12, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 26** | September 13, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 27** | September 14, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 28** | September 15, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 29** | September 16, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |
| **Day 30** | September 17, 2026 | *Update this...* | *Key takeaways...* | ⏳ Pending |

---

## ⚙️ How to Setup and Run

1. **Navigate to the Backend:**
   ```bash
   cd HomelyHub/backend
   ```

2. **Install Node Packages:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Configure a `.env` file inside `backend/`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
