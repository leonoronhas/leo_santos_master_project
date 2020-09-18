const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('pages/prove01', { 
    });
});

router.post('/submit',(req, res) => {
    res.render('pages/prove01display', { 
        input1: req.body.input1,
        input2: req.body.input2
    });
});

module.exports = router;