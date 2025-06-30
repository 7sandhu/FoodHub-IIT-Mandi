const mongoose = require('mongoose');
require('dotenv').config();

// Import your product schema
const Product = require('../src/schema/productSchema');

const sampleProducts = [
    {
        productName: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil",
        price: 12.99,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Pepperoni Pizza",
        description: "Delicious pizza topped with pepperoni slices and melted cheese",
        price: 15.99,
        category: "non-veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Chicken BBQ Pizza",
        description: "BBQ chicken with onions, bell peppers, and BBQ sauce",
        price: 18.99,
        category: "non-veg",
        quantity: 12,
        inStock: true
    },
    {
        productName: "Veggie Supreme",
        description: "Loaded with mushrooms, bell peppers, onions, olives, and tomatoes",
        price: 16.99,
        category: "veg",
        quantity: 18,
        inStock: true
    },
    {
        productName: "Garlic Bread",
        description: "Crispy bread sticks with garlic butter and herbs",
        price: 5.99,
        category: "sides",
        quantity: 30,
        inStock: true
    },
    {
        productName: "Coca Cola",
        description: "Refreshing cold drink - 330ml can",
        price: 2.99,
        category: "drinks",
        quantity: 50,
        inStock: true
    },
    {
        productName: "Buffalo Wings",
        description: "Spicy chicken wings with buffalo sauce",
        price: 9.99,
        category: "non-veg",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Caesar Salad",
        description: "Fresh romaine lettuce with caesar dressing and croutons",
        price: 7.99,
        category: "veg",
        quantity: 20,
        inStock: true
    }
];

async function addSampleProducts() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Clear existing products (optional)
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Add sample products
        const products = await Product.insertMany(sampleProducts);
        console.log(`Successfully added ${products.length} products!`);
        
        products.forEach(product => {
            console.log(`- ${product.productName} ($${product.price})`);
        });
        
    } catch (error) {
        console.error('Error adding products:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

addSampleProducts();
