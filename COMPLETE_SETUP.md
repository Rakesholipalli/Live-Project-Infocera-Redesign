# Infocera - Full Stack Setup Guide

Your complete corporate website now has both frontend and backend!

## 📂 Project Structure

```
Infocera Redesign/
├── Frontend (HTML/CSS/JS)
│   ├── index.html, about.html, contact.html, etc.
│   ├── assets/
│   └── services/, industries/, technologies/ folders
│
├── Backend (Node.js + MongoDB)
│   ├── server.js
│   ├── package.json
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
└── Documentation
    ├── FRONTEND_INTEGRATION.md
    ├── backend/README.md
    └── backend/SETUP_GUIDE.md
```

---

## 🚀 Quick Start (5 minutes)

### Prerequisites
- Node.js installed
- MongoDB Atlas account (free tier available)
- Git

### 1️⃣ Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add:
# - Your MongoDB URI from MongoDB Atlas
# - A random JWT_SECRET (any string)
```

### 2️⃣ Update MongoDB Atlas

1. Go to https://cloud.mongodb.com
2. Create cluster (free tier)
3. Copy connection string
4. Replace in `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/infocera?retryWrites=true&w=majority
```

### 3️⃣ Start Backend

```bash
npm run dev
```

You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

### 4️⃣ Test Backend

```bash
# In another terminal, test the API
curl http://localhost:5000/api/health
```

---

## 📝 Connect Your Forms

The backend is ready! Now connect your frontend forms.

### Contact Form Example

```javascript
// In your JavaScript
async function sendContact(formData) {
  const response = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    })
  });
  return response.json();
}
```

See `FRONTEND_INTEGRATION.md` for complete examples for:
- Contact forms
- Job applications  
- User authentication
- Blog posts

---

## 🗄️ MongoDB Collections

Your database automatically creates these collections:

| Collection | Purpose |
|-----------|---------|
| **users** | User accounts & profiles |
| **contacts** | Contact form submissions |
| **jobapplications** | Job applications |
| **blogs** | Blog posts & articles |

---

## 🔐 Authentication

JWT-based authentication for protected routes:

```javascript
// Login
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});

const { token } = await response.json();
localStorage.setItem('token', token);

// Use token for authenticated requests
fetch('http://localhost:5000/api/blog', {
  headers: { 'Authorization': `Bearer ${token}` }
});
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user (requires token)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - View all (requires token)
- `PATCH /api/contact/:id` - Update (requires token)

### Jobs
- `POST /api/jobs` - Submit application
- `GET /api/jobs` - View all (requires token)
- `PATCH /api/jobs/:id` - Update (requires token)

### Blog
- `GET /api/blog` - Get published blogs
- `POST /api/blog` - Create blog (requires token)
- `GET /api/blog/slug/:slug` - Get blog by slug
- `POST /api/blog/:id/comments` - Add comment

---

## 🌐 Deployment

### Deploy Backend to Vercel

1. Push backend folder to GitHub ✅ (already done)
2. Go to vercel.com and import project
3. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `FRONTEND_URL`
4. Deploy!

### Update Frontend

Change API URL in your JavaScript:

```javascript
// Production
const API_URL = 'https://your-backend.vercel.app/api';

// Or development
const API_URL = 'http://localhost:5000/api';
```

---

## 📊 Admin Dashboard (Next Steps)

Create an admin panel to manage:
- ✅ Contact submissions
- ✅ Job applications
- ✅ Blog posts
- ✅ User accounts

Example admin features:
```javascript
// View all contacts
GET /api/contact (with token)

// Update contact status
PATCH /api/contact/:id
{ "status": "responded", "responseNote": "..." }

// View job applications
GET /api/jobs (with token)

// Publish blog
PATCH /api/blog/:id/publish (with token)
```

---

## 🧪 Testing with Postman/Thunder Client

### Test Contact Submission
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91-9999999999",
  "message": "Test message"
}
```

### Test User Registration
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "password": "password123"
}
```

---

## ❓ Troubleshooting

### MongoDB Connection Failed
- Check MongoDB URI in .env
- Verify IP whitelist in MongoDB Atlas
- Ensure cluster is active

### CORS Error
- Backend already has CORS enabled for Vercel URLs
- Check `server.js` origin array if needed

### Port 5000 Already in Use
```bash
# Change port in .env
PORT=5001 npm run dev
```

---

## 📚 Documentation Files

- **FRONTEND_INTEGRATION.md** - How to connect forms to backend
- **backend/README.md** - Backend overview
- **backend/SETUP_GUIDE.md** - Detailed setup
- **backend/API_DOCUMENTATION.md** - Full API reference

---

## ✅ Checklist

- [x] Backend created with Node.js + Express
- [x] MongoDB integration ready
- [x] Authentication system (JWT)
- [x] Contact form API
- [x] Job application API
- [x] Blog system
- [x] User management
- [ ] Connect frontend forms (your turn!)
- [ ] Create admin dashboard
- [ ] Deploy backend
- [ ] Update frontend with API calls

---

## 🎯 Next Steps

1. **Test Backend** - Start server and test endpoints
2. **Connect Forms** - Follow FRONTEND_INTEGRATION.md
3. **Create Admin Panel** - Manage submissions
4. **Deploy Backend** - Push to Vercel
5. **Add Notifications** - Email on new submissions

---

## 💡 Features Ready to Use

✅ User registration & login
✅ JWT authentication
✅ Contact form handling
✅ Job application tracking
✅ Blog publishing system
✅ Admin management
✅ CORS enabled for production
✅ MongoDB cloud integration
✅ Error handling
✅ Input validation

---

## 🤝 Support

Need help? Check:
1. Backend logs in terminal
2. MongoDB Atlas error logs
3. Browser console for frontend errors
4. Check documentation files

---

**Your full-stack system is ready!** 🎉
Ready to connect forms and launch? Let me know!
