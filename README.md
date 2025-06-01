🏋️‍♂️ HyLSport - Backend
Este es el backend del proyecto HyLSport, una tienda deportiva en línea desarrollada con Node.js y Express. Proporciona una API REST que permite gestionar productos por marca (Adidas, Nike, Puma, Reebok), manejar imágenes, y conectar con el frontend creado en React.

🚀 Tecnologías usadas
Node.js
Express.js
MongoDB + Mongoose
Multer (para subir imágenes)
CORS
Dotenv
📁 Estructura del proyecto
HyLSport_Backend/

├── controllers/ # Lógica de cada entidad (productos, marcas)

├── models/ # Esquemas de MongoDB

├── routes/ # Rutas API por recurso

├── .env # Variables de entorno

├── server.js # Archivo principal del servidor

⚙️ Configuración
Clona el repositorio: bash git clone https://github.com/EstebanAHiguera/HyLSport_Backend.git
2.instala las dependencias npm install

3.crea un archivo .evn conlo siguiente PORT=5000 MONGO_URI=mongodb+srv://:<contraseña>@.mongodb.net/hylsport

4.Inicia el servidor npm run dev

🧠 Funcionalidades principales CRUD de productos deportivos por marca

Carga de imágenes desde el panel de administración

Conexión directa con el frontend de HyLSport

Estructura modular y escalable

🌐 Endpoints principales

GET /api/productos # Lista todos los productos

GET /api/productos/:marca # Filtra por marca

POST /api/productos # Crea un nuevo producto (requiere imagen)

PUT /api/productos/:id # Edita un producto

DELETE /api/productos/:id # Elimina un producto

✨ Autores 

Desarrollado por Esteban Higuera y Maryan Lee como parte del proyecto de tienda deportiva HyLSport.
