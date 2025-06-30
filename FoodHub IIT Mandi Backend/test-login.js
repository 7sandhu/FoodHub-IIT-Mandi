// Simple test to debug login response
const https = require('https');

const data = JSON.stringify({
    email: 'admin@zestyzing.com',
    password: 'admin123'
});

const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/auth/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = require('http').request(options, (res) => {
    let responseData = '';
    
    res.on('data', (chunk) => {
        responseData += chunk;
    });
    
    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        console.log('Full Response:', responseData);
        try {
            const parsed = JSON.parse(responseData);
            console.log('Parsed Response:', JSON.stringify(parsed, null, 2));
            console.log('Success:', parsed.success);
            console.log('User Role:', parsed.data?.userRole);
            console.log('User Data:', parsed.data?.userData);
        } catch (e) {
            console.log('Could not parse JSON');
        }
    });
});

req.on('error', (error) => {
    console.error('Request Error:', error);
});

req.write(data);
req.end();
