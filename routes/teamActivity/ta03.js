//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/team-activityta03', // For pug, EJS 
    });
});

module.exports = router;