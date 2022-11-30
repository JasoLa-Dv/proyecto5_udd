const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
   // nombre: { type:String, required:true },
    apellido: { type:String, required:true, default:'apellido' },
    correo: { type:String, required:true },
    //edad: { type:Number, required:true },
    //newsletter: { type:Boolean },
    favProducts: [{ type: mongoose.Types.ObjectId, ref:'product' }],
    password:{type: String, required:true, minLength: 8 },
    salt: {type: String, required: true },
    admin: {type: Boolean, required:true, default:false }
})

userSchema.methods.hashPassword = function (password) {
        this.salt = crypto.randomBytes(16).toString('hex')
        //encriptar password
        this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
     }

userSchema.methods.validatePassword = function (password, salt, passwordDB){
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
    return hash === passwordDB

}

userSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.SECRET)
    return token
}

const User = mongoose.model('user', userSchema)

module.exports = User