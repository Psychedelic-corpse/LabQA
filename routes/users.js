var express = require('express');
var router = express.Router();

/* Post users listing. */
router.post('/', function(req, res, next) {
  res.json(req.body);
});

router.get('/', (req,res, next)=>{
  res.json({
        "name":"Juansito",
        "lastname": "Eleonard",
        "ID": 40040186,
        "email":"Juan9888@latam.com",
        "dayOfBirth":new Date("1989-09-12")
        




  })
})

router.put('/', (req, res, next) => {
    res.json({
        "name":"Miguel",
        "lastname": "Errand",
        "ID": 38940186,
        "email":"ElSiome88@latam.com",
        "dayOfBirth":new Date("1969-01-22")
    })
})

// app.put('/', (req,res, next)=>{
//     res.json()
// })


module.exports = router;
