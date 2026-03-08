
const connectDB = require('./config')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const productRoute = require('./routes/productRoutes')
const categoryRoute = require('./routes/categoryRoutes')

const rateLimit = require('express-rate-limit')
const connectDB = require('./config')
app.use(cors(corsOptions))
const app = express()
app.use(express.json())




app.use('/api/products', productRoute)
app.use('/api/categories', categoryRoute)



const port = process.env.PORT || 5000
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


connectDB()















app.listen(port, () => {
    console.log(`Example app listening on port ${port}, link: http://localhost:5000/`)


})
connectDB()








