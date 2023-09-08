const express = require('express');

const router = express.Router();

router.get('/addblog', (req, res) => {
    res.send('Response from addblog');
})

router.get('/getbyid', (req, res) => {
    res.send('Response from blog getbyid');
})

router.get('/getall', (req, res) => {
    res.send('Response from blog getall');
})

module.exports = router;

// addblog
// getbyid
// getall