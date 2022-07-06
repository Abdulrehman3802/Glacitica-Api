const express = require('express')
const router = express.Router()
const nproject = require('./../controller/createcontroller')
const customMulter = require('../middlewares/custom_multer_middleware')

router.route('/create').post(customMulter, nproject.createbrand)
router.route('/project').get(nproject.getbrand)

module.exports = router