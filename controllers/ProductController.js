const Producto = require("../models/ProductModel"); // Modelo de producto

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion,precio, imagen,marca } = req.body;

    // Verifica que el usuario esté autenticado (se obtiene desde el middleware del token)
    const usuarioId = req.usuario.id;

    // Crea una nueva instancia del producto
    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      imagen,
      marca,
      usuarioId,
    });

    // Guarda en la base de datos
    await nuevoProducto.save();

    res.status(201).json({
      mensaje: "Producto creado exitosamente.",
      producto: nuevoProducto
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ mensaje: "Error en el servidor al crear el producto." });
  }
};

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find().populate("usuarioId", "nombre correo"); // Muestra info del usuario que los creó
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ mensaje: "Error en el servidor al listar productos." });
  }
};



// Eliminar un producto por ID
const eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Producto eliminado exitosamente." });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ mensaje: "Error en el servidor al eliminar el producto." });
  }
};

// Actualizar un producto por ID
const actualizarProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen, marca, stock } = req.body;
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, precio,imagen, marca, stock },
      { new: true }
    );
    res.status(200).json({ mensaje: "Producto actualizado exitosamente.", producto: productoActualizado });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ mensaje: "Error al actualizar el producto." });
  }
};

const obtenerProductosPorMarca = async (req, res) => {
  try {
    const marca = req.params.marca.toLowerCase();
    const productos = await Producto.find({ marca });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener productos por marca" });
  }
};

module.exports = {
  crearProducto,
  obtenerProductos,
  eliminarProducto,
  actualizarProducto,
  obtenerProductosPorMarca
};
