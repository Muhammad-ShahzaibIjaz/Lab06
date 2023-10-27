const express = require("express");
require("./utils/db");
const bodyParser = require("body-parser");
const app = express();
const port = 3005;
const routes = require("./routes/routes");
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);
app.listen(port, () => console.log(`App listening on port ${port}!`));
