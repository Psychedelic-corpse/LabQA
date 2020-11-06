var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

/* Post users listing. */
router.post('/', async function(req, res, next) {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.send(error)
  }
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
