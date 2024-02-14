import express from "express";
import clientesRoutes from "./clientes/clientes.js";
import productosRoutes from "./productos/productos.js";

const app = express();

app.use(express.json());

// middleware
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     next();
//   } else {
//     return res.send("No permitido");
//   }
// });

// Rutas

app.use(clientesRoutes);
app.use(productosRoutes);

app.listen(3000);
console.log("Servidor ejecutandose en el puerto 3000");
