/**
 * Infocera Backend API Client
 * Handles all API calls to the backend server
 */

// Configuration - Change based on environment
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : 'https://infocera-backend.vercel.app/api';

console.log('API URL:', API_URL);

/**
 * Helper function for all API calls
 */
async function apiCall(endpoint, options = {}) {
  try {
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
      throw new Error(error.error || `API Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * Authentication API
 */
const auth = {
  register: async (data) => {
    console.log('Registering user...', data);
    return apiCall('/auth/register', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  },
  
  login: async (data) => {
    console.log('Logging in...', data.email);
    return apiCall('/auth/login', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  },
  
  getCurrentUser: async () => {
    return apiCall('/auth/me');
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('Logged out');
  }
};

/**
 * Contact Form API
 */
const contact = {
  submit: async (data) => {
    console.log('Submitting contact form...', data);
    return apiCall('/contact', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  }
};

/**
 * Job Applications API
 */
const jobs = {
  apply: async (data) => {
    console.log('Submitting job application...', data);
    return apiCall('/jobs', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  }
};

/**
 * Blog API
 */
const blog = {
  getAll: async (params = {}) => {
    const query = new URLSearchParams(params);
    return apiCall(`/blog?${query}`);
  },
  
  getBySlug: async (slug) => {
    return apiCall(`/blog/slug/${slug}`);
  },
  
  create: async (data) => {
    return apiCall('/blog', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  },
  
  addComment: async (blogId, data) => {
    return apiCall(`/blog/${blogId}/comments`, { 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  }
};

/**
 * Export all APIs
 */
window.API = {
  auth,
  contact,
  jobs,
  blog
};

// Test API connection
window.addEventListener('load', async () => {
  try {
    const response = await fetch(`${API_URL.replace('/api', '')}/api/health`);
    const data = await response.json();
    console.log('✅ Backend Connection Status:', data);
  } catch (error) {
    console.error('❌ Backend Connection Failed:', error);
  }
});
