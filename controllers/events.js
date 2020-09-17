const { response } = require("express");

// Crear Eventos
const crearEvento = async (req, res = response) => {

    res.status(201).json({
        ok: true,
        msg: 'Crear Eventos'
    });

};
// Obtener Eventos
const getEventos = (req, res = response) => {

    res.status(201).json({
        ok: true,
        msg: 'Obtener Eventos',
    });

};
// Actualizar Eventos
const actualizarEvento = (req, res = response) => {

    res.status(201).json({
        ok: true,
        msg: 'Actualizar Eventos',
    });

};
// Eliminar Eventos
const eliminarEvento = (req, res = response) => {

    res.status(201).json({
        ok: true,
        msg: 'Eliminar Eventos',
    });

};

module.exports = {
    crearEvento,
    getEventos,
    actualizarEvento,
    eliminarEvento
};