# FoodHub IIT Mandi - Backend

Backend API for the FoodHub IIT Mandi food ordering application. Built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication system
- **Product Management**: CRUD operations for food items
- **Order Management**: Complete order processing system
- **Cart Operations**: Add, remove, and manage cart items
- **File Upload**: Image upload functionality with local storage
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer for local file handling
- **Validation**: Custom middleware for data validation

## API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product details
- `POST /products` - Add new product (Admin)

### Cart
- `GET /cart` - Get user cart
- `POST /cart/:productId` - Add item to cart
- `DELETE /cart/:productId` - Remove item from cart

### Orders
- `POST /orders` - Create new order
- `GET /orders` - Get user orders

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your actual values
   # Update DB_URL with your MongoDB connection string
   # Set a strong JWT_SECRET for production
   ```

3. Configure your database connection in `.env`:
   - For local development: `mongodb://localhost:27017/foodhub`
   - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/database`

4. Start the development server:
   PORT=8080
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. API will be available at [http://localhost:8080](http://localhost:8080)

## Developer

**Kartavya Sandhu**  
Computer Science & Engineering Student  
Indian Institute of Technology Mandi  
Email: kartavya.sandhu@iitmandi.ac.in

## License

This project is developed as part of academic coursework at IIT Mandi.