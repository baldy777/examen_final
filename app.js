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

  if (!nombre || !correo || !edad) {
    return res.status(400).send("Faltan datos.");
  }

  const fecharegistro = new Date();
  const horaRegistro = Date.now();

  const mensaje = "datos recibidos correctamente";
  const datosRecibidos = {
    id: datos.length + 1,
    nombre,
    correo,
    edad,
  };
  const jsonmensaje = {
    mensaje,
    datosRecibidos,
    fecharegistro,
    horaRegistro,
  };
  datos.push(datosRecibidos);
  res.send(jsonmensaje);
});

app.put("/datos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, correo, edad } = req.body;
  const index = datos.findIndex((d) => d.id === id);
  res.send("Dato actualizado correctamente");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
