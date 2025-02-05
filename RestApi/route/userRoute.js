let express = require('express')
let router = express.Router()
const { disp, addData, delData, editData } = require('../controller/userApiController')

router.get('/', disp)
router.post('/add', addData)
module.exports = router
