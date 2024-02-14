import {Router} from 'express'
import { connectDB } from "../db.js";

const router = Router()

router.get("/clientes", async (req, res) => {
  const sql = await connectDB();
  const result = await sql.query("SELECT * FROM clientes");
  console.log(result);

  res.json(result.recordset);
});

router.post("/clientes", async (req, res) => {
  const nuevoCliente = req.body;
  console.log(nuevoCliente);

  const sql = await connectDB();

  const result = await sql.query(
    `INSERT INTO Clientes (Nombre, Apellido, Email) VALUES ('${nuevoCliente.Nombre}', '${nuevoCliente.Apellido}', '${nuevoCliente.Email}')`
  );

  console.log(result);

  res.send("creando cliente");
});

router.get("/clientes/:email", async (req, res) => {
  console.log(req.params.email);

  const sql = await connectDB();
  const result = await sql.query(
    `SELECT * FROM Clientes WHERE Email = '${req.params.email}'`
  );

  res.json(result.recordset);
});

router.delete("/clientes/:email", async (req, res) => {
  console.log(req.params.email);

  const sql = await connectDB();
  const result = await sql.query(
    `DELETE FROM Clientes WHERE Email = '${req.params.email}'`
  );

  res.json(result.recordset);
});

router.put("/clientes/:email", async (req, res) => {
  console.log(req.params.email);

  const sql = await connectDB();
  const result = await sql.query(
    `UPDATE Clientes SET Email='${req.body.Email}' WHERE Email = '${req.params.email}' `
  );

  res.json(result.recordset);
});

export default router