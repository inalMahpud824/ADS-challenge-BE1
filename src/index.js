const express = require('express')
const port = require('./config/index')
const app = express()
app.listen(port, () => {
  console.log('server berjalan ' + port)
})