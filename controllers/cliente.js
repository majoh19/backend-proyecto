const Cliente = require("../models/cliente")
const { request, response } = require("express")

//crear
const createCliente = async (req = request, res = response) => {
    try {
        const email = req.body.email
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ""
        const clienteDB = await Cliente.findOne({ nombre, email })
        const data = {
            nombre,
            email
        }
        const cliente = new Cliente(data)
        console.log(cliente)
        await cliente.save()
        return res.status(201).json(cliente)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }

}


//listar
const getCliente = async (req = request, res = response) => {
    try {
        const clienteDB = await Cliente.find({})
        return res.json(clienteDB)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}

//editar
const updateClienteByID = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()
        const cliente = await Cliente.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(cliente)
      } catch (e) {
        console.log(e)
        return res.status(500).json({ msj: 'Error' })
      }
}

module.exports = { createCliente, getCliente, updateClienteByID }
