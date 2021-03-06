const router = require('express').Router()
const passport = require('passport')
const passportSetup = require('../config/passport-setup')

//create log in route
router.get('/login', (req, res)=>{
    //render log in screen with Google Plus icon
    res.render('login')
})

//auth logout
router.get('/logout', (req, res)=>{
    //handle with passport
    res.send('logging out')
})

//auth with google
router.get('/google', passport.authenticate('google',{
    //what information we want to get from Google
    scope: ['profile']
}))

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached call back URI')
})

module.exports = router