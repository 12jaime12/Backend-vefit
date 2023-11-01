const { connect } = require("./src/utils/db");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const AlimentosRoutes = require("./src/api/routes/Alimentos.routes");
const GastosRoutes = require("./src/api/routes/Gastos.routes");
const HabitosRoutes = require("./src/api/routes/Habitos.routes");
const { LibrosRouter } = require("./src/api/routes/Libros.routes");
const ReflexionRouter = require("./src/api/routes/Reflexion.routes");

const app = express();
const PORT = process.env.PORT;
dotenv.config();
connect();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: false }));

//----------routes------------
app.use("/api/v1/alimentos/", AlimentosRoutes);
app.use("/api/v1/gastos/", GastosRoutes);
app.use("/api/v1/habitos/", HabitosRoutes);
app.use("/api/v1/libros/", LibrosRouter);
app.use("/api/v1/reflexion/", ReflexionRouter);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");
app.listen(PORT, () => {
  console.log(`Listening on PORT https://localhost:8085`);
});
