const express = require('express')
const { crearUsuario, obtenerUsuarios, eliminarUsuario, editarUsuario, login } = require('../controllers/userControllers')
const { createProduct, obtenerProduct } = require('../controllers/productControllers')
const auth = require('../middlewares/auth')

const router = express.Router()

router.route('/usuario')
    .post(crearUsuario)
    .get(obtenerUsuarios)

router.route('/usuario/:id')
    .delete(eliminarUsuario)
    .put(editarUsuario)

router.route('/usuario/login').post(login)

router.route('/productos')
    .post(auth, createProduct)

router.route('/productos/')
    .get(obtenerProduct)

module.exports = router