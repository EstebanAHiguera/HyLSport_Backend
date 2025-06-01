const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true, min: 0 },
  imagen: { type: String },
  marca: {
    type: String,
    enum: ["adidas", "nike", "puma", "reebok"],
    required: true,
  },
  
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }, // <- NUEVO
}, { timestamps: true });

module.exports = mongoose.model("Producto", productoSchema);
