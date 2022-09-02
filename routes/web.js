const express = require('express')
const contactinsert = require('../controller/contactinsert');
const admincontroller = require('../controller/admincontroller');
const router = express.Router();

router.post('/contactinsert',contactinsert.insertcontact)
router.get('/contactall',contactinsert.getcontact);
router.post('/insert',admincontroller.adminregistration);
router.post('/login',admincontroller.adminlogin);




module.exports = router;

