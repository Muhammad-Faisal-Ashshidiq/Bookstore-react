const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express("./db.js");
const port = 4000;
const routeAkses = require("./routes");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses);

app.listen(port, () => {
  console.log("server berhasil running pada port : " + port);
});