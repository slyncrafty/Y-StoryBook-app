const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// Routes
// @desc        Login/Landing Page
// @route       GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    });
})

// @desc        Dashboard
// @route       GET /Dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard');
})


module.exports = router;