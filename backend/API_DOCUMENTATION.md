# Infocera Backend API Documentation

## Setup Instructions

### 1. Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas cloud)
- Git

### 2. Installation

```bash
cd backend
npm install
```

### 3. Environment Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/infocera?retryWrites=true&w=majority
```

### 4. Running the Server

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

Server will run on `http://localhost:5000`

---

## API Endpoints

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+91-9999999999",
  "company": "Tech Corp"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "userId",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

---

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "userId",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "isAdmin": false
  }
}
```

---

#### Get Current User
```
GET /api/auth/me
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "_id": "userId",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91-9999999999",
  "company": "Tech Corp",
  "isAdmin": false,
  "createdAt": "2024-01-01T00:00:00Z"
}
```

---

### Contact Form Endpoints

#### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+91-8888888888",
  "company": "Company Name",
  "subject": "Web Development Inquiry",
  "message": "We are interested in your web development services",
  "service": "web-development",
  "budget": "$10,000 - $25,000",
  "timeline": "3 months"
}
```

**Response (201):**
```json
{
  "message": "Contact form submitted successfully",
  "contact": {
    "_id": "contactId",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "status": "new",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

---

#### Get All Contacts (Admin)
```
GET /api/contact
Authorization: Bearer {admin_token}
```

---

#### Update Contact Status (Admin)
```
PATCH /api/contact/{contactId}
Authorization: Bearer {admin_token}
Content-Type: application/json

{
  "status": "viewed",
  "responseNote": "We will contact you soon"
}
```

---

### Job Application Endpoints

#### Submit Job Application
```
POST /api/jobs
Content-Type: application/json

{
  "firstName": "Alex",
  "lastName": "Johnson",
  "email": "alex@example.com",
  "phone": "+91-7777777777",
  "jobPosition": "Senior Developer",
  "coverLetter": "I am interested in this position...",
  "skills": ["Node.js", "React", "MongoDB"],
  "linkedin": "https://linkedin.com/in/alexjohnson",
  "portfolio": "https://alexportfolio.com",
  "expectedSalary": "$80,000 - $100,000",
  "noticePeriod": "2 weeks"
}
```

**Response (201):**
```json
{
  "message": "Job application submitted successfully",
  "application": {
    "_id": "applicationId",
    "firstName": "Alex",
    "jobPosition": "Senior Developer",
    "status": "applied",
    "appliedAt": "2024-01-01T00:00:00Z"
  }
}
```

---

#### Get All Job Applications (Admin)
```
GET /api/jobs
Authorization: Bearer {admin_token}
```

---

#### Update Application Status (Admin)
```
PATCH /api/jobs/{applicationId}
Authorization: Bearer {admin_token}
Content-Type: application/json

{
  "status": "shortlisted",
  "reviewNotes": "Good candidate, invite for interview",
  "interviewDate": "2024-02-15T10:00:00Z"
}
```

---

### Blog Endpoints

#### Create Blog Post (Authenticated)
```
POST /api/blog
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Latest Web Development Trends",
  "content": "Blog content here...",
  "excerpt": "Short summary",
  "category": "Technology",
  "tags": ["web", "development", "trends"],
  "featuredImage": "image_url"
}
```

---

#### Get All Published Blogs
```
GET /api/blog?published=true&category=Technology
```

---

#### Get Blog by Slug
```
GET /api/blog/slug/latest-web-development-trends
```

---

#### Add Comment to Blog
```
POST /api/blog/{blogId}/comments
Content-Type: application/json

{
  "author": "John Doe",
  "email": "john@example.com",
  "text": "Great article!"
}
```

---

#### Publish Blog (Authenticated)
```
PATCH /api/blog/{blogId}/publish
Authorization: Bearer {token}
```

---

## Frontend Integration

### Example: Contact Form Submission

```javascript
async function submitContact(formData) {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Example: User Login

```javascript
async function login(email, password) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Database Schema

### User
- firstName, lastName, email (unique), password, phone, company, jobTitle, profileImage, isAdmin

### Contact
- firstName, lastName, email, phone, company, subject, message, service, budget, timeline, status, responseNote

### JobApplication
- firstName, lastName, email, phone, jobPosition, resume, coverLetter, experience, skills, linkedin, portfolio, expectedSalary, noticePeriod, status, interviewDate

### Blog
- title, slug, author (ref), content, excerpt, category, tags, featuredImage, views, likes, comments, published

---

## Deployment

### Deploy to Vercel (Node.js)

1. Create `vercel.json`:
```json
{
  "buildCommand": "npm install",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

2. Push to GitHub and connect to Vercel

3. Set environment variables in Vercel dashboard

---

## Error Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## Support

For issues or questions, please refer to the main README or contact the development team.
