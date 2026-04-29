# Infocera IT — Corporate Website

A fully static corporate website for **Infocera IT**, a leading IT services provider. Built with plain HTML, CSS, and JavaScript — no build step required.

**🚀 NEW: Backend API now available!** See [Quick Start](#backend-setup-optional---for-forms-and-authentication) below.

---

## Overview

Infocera IT delivers enterprise technology solutions including web development, mobile apps, cloud infrastructure, AI/ML, digital marketing, and data analytics.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — hero, tech stack, services, insights, CTA, footer |
| `about.html` | Company overview |
| `services.html` | Services listing |
| `technologies.html` | Technologies overview |
| `industries.html` | Industries served |
| `portfolio.html` | Project portfolio |
| `blog.html` | Blog / insights |
| `careers.html` | Job openings |
| `contact.html` | Contact form |
| `login.html` | My Account / login |

---

## Services Covered

- **Mobile Apps** — Native, Hybrid, Xamarin, Windows App Development
- **Online Marketing** — SEO, SEM, Social Media, PPC, Digital Marketing, Brand Consulting
- **Web Development** — E-commerce, WordPress, PHP, Custom Web Development
- **Creative Design** — UI/UX, Logo, Brochure, Creative Design
- **Consulting** — Software, NetSuite, SharePoint, Recruitment
- **Data Science** — AI & Machine Learning, Data Analytics
- **Testing** — Software, Security, Performance Testing

---

## Technologies Featured

- **UI / Frontend** — HTML5/CSS3, React, AngularJS, jQuery, Drupal, Joomla, WordPress, AR/VR
- **Backend** — PHP, Python, Node.js, Java (Spring, Hibernate, Struts), Perl, Shell
- **Cloud** — AWS, Google Cloud
- **Databases** — Oracle, SQL Server, MongoDB, Redis, Cassandra
- **Web Servers** — Apache, Tomcat, JBoss, IIS
- **DevOps / Process** — Docker, Kubernetes, Deployment Automation, SDLC
- **Testing** — Unit, Integration, System Testing, Java Testing (JUnit, TestNG, Mockito)

---

## Industries

Automotive, E-commerce, Education, Finance, Gaming, Healthcare, Manufacturing, Real Estate, Retail

---

## Project Structure

```
/
├── index.html                  # Homepage
├── about.html
├── blog.html
├── careers.html
├── contact.html
├── login.html
├── portfolio.html
├── services.html
├── technologies.html
├── industries.html
├── services/                   # Individual service pages (30 pages)
├── technologies/               # Individual technology pages (38 pages)
├── industries/                 # Individual industry pages (9 pages)
└── assets/
    ├── index-CQMqLKVC.css      # Main stylesheet (from React build)
    ├── index-BQTxH1gJ.js       # React bundle (used on some pages)
    ├── patch_navbar4a65.js     # Navbar patch script
    ├── patch_clients93ac.js    # Clients section patch
    ├── patch_stats93ac.js      # Stats section patch
    └── patch_testimonials93ac.js # Testimonials patch
```

---

## Tech Used

HTML5, CSS3, JavaScript, Google Fonts (Inter, Orbitron, Exo)

---

## 🚀 How to Run Everything

### Quick Start (Easiest Way)

**Everything is already running!** ✅

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **Database:** MongoDB Atlas (Connected)

Just open your browser and go to: **http://localhost:3000**

---

### If You Need to Restart

#### Option 1: One-Click Start (Windows)
```bash
# Double-click this file:
RUN_EVERYTHING.bat
```

#### Option 2: Manual Start

**Step 1: Start Backend** (Terminal 1)
```bash
cd backend
npm run dev
```
✅ You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

**Step 2: Start Frontend** (Terminal 2 - New Window)
```bash
npx serve . -p 3000
```
✅ Frontend will run on: http://localhost:3000

**Step 3: Open Browser**
```
http://localhost:3000
```

---

### Test Everything Works

**Option 1: Test Page**
- Open: http://localhost:3000/test-backend.html
- Click "Test Backend Connection"
- All tests should show ✅ SUCCESS

**Option 2: Try the Website**
1. Go to: http://localhost:3000
2. Click "Contact Us"
3. Fill and submit the form
4. Check backend terminal - you'll see the submission!

**Option 3: Try Login**
1. Go to: http://localhost:3000/login.html
2. Click "Create Account"
3. Fill the form and register
4. Login with your credentials

---

### What's Running

| Component | Status | URL | Purpose |
|-----------|--------|-----|---------|
| **Frontend** | ✅ Running | http://localhost:3000 | Website UI |
| **Backend** | ✅ Running | http://localhost:5000 | API Server |
| **Database** | ✅ Connected | MongoDB Atlas | Data Storage |

---

### Available Pages

- **Homepage:** http://localhost:3000
- **About:** http://localhost:3000/about.html
- **Services:** http://localhost:3000/services.html
- **Technologies:** http://localhost:3000/technologies.html
- **Portfolio:** http://localhost:3000/portfolio.html
- **Careers:** http://localhost:3000/careers.html
- **Contact:** http://localhost:3000/contact.html
- **Login:** http://localhost:3000/login.html
- **Test Backend:** http://localhost:3000/test-backend.html

---

### API Endpoints

**Test these in browser:**
- Health Check: http://localhost:5000/api/health
- Root: http://localhost:5000

**Use in code:**
```javascript
// Contact form
await window.API.contact.submit({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "+91-9999999999",
  message: "Hello!"
});

// Register user
await window.API.auth.register({
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@example.com",
  password: "password123"
});

// Login
await window.API.auth.login({
  email: "jane@example.com",
  password: "password123"
});
```

---

### Stop Everything

**Stop Backend:**
- Go to backend terminal
- Press `Ctrl + C`

**Stop Frontend:**
- Go to frontend terminal
- Press `Ctrl + C`

---

### Troubleshooting

**Backend won't start?**
```bash
cd backend
npm install
npm run dev
```

**Frontend won't start?**
```bash
npx serve . -p 3000
```

**Port already in use?**
```bash
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**MongoDB connection failed?**
- Check `backend/.env` file
- Verify password is: `r5R70IchQBjxT1BQ`

---

### Configuration Files

**Backend Config:** `backend/.env`
```env
MONGODB_URI=mongodb+srv://rakesholipalli36_db_user:r5R70IchQBjxT1BQ@cluster0.gvijk34.mongodb.net/infocera?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
JWT_SECRET=infocera_secret_key_2024_production_secure_key
FRONTEND_URL=http://localhost:3000
```

**Frontend API:** `assets/api-client.js`
```javascript
const API_URL = 'http://localhost:5000/api';
```

---

### Quick Commands

```bash
# Check backend status
curl http://localhost:5000/api/health

# Check frontend
curl http://localhost:3000

# View backend logs
cd backend && npm run dev

# View processes
# Windows: tasklist | findstr node
# Mac/Linux: ps aux | grep node
```

---

## ✅ Everything is Ready!

Your full-stack Infocera website is running with:
- ✅ Frontend (HTML/CSS/JS)
- ✅ Backend (Node.js/Express)
- ✅ Database (MongoDB Atlas)
- ✅ Authentication (JWT)
- ✅ Contact Forms
- ✅ User Management

**Just open:** http://localhost:3000

**Enjoy! 🎉**

The backend provides API endpoints for contact forms, job applications, user authentication, and blog management.

#### Prerequisites
- Node.js installed
- MongoDB Atlas account (free tier works)

#### Steps:

1. **Get MongoDB Password**
   - Go to https://cloud.mongodb.com
   - Navigate to your cluster
   - Database Access → Edit User → Get/Reset Password
   - Copy the password

2. **Update .env file**
   ```bash
   cd backend
   ```
   
   Edit `backend/.env` and replace `YOUR_PASSWORD_HERE` with your actual MongoDB password:
   ```
   MONGODB_URI=mongodb+srv://rakesholipalli36_db_user:YOUR_ACTUAL_PASSWORD@cluster0.gvijk34.mongodb.net/infocera?retryWrites=true&w=majority
   ```

3. **Install dependencies** (already done)
   ```bash
   npm install
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```
   
   You should see:
   ```
   ✅ MongoDB connected
   🚀 Server running on port 5000
   📍 API URL: http://localhost:5000
   ```

5. **Test the connection**
   - Open `test-backend.html` in your browser
   - Click "Test Backend Connection"
   - Try submitting test forms

#### Backend Features:
- ✅ Contact form submissions
- ✅ User registration & authentication
- ✅ Job applications
- ✅ Blog posts & comments
- ✅ Admin dashboard APIs

For detailed API documentation, see `backend/API_DOCUMENTATION.md`

---

## Live Demo

Live Demo: https://prodesk-it-internship-ipi2.vercel.app/
