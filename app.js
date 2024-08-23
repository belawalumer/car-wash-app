const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const companyRoutes = require('./routes/companies');
const serviceRoutes = require('./routes/services');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/services', serviceRoutes);

// Payment route
app.post('/api/payment', async (req, res) => {
    const { amount, token } = req.body;
    try {
        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source: token,
            description: 'Car wash service payment',
        });
        res.status(200).json({ success: true, charge });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});