// Test frontend connection to backend
console.log('Testing frontend-backend connection...');

// Test if we can reach the backend from frontend context
fetch('http://localhost:8080/products')
  .then(response => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Products API response:', data);
    console.log('Success:', data.success);
    console.log('Number of products:', data.data?.length || 0);
  })
  .catch(error => {
    console.error('Connection error:', error);
  });

// Test CORS by making a login request
fetch('http://localhost:8080/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({
    email: 'admin@zestyzing.com',
    password: 'admin123'
  })
})
  .then(response => {
    console.log('Login response status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Login API response:', data);
  })
  .catch(error => {
    console.error('Login error:', error);
  });
