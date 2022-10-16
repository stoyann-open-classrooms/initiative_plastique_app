const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()


// Connect to database
connectDB()
// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.status(200).json({ message: `Bienvenue sur l'api initiative plastique` })
})


// routes
app.use('/api/users', require('./routes/userRoutes'))


// custom error middleware
app.use(errorHandler)


app.listen(PORT, () => console.log(`server starded on port ${PORT}`))
