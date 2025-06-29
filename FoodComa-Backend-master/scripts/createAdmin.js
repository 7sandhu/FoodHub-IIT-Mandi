const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Import your user schema
const User = require('../src/schema/userSchema');

async function createAdminUser() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await User.findOne({ role: 'ADMIN' });
        if (existingAdmin) {
            console.log('Admin user already exists:', existingAdmin.email);
            return;
        }

        // Create admin user
        const hashedPassword = await bcrypt.hash('admin123', 10);
        
        const adminUser = new User({
            firstName: 'adminuser',
            lastName: 'administrator',
            mobileNumber: '9999999999',
            email: 'admin@zestyzing.com',
            password: hashedPassword,
            role: 'ADMIN',
            address: 'Admin Office'
        });

        await adminUser.save();
        console.log('Admin user created successfully!');
        console.log('Email: admin@zestyzing.com');
        console.log('Password: admin123');
        
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

createAdminUser();
