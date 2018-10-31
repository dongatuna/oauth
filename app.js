const express = require('express')
const authRoutes = require('./routes/auth-routes')
const app = express()
const  mongoose = require('mongoose')
const keys = require('./config/keys')
//set up the view engine
app.set('view engine', 'ejs')

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log("connected to mongo db")
})

//set up routes
app.use('/auth', authRoutes)

//create the home route
app.get("/", (req, res)=>{
    res.render('home')
})
app.listen(3000, ()=>{
    console.log("app now listenting for request on port 3000")
})