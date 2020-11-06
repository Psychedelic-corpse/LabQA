var express = require('express');
var router = express.Router();


// POST form page
router.post('/', function(req, res, next){
    res.json(req.body);
});




module.exports = router;