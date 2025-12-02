const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let datos = [];

app.get("/", (req, res) => {
  const servicio = "proyecto-backend";
  const version = "1.11.2";
  const entorno = "servicio funcionando correctamente";
  const estado = "sertvicio funcionando correctamente";
  const fecha = new Date();
  const hora = Date.now();

  const datosServidor = {
    servicio,
    version,
    entorno,
    estado,
    fecha,
    hora,
  };

  res.json(datosServidor);
});

app.get("/datos", (req, res) => {
  res.json(datos);
});

app.post("/datos", (req, res) => {
  const { nombre, correo, edad } = req.body;

  const fecharegistro = new Date();
  const horaRegistro = Date.now();

  const mensaje = "datos recibidos correctamente";
  const datosRecibidos = {
    nombre,
    correo,
    edad,
  };
  datos.push(datosRecibidos);
  res.send(mensaje, datosRecibidos, fecharegistro, horaRegistro);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
