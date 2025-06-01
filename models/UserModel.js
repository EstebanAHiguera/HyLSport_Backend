const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  }
});

// Encriptar contraseña antes de guardar
userSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) return next();
  const salt = await bcrypt.genSalt(10);
  this.contrasena = await bcrypt.hash(this.contrasena, salt);
  next();
});

// Método para comparar contraseña
userSchema.methods.compararContrasena = function (contrasenaIngresada) {
  return bcrypt.compare(contrasenaIngresada, this.contrasena);
};

module.exports = mongoose.model('Usuario', userSchema);
