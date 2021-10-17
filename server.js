require('dotenv').config()
const express = require('express');
const app = express();
var cors = require('cors')
const categoryRouter = require('./routes/category')
const productRouter = require('./routes/product')
const connectDB = require('./config/db')
app.use(cors())
app.use(express.json());
app.use('/api',categoryRouter);
app.use('/api',productRouter)
connectDB();
app.listen(process.env.PORT,()=>console.log(`server listning on port ${process.env.PORT}`))