const express = require("express");

const routes = require("./src/routes");

const app = express();

app.use(express.json());

app.use(routes);

const cors = require("cors");

const PORT = 4444;

app.use(cors);


app.listen(PORT, () => console.log(`server running on port ${PORT}`))