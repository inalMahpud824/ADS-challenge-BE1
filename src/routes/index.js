const karyawanRoutes = require('./karyawan.routes')
const router = require('express').Router()

router.use('/karyawan', karyawanRoutes)
module.exports = router
