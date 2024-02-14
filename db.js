import sql from "mssql";

export async function connectDB() {
  await sql.connect(
    "Server=172.30.109.9,1433;Database=capacitaciondb;User Id=capacitacion;Password=capacitacion123;Encrypt=true;TrustServerCertificate=true"
  );
  return sql
}

