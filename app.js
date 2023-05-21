const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))

const tipoProyecto = require('./routes/tipoProyecto')
app.use('/api/tiposproyectos', tipoProyecto)

const cliente = require('./routes/cliente')
app.use('/api/clientes', cliente)

const universidad = require('./routes/universidad')
app.use('/api/universidades', universidad)

const etapa = require('./routes/etapa')
app.use('/api/etapas', etapa)

module.exports = app