const User = require('../models/User')
const crypto = require('crypto')

const crearUsuario = async (req, res) => {
    try{
        const user = await User.findOne({ correo: req.body.correo })
        //controla usuario creado
        if (user) {
            throw new Error('Email en uso')
        }
        //crea usuario
        const newUser = new User(req.body)
        
        newUser.hashPassword(req.body.password)
      
        await newUser.save()
        res.json({success:true, message: 'User created', id: newUser._id, token: newUser.generateToken() })

    } catch (error){
        res.json({success:false, message:error.message})
    }
}

const obtenerUsuarios =  async (req, res) => {
    try{
        const users = await User.find().populate('favProducts')
        res.json({success:true, users})

    } catch (error){
        res.json({success:false, message:error.message})
    }
}

const eliminarUsuario =  async (req, res) => {
    try{
        const {id} = req.params
        const resultado = await User.findByIdAndDelete(id)
        if (!resultado){
            throw new Error ('El elemnto que intentas borrar, no existe')
        }
        res.json({success:true, response: id})

    } catch (error){
        res.json({success:false, message:error.message})
    }
}

const editarUsuario = async (req,res) => {
    try{
        const {id} = req.params
        const resultado = await User.findByIdAndUpdate(id, req.body, {new:true})
        if (!resultado){
            throw new Error ('El elemnto que intentas editar no existe')
        }
        res.json({success:true, response: id})

    } catch (error){
        res.json({success:false, message:error.message})
    }
}

const login = async (req, res) => {
    try{
        const { correo, password } = req.body

        const user = await User.findOne({ correo })
        if (!user) {
            throw new Error('Usuario y/o clave incorrecta')
        }
            const validate =  user.validatePassword(password, user.salt, user.password)
            
       if(!validate){
        throw new Error('Usuario y/o clave incorrecta')
       }

    res.json({ success:true, message: 'Usuario Logueado', token: user.generateToken()})

    } catch (error){
        res.json({success:false, message:error.message})
    }

    
 }


module.exports = { crearUsuario, obtenerUsuarios, eliminarUsuario, editarUsuario, login }