# Car Wash Booking Application

This is a car wash booking application that allows users to book car wash services at home from participating companies and make payments within the app.

## Features

- User registration and authentication
- Company registration and service management
- Booking car wash services
- Payment integration using Stripe

## Tech Stack

- **Back-End:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Integration:** Stripe

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [Stripe Account](https://stripe.com/) (for payment processing)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/car-wash-app.git
cd car-wash-app
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File

```bash
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_stripe_secret_key` with your Stripe secret key.

### 4. Start the Server

```bash
node app.js
```
