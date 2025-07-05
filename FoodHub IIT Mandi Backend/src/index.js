const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const createIndexes = require('./config/createIndexes');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoutes');

const app = express();

// Security middleware
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Compression middleware for better performance
app.use(compression({
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    },
    threshold: 1024, // Only compress files larger than 1KB
    level: 6 // Compression level (1-9, 6 is good balance)
}));

// Performance optimizations
app.use(express.json({ limit: '10mb' })); // Limit payload size
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({
    origin: ServerConfig.FRONTEND_URL, // allow to server to accept request from different origin
    credentials: true, // allow session cookie from browser to pass through
}));

app.use(cookieParser());
app.use(express.text());

// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use('/users', userRouter); // connects the router to the server
app.use('/carts', cartRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.get('/ping', (req, res) => {
    return res.json({message: "pong"});
});

app.listen(ServerConfig.PORT, async () => {
    try {
        await connectDB();
        console.log(`Server started at port ${ServerConfig.PORT}...!!`);
        
        // Create database indexes for better performance (optional, non-blocking)
        setTimeout(() => {
            createIndexes().catch(err => console.log('Index creation warning:', err.message));
        }, 3000);
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
});
