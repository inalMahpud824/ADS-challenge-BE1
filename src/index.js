const express = require('express')
const {port} = require('./config/index')
const app = express()
const routes = require('./routes')
app.use(express.json())

app.use(routes)
app.listen(port, () => {
  console.log('server berjalan ' + port)
})