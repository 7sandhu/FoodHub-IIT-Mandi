const mongoose = require('mongoose');
require('dotenv').config();

// Import your product schema
const Product = require('../src/schema/productSchema');

const sampleProducts = [
    // Pizza Bite - Standard pizzas and specials
    {
        productName: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil",
        price: 180,
        category: "veg",
        quantity: 12,
        inStock: true
    },
    {
        productName: "Chicken Supreme Pizza",
        description: "Pizza Bite special with chicken, bell peppers, onions, and cheese",
        price: 220,
        category: "non-veg",
        quantity: 10,
        inStock: true
    },
    {
        productName: "Veggie Delight Pizza",
        description: "Loaded with mushrooms, capsicum, onions, tomatoes, and olives",
        price: 200,
        category: "veg",
        quantity: 12,
        inStock: true
    },

    // The Daig - Tandoor paratha, chaap, momos, chowmein
    {
        productName: "Tandoori Roti",
        description: "Fresh tandoor-baked roti with smoky flavor",
        price: 15,
        category: "veg",
        quantity: 50,
        inStock: true
    },
    {
        productName: "Soya Chaap",
        description: "Grilled soya chaap with tandoori spices and mint chutney",
        price: 80,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Chicken Momos (8 pcs)",
        description: "Steamed chicken dumplings served with spicy chutney",
        price: 80,
        category: "non-veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Veg Chowmein",
        description: "Stir-fried noodles with vegetables and sauces",
        price: 70,
        category: "veg",
        quantity: 20,
        inStock: true
    },

    // Griffon Canteen - Samosa, pateez, small items, budget-friendly
    {
        productName: "Samosa (2 pcs)",
        description: "Crispy fried samosa with mint and tamarind chutney",
        price: 20,
        category: "veg",
        quantity: 50,
        inStock: true
    },
    {
        productName: "Veg Patiz",
        description: "Crispy pastry filled with spiced vegetables",
        price: 15,
        category: "veg",
        quantity: 40,
        inStock: true
    },
    {
        productName: "Masala Chai",
        description: "Fresh brewed Indian tea with spices",
        price: 10,
        category: "drinks",
        quantity: 100,
        inStock: true
    },
    {
        productName: "Biscuit Rusk",
        description: "Crispy tea biscuits perfect with chai",
        price: 5,
        category: "veg",
        quantity: 60,
        inStock: true
    },

    // Markandey - Indian main course, slightly higher price
    {
        productName: "Butter Chicken",
        description: "Creamy tomato-based chicken curry with rice",
        price: 160,
        category: "non-veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Paneer Butter Masala",
        description: "Rich paneer curry in tomato and cashew gravy with rice",
        price: 140,
        category: "veg",
        quantity: 18,
        inStock: true
    },
    {
        productName: "Dal Makhani",
        description: "Slow-cooked black lentils in butter and cream with rice",
        price: 120,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Chicken Biryani",
        description: "Fragrant basmati rice with spiced chicken and raita",
        price: 180,
        category: "non-veg",
        quantity: 12,
        inStock: true
    },

    // Tragopan Canteen - Jain food, pure veg, no onion
    {
        productName: "Jain Aloo Paratha",
        description: "Potato-stuffed paratha without onion, served with curd",
        price: 50,
        category: "veg",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Jain Veg Maggi",
        description: "Maggi noodles prepared without onion and garlic",
        price: 40,
        category: "veg",
        quantity: 30,
        inStock: true
    },
    {
        productName: "Honey Chilli Potato",
        description: "Crispy potato cubes in sweet and spicy honey chilli sauce",
        price: 80,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Jain Samosa (2 pcs)",
        description: "Samosa made without onion, served with green chutney",
        price: 25,
        category: "veg",
        quantity: 40,
        inStock: true
    },

    // Bulbul Canteen - Parantha, Indian main course, rolls
    {
        productName: "Gobhi Paratha",
        description: "Cauliflower-stuffed paratha with pickle and curd",
        price: 60,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Rajma Rice",
        description: "Red kidney beans curry with steamed basmati rice",
        price: 90,
        category: "veg",
        quantity: 18,
        inStock: true
    },
    {
        productName: "Egg Roll",
        description: "Scrambled eggs with onions wrapped in parantha",
        price: 60,
        category: "non-veg",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Paneer Roll",
        description: "Grilled paneer wrapped in roomali roti with mint chutney",
        price: 70,
        category: "veg",
        quantity: 20,
        inStock: true
    },

    // Additional popular items across canteens
    {
        productName: "Cold Coffee",
        description: "Chilled coffee with ice cream and whipped cream",
        price: 50,
        category: "drinks",
        quantity: 30,
        inStock: true
    },
    {
        productName: "Lassi (Sweet)",
        description: "Traditional yogurt drink - sweet and refreshing",
        price: 40,
        category: "drinks",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Chicken Tikka (6 pcs)",
        description: "Marinated grilled chicken pieces with mint chutney",
        price: 120,
        category: "non-veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Veg Fried Rice",
        description: "Wok-tossed rice with mixed vegetables and sauces",
        price: 80,
        category: "veg",
        quantity: 20,
        inStock: true
    },

    // More Pizza Bite items
    {
        productName: "Pepperoni Pizza",
        description: "Classic pepperoni pizza with mozzarella cheese",
        price: 240,
        category: "non-veg",
        quantity: 8,
        inStock: true
    },
    {
        productName: "BBQ Chicken Pizza",
        description: "Pizza Bite special - BBQ chicken with onions and bell peppers",
        price: 260,
        category: "non-veg",
        quantity: 6,
        inStock: true
    },
    {
        productName: "Cheese Garlic Bread",
        description: "Crispy bread with garlic butter and melted cheese",
        price: 80,
        category: "veg",
        quantity: 15,
        inStock: true
    },

    // More items from The Daig
    {
        productName: "Tandoori Paratha",
        description: "Crispy paratha cooked in tandoor with butter",
        price: 45,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Veg Momos (8 pcs)",
        description: "Steamed vegetable dumplings with spicy chutney",
        price: 60,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Chicken Chowmein",
        description: "Stir-fried noodles with chicken and vegetables",
        price: 110,
        category: "non-veg",
        quantity: 12,
        inStock: true
    },
    {
        productName: "Malai Chaap",
        description: "Creamy soya chaap in rich cashew gravy",
        price: 100,
        category: "veg",
        quantity: 15,
        inStock: true
    },

    // More Griffon Canteen budget items
    {
        productName: "Mini Samosa (4 pcs)",
        description: "Small crispy samosas - budget friendly",
        price: 15,
        category: "veg",
        quantity: 60,
        inStock: true
    },
    {
        productName: "Bread Pakora",
        description: "Deep fried bread slices with spicy potato filling",
        price: 25,
        category: "veg",
        quantity: 35,
        inStock: true
    },
    {
        productName: "Aloo Tikki",
        description: "Fried potato patty with chutneys",
        price: 20,
        category: "veg",
        quantity: 40,
        inStock: true
    },
    {
        productName: "Boiled Egg (2 pcs)",
        description: "Simple boiled eggs with salt and pepper",
        price: 20,
        category: "non-veg",
        quantity: 30,
        inStock: true
    },

    // More Markandey premium items
    {
        productName: "Mutton Curry",
        description: "Slow-cooked mutton curry with rice or roti",
        price: 220,
        category: "non-veg",
        quantity: 8,
        inStock: true
    },
    {
        productName: "Veg Biryani",
        description: "Aromatic basmati rice with vegetables and paneer",
        price: 140,
        category: "veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Kadhai Paneer",
        description: "Cottage cheese cooked with bell peppers in spicy gravy",
        price: 150,
        category: "veg",
        quantity: 12,
        inStock: true
    },
    {
        productName: "Fish Curry",
        description: "Fresh fish cooked in traditional Indian spices",
        price: 180,
        category: "non-veg",
        quantity: 10,
        inStock: true
    },

    // More Tragopan Jain items
    {
        productName: "Pure Veg Manchurian",
        description: "Vegetable balls in tangy sauce without onion/garlic",
        price: 90,
        category: "veg",
        quantity: 18,
        inStock: true
    },
    {
        productName: "Jain Pav Bhaji",
        description: "Spicy mashed vegetables without onion, served with pav",
        price: 70,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Jain Hakka Noodles",
        description: "Stir-fried noodles prepared without onion and garlic",
        price: 80,
        category: "veg",
        quantity: 15,
        inStock: true
    },

    // More Bulbul Canteen items
    {
        productName: "Paneer Paratha",
        description: "Cottage cheese stuffed paratha with butter and curd",
        price: 70,
        category: "veg",
        quantity: 18,
        inStock: true
    },
    {
        productName: "Mixed Dal",
        description: "Variety of lentils cooked with Indian spices",
        price: 80,
        category: "veg",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Jeera Rice",
        description: "Basmati rice cooked with cumin seeds",
        price: 60,
        category: "veg",
        quantity: 30,
        inStock: true
    },
    {
        productName: "Egg Curry",
        description: "Boiled eggs in spicy tomato gravy with rice",
        price: 90,
        category: "non-veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Chicken Roll",
        description: "Grilled chicken wrapped in roomali roti with sauces",
        price: 90,
        category: "non-veg",
        quantity: 18,
        inStock: true
    },

    // Popular drinks and desserts across all canteens
    {
        productName: "Mango Lassi",
        description: "Thick yogurt drink with fresh mango pulp",
        price: 50,
        category: "drinks",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Fresh Lime Water",
        description: "Refreshing lime water with mint",
        price: 25,
        category: "drinks",
        quantity: 40,
        inStock: true
    },
    {
        productName: "Gulab Jamun (2 pcs)",
        description: "Soft milk balls in sugar syrup",
        price: 40,
        category: "dessert",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Kulfi",
        description: "Traditional Indian ice cream",
        price: 35,
        category: "dessert",
        quantity: 20,
        inStock: true
    },

    // Popular snacks and quick bites
    {
        productName: "Chole Bhature",
        description: "Spicy chickpea curry with fried bread",
        price: 110,
        category: "veg",
        quantity: 15,
        inStock: true
    },
    {
        productName: "Plain Dosa",
        description: "Crispy rice crepe served with sambar and chutney",
        price: 80,
        category: "veg",
        quantity: 20,
        inStock: true
    },
    {
        productName: "Idli Sambar (4 pcs)",
        description: "Steamed rice cakes with lentil soup",
        price: 60,
        category: "veg",
        quantity: 25,
        inStock: true
    },
    {
        productName: "Masala Dosa",
        description: "Crispy dosa filled with spiced potato filling",
        price: 100,
        category: "veg",
        quantity: 15,
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
            console.log(`- ${product.productName} (₹${product.price})`);
        });
        
    } catch (error) {
        console.error('Error adding products:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

addSampleProducts();
