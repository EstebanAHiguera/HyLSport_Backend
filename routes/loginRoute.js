const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require("../controllers/loginController");

// Importar el middleware para proteger rutas
const verifyToken = require("../middleware/verifyTokens");
// Ruta de registro
router.post('/register',registrarUsuario);// POST /api/login/register

// Ruta pública: inicio de sesión
router.post("/login", loginUsuario); // POST /api/login/login


// Ruta protegida: solo accesible con token válido
router.get("/view-user", verifyToken, (req, res) => {
  res.status(200).json({
    mensaje: "Acceso autorizado",
    usuarioId: req.usuarioId, // Este ID lo inserta el middleware si el token es válido
  });
});

module.exports = router;

