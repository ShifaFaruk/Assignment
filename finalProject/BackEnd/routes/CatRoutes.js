var express = require('express')
var app = express()
var router = express.Router()
const {disp,addData,delData,editData}  = require('../controllers/Catcontroller')

router.get('/catlist',disp)
router.post('/add',addData)
module.exports = router