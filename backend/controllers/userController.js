const Usuario = require('../models/Usuario');
const {encryptPassword,verifyPassword} = require('./../utils/authUtils');

exports.createUser = async(req, res) => {
    try {
        const {nombre, email, password, rol} = req.body;
        const usuario = await Usuario.create({
            nombre,
            email,
            password,
            rol
        });

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear usuario' });
    }
}