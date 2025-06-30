# FoodHub IIT Mandi - Backend

Backend API for the FoodHub IIT Mandi food ordering application. Built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication system
- **Product Management**: CRUD operations for food items
- **Order Management**: Complete order processing system
- **Cart Operations**: Add, remove, and manage cart items
- **File Upload**: Image upload functionality with Cloudinary integration
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer with Cloudinary
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

2. Set up environment variables in `.env`:
   ```
   PORT=8080
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
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