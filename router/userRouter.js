const express = require('express');

const { updateUser } = require('../controller/updateUser.js');
const { loginuser } = require('../controller/loginUser.js');
const { usercreate } = require('../controller/usercreate.js');

const router = express.Router()

//=======================User===============
router.post("/usercreate", usercreate)
router.patch("/updateuser/:id", updateUser)
router.get("/loginuser", loginuser)




module.exports = router;