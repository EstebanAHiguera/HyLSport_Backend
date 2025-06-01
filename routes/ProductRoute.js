const express = require("express");
const router = express.Router();

 
//importar los controladores
const { crearProducto, obtenerProductos, eliminarProducto, actualizarProducto, obtenerProductosPorMarca } = require("../controllers/ProductController");

// Importar middleware para proteger ciertas rutas
const verifyToken = require("../middleware/verifyTokens");

// Ruta protegida para crear un producto (requiere token JWT)
router.post("/", verifyToken, crearProducto); // POST /api/productos

// Ruta pública para obtener todos los productos
router.get("/", obtenerProductos); // GET /api/products

router.delete("/:id", verifyToken, eliminarProducto); // DELETE /api/productos/:id
router.put("/:id", verifyToken, actualizarProducto);

// routes/productos.js o productos.controller.js
// Ruta para obtener productos por marca

router.get("/marca/:marca", obtenerProductosPorMarca);


module.exports = router;
