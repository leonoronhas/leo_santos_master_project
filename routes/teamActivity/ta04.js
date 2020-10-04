//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For pug, EJS 
    });
});

module.exports = router;