require('dotenv').config();
const express = require('express');
const app = express();
const productRoutes = require('./routes/product.routes');
const paymentRoutes = require('./routes/payment.routes')
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/product',productRoutes);
app.use('/api/product',paymentRoutes);



module.exports=app;