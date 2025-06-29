const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Import your user schema
const User = require('../src/schema/userSchema');

async function resetAdminPassword() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Find and update admin password
        const hashedPassword = await bcrypt.hash('admin123', 10);
        
        const result = await User.updateOne(
            { email: 'admin@zestyzing.com' },
            { password: hashedPassword }
        );

        if (result.modifiedCount > 0) {
            console.log('Admin password updated successfully!');
            console.log('Email: admin@zestyzing.com');
            console.log('Password: admin123');
        } else {
            console.log('Admin user not found, creating new one...');
            
            // Delete existing admin if any issues
            await User.deleteOne({ email: 'admin@zestyzing.com' });
            
            // Create new admin
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
            console.log('New admin user created successfully!');
        }
        
    } catch (error) {
        console.error('Error updating admin password:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

resetAdminPassword();
