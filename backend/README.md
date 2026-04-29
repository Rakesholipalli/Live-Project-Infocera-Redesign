# Infocera Backend

A complete Node.js + Express + MongoDB backend for the Infocera IT corporate website.

## Features

✅ **User Authentication** - JWT-based login/registration
✅ **Contact Form Management** - Store and manage contact submissions
✅ **Job Applications** - Handle job application submissions
✅ **Blog System** - Create, publish, and manage blog posts
✅ **User Profiles** - Manage user information
✅ **Admin Dashboard Ready** - Pre-built for future dashboard integration
✅ **CORS Enabled** - Works with Vercel and local frontend
✅ **MongoDB Atlas Compatible** - Cloud database support

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### 3. Start Server
```bash
npm run dev      # Development with auto-reload
npm start        # Production mode
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (auth)
- `PATCH /api/contact/:id` - Update status (auth)

### Jobs
- `POST /api/jobs` - Submit job application
- `GET /api/jobs` - Get all applications (auth)
- `PATCH /api/jobs/:id` - Update application (auth)

### Blog
- `POST /api/blog` - Create blog (auth)
- `GET /api/blog` - Get published blogs
- `GET /api/blog/slug/:slug` - Get blog by slug
- `POST /api/blog/:id/comments` - Add comment

## Documentation

- [API Documentation](./API_DOCUMENTATION.md) - Full endpoint reference
- [Setup Guide](./SETUP_GUIDE.md) - Detailed setup instructions

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **Email**: nodemailer

## Database Collections

1. **Users** - User accounts and profiles
2. **Contacts** - Contact form submissions
3. **JobApplications** - Job application submissions
4. **Blogs** - Blog posts and articles

## Environment Variables

```
MONGODB_URI          # MongoDB connection string
PORT                 # Server port (default: 5000)
JWT_SECRET           # Secret for JWT tokens
FRONTEND_URL         # Frontend URL for CORS
VERCEL_URL          # Vercel deployment URL
```

## Deployment

Ready to deploy on:
- ✅ Vercel
- ✅ Render
- ✅ Railway
- ✅ AWS
- ✅ Any Node.js hosting

See `SETUP_GUIDE.md` for deployment instructions.

## Frontend Integration Example

```javascript
// Login
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
const { token } = await response.json();

// Submit contact
await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(contactData)
});
```

## Project Structure

```
backend/
├── server.js              # Main application
├── package.json           # Dependencies
├── .env.example           # Environment template
├── models/                # MongoDB schemas
├── routes/                # API endpoints
├── controllers/            # Business logic
└── middleware/             # Authentication
```

## Support

For detailed instructions, check:
- Setup Guide: `SETUP_GUIDE.md`
- API Documentation: `API_DOCUMENTATION.md`

---

**Ready to build your admin dashboard and connect forms!** 🚀
