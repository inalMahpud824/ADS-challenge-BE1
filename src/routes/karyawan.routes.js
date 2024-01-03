const {Router} = require('express')
const { karyawanControllers } = require('../controllers')
const router = Router()
router.post('/', karyawanControllers.createKaryawan)
router.put('/:nomor_induk', karyawanControllers.updateKaryawan)
module.exports = router