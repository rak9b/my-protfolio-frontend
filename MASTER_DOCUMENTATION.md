# 📚 COMPLETE PROJECT DOCUMENTATION

**Project**: Professional Portfolio  
**Stack**: Next.js 16 + Express.js + Prisma + AI

---

## 📑 Table of Contents

1. [Frontend Pages](#-frontend-pages-nextjs)
2. [Backend API Endpoints](#-backend-api-endpoints-expressjs)
3. [Deployment URLs](#-deployment-urls)
4. [Environment Variables](#-environment-variables)
5. [Admin Access](#-admin-access)
6. [Quick Start Guide](#-quick-start-guide)

---

## 🎨 Frontend Pages (Next.js)

### Public Pages

| Page | URL | Description |
|------|-----|-------------|
| **Home** | `/` | Landing page with hero, skills showcase, and CTA |
| **Projects** | `/projects` | Portfolio projects gallery with filtering |
| **Blog** | `/blog` | Technical blog posts listing |
| **Blog Detail** | `/blog/[slug]` | Individual blog post view |
| **About** | `/about` | About me, experience, and journey |
| **Contact** | `/contact` | Contact form with email integration |
| **Admin Login** | `/login` | Admin authentication portal |

### Admin Pages (Protected)

| Page | URL | Description | Auth Required |
|------|-----|-------------|---------------|
| **Admin Dashboard** | `/admin` | Main admin dashboard | ✅ |
| **Manage Blogs** | `/admin/blogs` | Blog CRUD operations | ✅ |
| **Manage Projects** | `/admin/projects` | Project CRUD operations | ✅ |
| **Manage Testimonials** | `/admin/testimonials` | Testimonial management | ✅ |
| **View Messages** | `/admin/messages` | Contact form submissions | ✅ |

### Local URLs (Development)
```
Frontend: http://localhost:3002
Backend:  http://localhost:5000
```

### Production URLs (After Deployment)
```
Frontend: https://your-portfolio.vercel.app
Backend:  https://your-backend.onrender.com
```

---

## 🔌 Backend API Endpoints (Express.js)

### Base URL
- **Local**: `http://localhost:5000/api`
- **Production**: `https://your-backend.onrender.com/api`

---

### 🔐 Authentication APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **POST** | `/auth/login` | ❌ | Admin login, returns JWT token |

**Example Request**:
```json
POST /api/auth/login
{
  "email": "admin@portfolio.com",
  "password": "Admin@123"
}
```

**Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "id": "uuid",
    "email": "admin@portfolio.com",
    "name": "Administrator"
  }
}
```

---

### 📝 Blog APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **GET** | `/blogs` | ❌ | Get all published blogs |
| **GET** | `/blogs/:slug` | ❌ | Get single blog by slug |
| **POST** | `/blogs` | ✅ | Create new blog |
| **PUT** | `/blogs/:id` | ✅ | Update existing blog |
| **DELETE** | `/blogs/:id` | ✅ | Delete blog |

**Example - Get All Blogs**:
```
GET http://localhost:5000/api/blogs
```

---

### 📂 Project APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **GET** | `/projects` | ❌ | Get all projects |
| **POST** | `/projects` | ✅ | Create new project |
| **PUT** | `/projects/:id` | ✅ | Update project |
| **DELETE** | `/projects/:id` | ✅ | Delete project |

**Example - Get All Projects**:
```
GET http://localhost:5000/api/projects
```

---

### ⭐ Testimonial APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **GET** | `/testimonials` | ❌ | Get featured testimonials |
| **POST** | `/testimonials` | ✅ | Create testimonial |
| **PUT** | `/testimonials/:id` | ✅ | Update testimonial |
| **DELETE** | `/testimonials/:id` | ✅ | Delete testimonial |

---

### 📄 Resume APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **GET** | `/resume` | ❌ | Get latest resume data |
| **POST** | `/resume` | ✅ | Upload resume metadata |

---

### 🤖 AI Chatbot APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **POST** | `/chatbot/chat` | ❌ | Chat with Gemini 2.0 AI |
| **GET** | `/chatbot/suggested-questions` | ❌ | Get suggested questions |
| **GET** | `/chatbot/faq` | ❌ | Get FAQ data |
| **POST** | `/chat` | ❌ | Legacy chat (OpenAI fallback) |

**Example - Chat with AI**:
```json
POST /api/chatbot/chat
{
  "message": "What are your full-stack development skills?",
  "conversationHistory": []
}
```

**Response**:
```json
{
  "reply": "AI-generated response...",
  "model": "gemini-2.0-flash-exp",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

### 📞 Contact & Message APIs

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| **POST** | `/contact` | ❌ | Send contact message |
| **GET** | `/messages` | ✅ | Get all messages (admin) |

**Example - Send Contact Message**:
```json
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to discuss a project..."
}
```

---

## 🌐 Deployment URLs

### Frontend (Vercel)
```
Development:  http://localhost:3002
Production:   https://your-portfolio.vercel.app
Build:        npm run build
Start:        npm start
```

### Backend (Render)
```
Development:  http://localhost:5000
Production:   https://your-backend.onrender.com
Build:        ./render-build.sh
Start:        npm start
```

---

## 🔑 Environment Variables

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api  # Development
# NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api  # Production
```

### Backend (.env)
```bash
# Server
PORT=5000

# Database
DATABASE_URL="file:./dev.db"

# Security
JWT_SECRET="9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b"

# Email
EMAIL_USER="mdrakibulislam7018@gmail.com"
EMAIL_PASS="PASTE_YOUR_GMAIL_APP_PASSWORD_HERE"
SMTP_USER="mdrakibulislam7018@gmail.com"
SMTP_PASS="PASTE_YOUR_GMAIL_APP_PASSWORD_HERE"

# AI
GEMINI_API_KEY="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"
OPENAI_API_KEY="sk-placeholder-not-used"

# Other
FRONTEND_URL="http://localhost:3002"
MONGO_URI="mongodb+srv://manO9:<db_password>@cluster0.mwgp6ll.mongodb.net/?appName=Cluster0"
```

---

## 👤 Admin Access

### Admin Login Credentials
```
URL:      http://localhost:3002/login (or your deployed URL)
Email:    admin@portfolio.com
Password: Admin@123
```

> ⚠️ **Security Note**: Change the password immediately after first login!

### How to Login
1. Navigate to `/login` page
2. Enter admin credentials
3. Receive JWT token (stored in browser)
4. Access admin dashboard at `/admin`

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 2. Setup Environment Variables
```bash
# Backend
cp backend/.env.example backend/.env
# Edit .env with your actual values

# Frontend
cp frontend/.env.local.example frontend/.env.local
# Add NEXT_PUBLIC_API_URL
```

### 3. Run Development Servers
```bash
# Backend (Terminal 1)
cd backend
npm run dev
# Server runs on http://localhost:5000

# Frontend (Terminal 2)
cd frontend
npm run dev
# App runs on http://localhost:3002
```

### 4. Seed Database (Optional)
```bash
cd backend
npx prisma db push
npx prisma db seed
```

### 5. Build for Production
```bash
# Backend
cd backend
npm run build

# Frontend
cd frontend
npm run build
```

---

## 📊 API Testing Guide

### Testing with Browser (GET requests only)

✅ **These work in browser**:
```
http://localhost:5000/api/blogs
http://localhost:5000/api/projects
http://localhost:5000/api/testimonials
http://localhost:5000/api/resume
http://localhost:5000/api/chatbot/suggested-questions
http://localhost:5000/api/chatbot/faq
```

### Testing with Tools (POST/PUT/DELETE)

**Install Tools**:
- Postman (Desktop app)
- Thunder Client (VSCode extension)
- Insomnia (Desktop app)

**Example using Thunder Client**:
1. Install Thunder Client in VSCode
2. Click Thunder Client icon
3. New Request
4. Set Method (POST/GET/etc.)
5. Enter URL: `http://localhost:5000/api/auth/login`
6. Add Body (JSON)
7. Click Send

---

## 🔒 Protected Routes

### How to Access Protected Routes

**Step 1**: Get JWT Token
```json
POST /api/auth/login
{
  "email": "admin@portfolio.com",
  "password": "Admin@123"
}
```

**Step 2**: Use Token in Headers
```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

**Example**: Get All Messages (Protected)
```
Method: GET
URL: http://localhost:5000/api/messages
Headers:
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📦 Tech Stack Summary

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **HTTP Client**: Axios

### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: SQLite (Prisma ORM)
- **Authentication**: JWT + bcryptjs
- **AI Integration**: Gemini 2.0 (OpenRouter)
- **Email**: Nodemailer (Gmail SMTP)

---

## 📱 Frontend Routes Summary

### Public Routes
```
/                    → Home
/projects            → Projects Gallery
/blog                → Blog Listing
/blog/[slug]         → Blog Detail
/about               → About Page
/contact             → Contact Form
/login               → Admin Login
```

### Protected Routes
```
/admin               → Dashboard
/admin/blogs         → Manage Blogs
/admin/projects      → Manage Projects
/admin/testimonials  → Manage Testimonials
/admin/messages      → View Messages
```

---

## 🎯 API Endpoints Summary

### Public Endpoints (No Auth)
```
GET    /api/blogs
GET    /api/blogs/:slug
GET    /api/projects
GET    /api/testimonials
GET    /api/resume
POST   /api/chatbot/chat
GET    /api/chatbot/suggested-questions
GET    /api/chatbot/faq
POST   /api/chat
POST   /api/contact
```

### Protected Endpoints (Auth Required)
```
POST   /api/auth/login
GET    /api/messages
POST   /api/blogs
PUT    /api/blogs/:id
DELETE /api/blogs/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
POST   /api/testimonials
PUT    /api/testimonials/:id
DELETE /api/testimonials/:id
POST   /api/resume
```

---

**🏆 Your portfolio is production-ready and fully documented!**

*Last Updated: December 26, 2025*
