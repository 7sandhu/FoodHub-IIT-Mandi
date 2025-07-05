# FoodHub IIT Mandi

A comprehensive food ordering web application designed specifically for the IIT Mandi campus community. This full-stack application allows students and staff to order food from various campus canteens and local restaurants.

## 🌟 Features

- **Restaurant Selection**: Browse multiple campus canteens and local restaurants
- **User Authentication**: Secure registration and login system
- **Product Catalog**: View detailed food items with images and prices
- **Shopping Cart**: Add items to cart and manage quantities
- **Order Management**: Place orders and track order history
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🛠 Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Multer** - File upload middleware

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Food Project"
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd "FoodHub IIT Mandi Backend"
   npm install

   # Install frontend dependencies
   cd "../FoodHub IIT Mandi Frontend"
   npm install
   ```

3. Set up environment variables:
   
   **Backend Configuration:**
   ```bash
   cd "FoodHub IIT Mandi Backend"
   cp .env.example .env
   # Edit .env with your MongoDB connection string and JWT secret
   ```
   
   **Frontend Configuration:**
   ```bash
   cd "../FoodHub IIT Mandi Frontend"
   cp .env.example .env
   # Edit .env if you need to change the backend URL
   ```

4. Start the development servers:
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start both servers:
   ```bash
   # From the root project directory
   ./start-servers.bat
   ```

5. Open your browser and navigate to:
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:8080](http://localhost:8080)

## 📱 Application Overview

### Home Page
- Hero section with project introduction
- Restaurant selection interface
- Services showcase
- About section with developer information

### Authentication
- User registration with validation
- Secure login system
- Protected routes for authenticated users

### Menu & Shopping
- Browse food items by restaurant
- View detailed product information
- Add items to shopping cart
- Manage cart quantities

### Order Management
- Place orders from cart
- Order confirmation system
- View order history

## 🎯 Campus Context

This application was specifically designed for the IIT Mandi campus, addressing the unique challenges of food delivery in mountainous terrain. The platform connects students with local canteens and restaurants, making food ordering convenient and accessible for the campus community.

## 👨‍💻 Developer

**Kartavya Sandhu**  
Computer Science & Engineering Student  
Indian Institute of Technology Mandi  
📧 Email: kartavya.sandhu@iitmandi.ac.in

## 📄 License

This project is developed as part of academic coursework at IIT Mandi. All rights reserved.

## 🤝 Contributing

This is an academic project. For any suggestions or improvements, please contact the developer.

---

*Developed with ❤️ for the IIT Mandi community*
