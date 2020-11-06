var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

/*
mini tutorial de sequelize

selección:
  masiva: Modelo.findAll(queryObject)
  singular: Modelo.findOne(queryObject)
  porId: Modelo.findByPk(queryObject)

inserción:
  singular: Modelo.create(attributeObject)

modificación:
  singular: Modelo.update(attributeObject, queryObject)

borrado:
  logico: Modelo.update({ isDeleted: true }, queryObject)
  físico: Modelo.destroy(queryObject)

---

attributeObject = {
  columna: valor donde su tipo de dato es el definido en el esquema
}

queryObject = {
  where: {
    id: numero
    isDeleted: booleano
    ...
  }
}

en definitiva cualquier columna de esa tabla, equivale al WHERE de la query SQL ejemplo:
SELECT ... WHERE name = 'pepito' AND dni = '32565236'
queryObject = {
  where: {
    name: 'pepito',
    dni: '32565236'
  }
}

*/

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

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(parseInt(req.params.id))
    res.send(user)
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = router;
