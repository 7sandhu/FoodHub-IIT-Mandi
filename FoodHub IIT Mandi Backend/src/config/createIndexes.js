const mongoose = require('mongoose');

/**
 * Create database indexes for better query performance
 */
async function createIndexes() {
    try {
        const db = mongoose.connection.db;
        
        // Check if indexes already exist before creating them
        const collections = await db.collections();
        
        // Product indexes
        try {
            await db.collection('products').createIndex({ inStock: 1 });
        } catch (error) {
            if (error.code !== 86) console.log('Product inStock index may already exist');
        }
        
        try {
            await db.collection('products').createIndex({ category: 1 });
        } catch (error) {
            if (error.code !== 86) console.log('Product category index may already exist');
        }
        
        try {
            await db.collection('products').createIndex({ productName: 'text', description: 'text' });
        } catch (error) {
            if (error.code !== 86) console.log('Product text index may already exist');
        }
        
        // Cart indexes
        try {
            await db.collection('carts').createIndex({ user: 1 });
        } catch (error) {
            if (error.code !== 86) console.log('Cart user index may already exist');
        }
        
        // Order indexes
        try {
            await db.collection('orders').createIndex({ user: 1 });
        } catch (error) {
            if (error.code !== 86) console.log('Order user index may already exist');
        }
        
        try {
            await db.collection('orders').createIndex({ createdAt: -1 });
        } catch (error) {
            if (error.code !== 86) console.log('Order createdAt index may already exist');
        }
        
        // User indexes
        try {
            await db.collection('users').createIndex({ email: 1 }, { unique: true });
        } catch (error) {
            if (error.code !== 86) console.log('User email index may already exist');
        }
        
        console.log('Database indexes checked/created successfully');
    } catch (error) {
        console.log('Index creation warning:', error.message);
    }
}

module.exports = createIndexes;
