Infocera IT — Corporate Website

A full-stack corporate website for Infocera IT, built using HTML, CSS, JavaScript, and Node.js with MongoDB integration.


---

Overview

Infocera IT provides enterprise-grade solutions in:

Web & Mobile Development

Cloud & DevOps

AI/ML & Data Analytics

Digital Marketing

Software Testing & Consulting



---

Project Structure

/
├── index.html
├── about.html
├── services.html
├── technologies.html
├── industries.html
├── portfolio.html
├── blog.html
├── careers.html
├── contact.html
├── login.html
├── services/
├── technologies/
├── industries/
├── assets/
├── backend/


---

Technology Stack

Frontend

HTML5, CSS3, JavaScript


Backend

Node.js, Express


Database

MongoDB Atlas


Other Tools

JWT Authentication

REST APIs



---

Key Features

Responsive static frontend

Backend API integration

User authentication (JWT)

Contact form handling

Blog & job management APIs



---

Running the Project

Local Development

Frontend

http://localhost:3000

Backend

http://localhost:5000

Start Backend

cd backend
npm install
npm run dev

Start Frontend

npx serve . -p 3000


---

API Endpoints

Function	Endpoint

Health Check	/api/health
Authentication	/api/auth
Contact Form	/api/contact
Blog	/api/blog


Example:

await window.API.auth.login({
  email: "user@example.com",
  password: "password123"
});


---

Configuration

backend/.env

MONGODB_URI=<your_mongodb_uri>
PORT=5000
JWT_SECRET=<your_secret>
FRONTEND_URL=http://localhost:3000


---

Deployment

Production URLs

Frontend: https://live-project-infocera-redesign.vercel.app

Backend: https://live-project-infocera-redesign.onrender.com



---

Troubleshooting

Install dependencies if backend fails:


npm install

Ensure MongoDB credentials are correct in .env

Free ports if already in use:


taskkill /PID <PID> /F


---

Status

Frontend: Running

Backend: Running

Database: Connected



---

Summary

This project delivers a complete corporate website with:

Static UI

REST API backend

Database integration

Authentication & form handling



