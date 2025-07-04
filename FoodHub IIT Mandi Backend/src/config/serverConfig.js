const dotenv = require('dotenv');
dotenv.config();

// Validate required environment variables
if (!process.env.DB_URL) {
    console.error('ERROR: DB_URL environment variable is required');
    process.exit(1);
}

if (!process.env.JWT_SECRET) {
    console.error('ERROR: JWT_SECRET environment variable is required');
    process.exit(1);
}

// Here we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT || 8080,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
    FRONTEND_URL: process.env.FRONTEND_URL || 'https://7sandhu.github.io',
    COOKIE_SECURE: process.env.COOKIE_SECURE || 'false',
}