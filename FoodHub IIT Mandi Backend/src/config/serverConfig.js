const dotenv = require('dotenv');
dotenv.config();

// Validate required environment variables
if (!process.env.DB_URL) {
    process.exit(1);
}

if (!process.env.JWT_SECRET) {
    process.exit(1);
}

// Here we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT || 8080,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
    FRONTEND_URL: 'https://7sandhu.github.io', // force correct origin
    COOKIE_SECURE: true, // Always true for production HTTPS
}