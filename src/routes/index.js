const karyawanRoutes = require('./karyawan.routes')
const cutiRoutes = require('./cuti.routes')
const router = require('express').Router()

router.use('/karyawan', karyawanRoutes)
router.use('/cuti', cutiRoutes)
module.exports = router
