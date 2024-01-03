const {Router} = require('express')
const { karyawanControllers } = require('../controllers')
const router = Router()
router.post('/', karyawanControllers.createKaryawan)
router.get('/:nomor_induk', karyawanControllers.getKaryawanById)
router.get('/', karyawanControllers.getAllKaryawan)
router.put('/:nomor_induk', karyawanControllers.updateKaryawan)
router.delete('/:nomor_induk', karyawanControllers.deleteKaryawanById)
module.exports = router