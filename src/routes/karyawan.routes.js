const {Router} = require('express')
const { karyawanControllers } = require('../controllers')
const router = Router()
router.post('/', karyawanControllers.createKaryawan)
module.exports = router