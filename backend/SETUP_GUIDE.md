# Infocera Backend Setup Guide

## Quick Start

### Step 1: MongoDB Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up/Log in to your account
3. Create a new cluster
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env and add your MongoDB URI
# Also set a strong JWT_SECRET (any random string for now)
```

### Step 3: Update .env File

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your-secret-key-here
FRONTEND_URL=http://localhost:3000
VERCEL_URL=https://your-vercel-domain.vercel.app
```

### Step 4: Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
📍 API URL: http://localhost:5000
```

---

## Testing the Backend

### Test Health Check
```bash
curl http://localhost:5000/api/health
```

### Test Contact Submission
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+91-9999999999",
    "message": "Test message"
  }'
```

### Test User Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "password": "password123"
  }'
```

---

## Connect Frontend to Backend

Update your frontend JavaScript to call these endpoints:

```javascript
const API_URL = 'http://localhost:5000/api';

// Example: Submit contact form
async function submitContactForm(data) {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

---

## File Structure

```
backend/
├── server.js                 # Main application file
├── package.json              # Dependencies
├── .env                       # Environment variables (create from .env.example)
├── .env.example               # Example environment file
├── models/                    # MongoDB schemas
│   ├── User.js
│   ├── Contact.js
│   ├── JobApplication.js
│   └── Blog.js
├── routes/                    # API routes
│   ├── auth.routes.js
│   ├── contact.routes.js
│   ├── jobs.routes.js
│   ├── blog.routes.js
│   └── users.routes.js
├── controllers/               # Business logic
│   ├── authController.js
│   ├── contactController.js
│   ├── jobController.js
│   └── blogController.js
└── middleware/                # Custom middleware
    └── auth.js                # JWT authentication
```

---

## Available Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts (admin) |
| POST | `/api/jobs` | Submit job application |
| GET | `/api/jobs` | Get all applications (admin) |
| GET | `/api/blog` | Get all blogs |
| POST | `/api/blog` | Create blog (auth) |
| GET | `/api/blog/slug/:slug` | Get blog by slug |

---

## Common Issues

### MongoDB Connection Failed
- Check MongoDB URI in .env
- Ensure MongoDB cluster is active
- Verify IP whitelist in MongoDB Atlas

### Port Already in Use
```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or use different port
PORT=5001 npm run dev
```

### JWT Token Invalid
- Ensure JWT_SECRET is set in .env
- Token expires in 7 days by default

---

## Next Steps

1. Connect your frontend HTML forms to these endpoints
2. Implement admin dashboard for managing submissions
3. Set up email notifications
4. Deploy backend to Vercel or Render
5. Implement file uploads for resumes

---

For detailed API documentation, see `API_DOCUMENTATION.md`
