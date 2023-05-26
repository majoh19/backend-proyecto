const TipoProyecto = require("../models/tipoProyecto")
const { request, response } = require("express")

//crear
const createTipoProyecto = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ""
        const data = {
            nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}

//listar
const getTipoProyecto = async (req = request, res = response) => {
    try {
        const tipoProyectoDB = await TipoProyecto.find({})
        return res.json(tipoProyectoDB)
    } catch (e) {
        return res.status(500).json({
            msg: "Error general" + e
        })
    }
}


//editar
const updateTipoProyectoByID = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const data = req.body
        data.fechaActualizacion = new Date()
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, { new: true})
        return res.status(201).json(tipoProyecto)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msj: 'Error' })
    }
}

module.exports = { createTipoProyecto, getTipoProyecto, updateTipoProyectoByID }
