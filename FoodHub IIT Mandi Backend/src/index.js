const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoutes');
// const User = require('./schema/userSchema');

const app = express();

app.use(cors({
    origin: ServerConfig.FRONTEND_URL, // allow to server to accept request from different origin
    credentials: true, // allow session cookie from browser to pass through
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use('/users', userRouter); // connects the router to the server
app.use('/carts', cartRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.get('/ping', (req, res) => {
    // controller
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message: "pong"});
});

const PORT = process.env.PORT || ServerConfig.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        status: 'Backend is running!',
        routes: [
            '/ping',
            '/products',
            '/products/:id',
            '/users',
            '/auth',
            '/carts',
            '/orders'
        ]
    });
});

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${PORT}...!!`);

    
});
