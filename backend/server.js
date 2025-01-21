import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// database connection
connectDB();

// api endpointes

app.use('/api/food', foodRouter);
// app.use('/images', express.static('uploads'));
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
// routes
app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
