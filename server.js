const express = require("express"); // Framework para crear el servidor y manejar rutas
const mongoose = require("mongoose"); // Librería para conectar y manejar MongoDB
const cors = require("cors"); // Middleware para permitir peticiones de otros dominios (como React)
require("dotenv").config(); // Carga variables de entorno desde el archivo .env



const app = express(); // Inicializa la aplicación de Express
app.use(cors()); // Habilita CORS para permitir acceso desde el frontend
app.use(express.json({ limit: "10mb" })); // Permite que Express entienda datos en formato JSON enviados por el cliente
app.use(express.urlencoded({ extended: true, limit: "10mb" })); //Tamaño de carga de archivos

// Importar rutas
const loginRoutes = require("./routes/loginRoute"); // Importa las rutas relacionadas a autenticación
app.use("/api/login", loginRoutes); // Monta esas rutas bajo el prefijo /api/login 

const productRoutes = require("./routes/productroute");
app.use("/api/productos", productRoutes);

// Conectar base de datos
mongoose.connect(process.env.MONGO_URI) // Usa la URI almacenada en .env para conectar a MongoDB Atlas
  .then(() => console.log("✅ Conectado a MongoDB")) // Mensaje si la conexión fue exitosa
  .catch((err) => console.error("❌ Error MongoDB:", err)); // Muestra error si la conexión falla

// Ruta raíz
app.get("/", (req, res) => res.send("HyLSports API funcionando 🚀")); // Ruta básica para verificar que el servidor está activo

const PORT = process.env.PORT || 5000; // Puerto donde correrá el servidor (configurable en .env)
app.listen(PORT, () => console.log(`🚀 Servidor escuchando en puerto ${PORT}`)); // Inicia el servidor y muestra mensaje
