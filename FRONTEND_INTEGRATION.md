# Frontend Integration Guide

This guide shows you how to connect your Infocera HTML frontend to the MongoDB backend.

## Step 1: Add JavaScript Utilities

Create a file `assets/api.js` in your frontend:

```javascript
// Configuration
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://infocera-backend.vercel.app/api'
  : 'http://localhost:5000/api';

// Helper function for API calls
async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API Error');
  }

  return response.json();
}

// Authentication
export const auth = {
  register: (data) => apiCall('/auth/register', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  }),
  
  login: (data) => apiCall('/auth/login', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  }),
  
  getCurrentUser: () => apiCall('/auth/me'),
  
  logout: () => localStorage.removeItem('token')
};

// Contact Form
export const contact = {
  submit: (data) => apiCall('/contact', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  })
};

// Job Applications
export const jobs = {
  apply: (data) => apiCall('/jobs', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  })
};

// Blog
export const blog = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params);
    return apiCall(`/blog?${query}`);
  },
  
  getBySlug: (slug) => apiCall(`/blog/slug/${slug}`),
  
  create: (data) => apiCall('/blog', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  }),
  
  addComment: (blogId, data) => apiCall(`/blog/${blogId}/comments`, { 
    method: 'POST', 
    body: JSON.stringify(data) 
  })
};
```

## Step 2: Connect Contact Form

In your `contact.html` or JavaScript that handles the contact form:

```javascript
import { contact } from './assets/api.js';

async function handleContactSubmit(event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    company: document.getElementById('company').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    service: document.getElementById('service').value,
    budget: document.getElementById('budget').value,
    timeline: document.getElementById('timeline').value
  };

  try {
    const response = await contact.submit(formData);
    alert('Thank you! Your message has been sent.');
    document.getElementById('contactForm').reset();
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

// Attach to form
document.getElementById('contactForm')?.addEventListener('submit', handleContactSubmit);
```

## Step 3: Connect Job Application Form

```javascript
import { jobs } from './assets/api.js';

async function handleJobApplication(event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    jobPosition: document.getElementById('jobPosition').value,
    coverLetter: document.getElementById('coverLetter').value,
    skills: document.getElementById('skills').value.split(',').map(s => s.trim()),
    linkedin: document.getElementById('linkedin').value,
    portfolio: document.getElementById('portfolio').value,
    expectedSalary: document.getElementById('salary').value,
    noticePeriod: document.getElementById('noticePeriod').value
  };

  try {
    const response = await jobs.apply(formData);
    alert('Application submitted successfully!');
    document.getElementById('jobForm').reset();
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

document.getElementById('jobForm')?.addEventListener('submit', handleJobApplication);
```

## Step 4: Connect Login/Authentication

```javascript
import { auth } from './assets/api.js';

async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await auth.login({ email, password });
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    
    alert('Login successful!');
    window.location.href = '/dashboard'; // Redirect to dashboard
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
}

async function handleRegister(event) {
  event.preventDefault();

  const data = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    phone: document.getElementById('phone').value,
    company: document.getElementById('company').value
  };

  try {
    const response = await auth.register(data);
    localStorage.setItem('token', response.token);
    alert('Registration successful!');
    window.location.href = '/login';
  } catch (error) {
    alert('Registration failed: ' + error.message);
  }
}

document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
```

## Step 5: Display Blog Posts

```javascript
import { blog } from './assets/api.js';

async function loadBlogPosts() {
  try {
    const posts = await blog.getAll({ published: 'true' });
    
    const blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = posts.map(post => `
      <article class="blog-post">
        <h2>${post.title}</h2>
        <p class="excerpt">${post.excerpt}</p>
        <a href="/blog/${post.slug}">Read More →</a>
      </article>
    `).join('');
  } catch (error) {
    console.error('Error loading blogs:', error);
  }
}

// Load blogs when page loads
window.addEventListener('DOMContentLoaded', loadBlogPosts);
```

## Step 6: Display Single Blog Post

```javascript
import { blog } from './assets/api.js';

async function loadBlogPost() {
  const slug = window.location.pathname.split('/').pop();
  
  try {
    const post = await blog.getBySlug(slug);
    
    document.getElementById('title').innerHTML = post.title;
    document.getElementById('author').innerHTML = `By ${post.author.firstName} ${post.author.lastName}`;
    document.getElementById('content').innerHTML = post.content;
    
    loadComments(post._id, post.comments);
  } catch (error) {
    document.body.innerHTML = '<h1>Blog post not found</h1>';
  }
}

async function loadComments(blogId, comments) {
  const commentsHtml = comments.map(c => `
    <div class="comment">
      <strong>${c.author}</strong>
      <p>${c.text}</p>
    </div>
  `).join('');
  
  document.getElementById('comments').innerHTML = commentsHtml;
}

async function handleAddComment(event) {
  event.preventDefault();
  
  const slug = window.location.pathname.split('/').pop();
  const postData = await blog.getBySlug(slug);
  
  const data = {
    author: document.getElementById('commentName').value,
    email: document.getElementById('commentEmail').value,
    text: document.getElementById('commentText').value
  };
  
  try {
    await blog.addComment(postData._id, data);
    alert('Comment added!');
    location.reload();
  } catch (error) {
    alert('Error adding comment: ' + error.message);
  }
}

document.getElementById('commentForm')?.addEventListener('submit', handleAddComment);

// Load on page load
window.addEventListener('DOMContentLoaded', loadBlogPost);
```

## Form HTML Example

```html
<!-- Contact Form -->
<form id="contactForm">
  <input type="text" id="firstName" placeholder="First Name" required>
  <input type="text" id="lastName" placeholder="Last Name" required>
  <input type="email" id="email" placeholder="Email" required>
  <input type="tel" id="phone" placeholder="Phone" required>
  <input type="text" id="company" placeholder="Company">
  <input type="text" id="subject" placeholder="Subject">
  <textarea id="message" placeholder="Message" required></textarea>
  <button type="submit">Send Message</button>
</form>

<!-- Job Application Form -->
<form id="jobForm">
  <input type="text" id="firstName" placeholder="First Name" required>
  <input type="text" id="lastName" placeholder="Last Name" required>
  <input type="email" id="email" placeholder="Email" required>
  <input type="tel" id="phone" placeholder="Phone" required>
  <input type="text" id="jobPosition" placeholder="Job Position" required>
  <textarea id="coverLetter" placeholder="Cover Letter"></textarea>
  <input type="text" id="skills" placeholder="Skills (comma separated)">
  <input type="url" id="linkedin" placeholder="LinkedIn Profile">
  <input type="url" id="portfolio" placeholder="Portfolio URL">
  <input type="text" id="salary" placeholder="Expected Salary">
  <button type="submit">Apply Now</button>
</form>

<!-- Login Form -->
<form id="loginForm">
  <input type="email" id="email" placeholder="Email" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Sign In</button>
</form>
```

## Environment Variables

Create `.env` file in your frontend:

```
VITE_API_URL=http://localhost:5000/api
```

Or for Vercel deployment:

```
VITE_API_URL=https://infocera-backend.vercel.app/api
```

## Testing

1. Start backend: `npm run dev` (in backend folder)
2. Load frontend in browser
3. Test form submissions
4. Check MongoDB Atlas for new records

## Next Steps

1. Create admin dashboard to view submissions
2. Set up email notifications
3. Add file upload for resumes
4. Implement user account management
5. Add blog management interface

---

For backend details, see `backend/API_DOCUMENTATION.md`
